import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  questionId,
  type SubjectFilter,
  type SubjectQuestion,
} from "@/subjects/types";
import {
  clearQuizProgress,
  getOrCreateDeviceId,
  loadLastWrongIds,
  saveLastWrongIds,
  saveQuizProgress,
  useBookmarks,
  type SavedQuizProgress,
  type SubjectId,
} from "@/lib/storage";
import { pingUserCount } from "@/lib/api";
import { QuizResult, type AnswerRecord } from "./QuizResult";

interface QuizModeProps {
  readonly subjectId: SubjectId;
  readonly allQuestions: readonly SubjectQuestion[];
  readonly filters: readonly SubjectFilter[];
  readonly initialFilter: SubjectFilter;
  readonly tagColors: Record<string, string>;
  readonly resumeFrom?: SavedQuizProgress | null;
  readonly onBack: () => void;
  readonly onSaveResult?: (result: {
    readonly filter: string;
    readonly score: number;
    readonly total: number;
    readonly durationSecs: number;
  }) => void;
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function shuffle<T>(arr: readonly T[]): readonly T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = result[i];
    result[i] = result[j]!;
    result[j] = tmp!;
  }
  return result;
}

function selectQuestions(
  filter: SubjectFilter,
  all: readonly SubjectQuestion[],
  bookmarks: ReadonlySet<string>,
  wrongIds: ReadonlySet<string>,
): readonly SubjectQuestion[] {
  switch (filter.kind.type) {
    case "all":
      return shuffle(all);
    case "bookmarks":
      return shuffle(all.filter((q) => bookmarks.has(questionId(q))));
    case "wrong":
      return all.filter((q) => wrongIds.has(questionId(q)));
    case "topic": {
      const topic = filter.kind.topic;
      return shuffle(all.filter((q) => q.tag === topic));
    }
  }
}

function findFilterByLabel(
  label: string,
  filters: readonly SubjectFilter[],
): SubjectFilter | undefined {
  return filters.find((f) => f.label === label);
}

// A question can be "short-answerised" if the correct answer is ≤ 10 chars.
function canBeShortAnswer(q: SubjectQuestion): boolean {
  if (q.passage) return false;
  const ans = q.opts[q.ans] ?? "";
  return ans.length > 0 && ans.length <= 10;
}

// Normalize text for comparison: trim + lowercase.
function normalizeAnswer(s: string): string {
  return s.trim().toLowerCase();
}

function formatElapsed(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface PillProps {
  readonly active?: boolean;
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
  readonly ariaPressed?: boolean;
  readonly tone?: "gold" | "teal" | "wrong";
  readonly disabled?: boolean;
}

function Pill({
  active = false,
  children,
  onClick,
  ariaPressed,
  tone = "gold",
  disabled = false,
}: PillProps) {
  const base =
    "rounded-lg border-0 px-[18px] py-2.5 font-serif text-[13px] font-bold tracking-wide transition-colors duration-200";
  let cls: string;
  if (disabled) {
    cls = "cursor-not-allowed opacity-40 bg-surface-2 text-text-dim";
  } else if (tone === "teal") {
    cls = active
      ? "cursor-pointer bg-teal text-white"
      : "cursor-pointer bg-surface-2 text-teal hover:bg-surface-2/80";
  } else {
    cls = active
      ? "cursor-pointer bg-gold text-bg"
      : "cursor-pointer bg-surface-2 text-gold hover:bg-surface-2/80";
  }
  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      aria-pressed={ariaPressed}
      disabled={disabled}
      className={`${base} ${cls}`}
    >
      {children}
    </button>
  );
}

interface BookmarkButtonProps {
  readonly active: boolean;
  readonly onToggle: () => void;
}

function BookmarkButton({ active, onToggle }: BookmarkButtonProps) {
  const label = active ? "Bỏ đánh dấu câu này" : "Đánh dấu câu này";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      aria-label={label}
      title={label}
      className={`flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border transition-colors duration-200 ${
        active
          ? "border-gold bg-gold/15 text-gold"
          : "border-border-earth bg-surface-2 text-text-dim hover:border-gold/60 hover:text-gold"
      }`}
    >
      <span aria-hidden="true" className="text-lg leading-none">
        {active ? "★" : "☆"}
      </span>
    </button>
  );
}

// Short-answer input component
interface ShortAnswerInputProps {
  readonly question: SubjectQuestion;
  readonly onSubmit: (isCorrect: boolean) => void;
}

function ShortAnswerInput({ question, onSubmit }: ShortAnswerInputProps) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const correctAnswer = question.opts[question.ans] ?? "";

  const handleSubmit = () => {
    if (!value.trim() || result !== null) return;
    const isCorrect =
      normalizeAnswer(value) === normalizeAnswer(correctAnswer);
    setResult(isCorrect ? "correct" : "wrong");
    onSubmit(isCorrect);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="mt-2 flex flex-col gap-3">
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          disabled={result !== null}
          placeholder="Nhập câu trả lời…"
          aria-label="Câu trả lời ngắn"
          className="min-w-0 flex-1 rounded-[10px] border-2 border-border-earth bg-surface px-4 py-3 text-sm text-text placeholder-text-dim outline-none transition-colors duration-200 focus:border-gold disabled:opacity-60"
        />
        {result === null && (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!value.trim()}
            className="cursor-pointer rounded-[10px] border-0 bg-teal px-5 py-3 font-serif text-sm font-bold text-white disabled:opacity-40"
          >
            Kiểm tra
          </button>
        )}
      </div>

      {result !== null && (
        <div
          role="status"
          className={`rounded-[10px] border-2 px-4 py-3 text-sm ${
            result === "correct"
              ? "border-correct bg-correct-bg text-correct"
              : "border-wrong bg-wrong-bg text-wrong"
          }`}
        >
          {result === "correct" ? (
            <span>✓ Chính xác! Đáp án: <strong>{correctAnswer}</strong></span>
          ) : (
            <span>
              ✗ Chưa đúng. Đáp án đúng là:{" "}
              <strong className="text-correct">{correctAnswer}</strong>
            </span>
          )}
        </div>
      )}

      {result !== null && (
        <div className="rounded-[10px] border border-border-earth bg-surface-2 px-4 py-2 text-[12px] text-text-dim">
          <span className="font-bold text-text-dim">Các lựa chọn: </span>
          {question.opts.map((opt, i) => (
            <span
              key={i}
              className={`mr-2 ${i === question.ans ? "font-bold text-correct" : ""}`}
            >
              {String.fromCharCode(65 + i)}. {opt}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function QuizMode({
  subjectId,
  allQuestions,
  filters,
  initialFilter,
  tagColors,
  resumeFrom,
  onBack,
  onSaveResult,
}: QuizModeProps) {
  const { bookmarks, isBookmarked, toggleBookmark } = useBookmarks(subjectId);

  const wrongIds = useMemo<ReadonlySet<string>>(
    () => new Set(loadLastWrongIds(subjectId)),
    [subjectId],
  );

  // Build an ID→question lookup for efficient resume restoration
  const questionById = useMemo<ReadonlyMap<string, SubjectQuestion>>(
    () => new Map(allQuestions.map((q) => [questionId(q), q])),
    [allQuestions],
  );

  // Restore resume: order questions by saved IDs so shuffle order is preserved
  const initial = useMemo(() => {
    if (!resumeFrom) return null;
    const filter =
      findFilterByLabel(resumeFrom.filter, filters) ?? initialFilter;
    const restoredQuestions = resumeFrom.questionIds
      .map((id) => questionById.get(id))
      .filter((q): q is SubjectQuestion => q !== undefined);
    if (restoredQuestions.length !== resumeFrom.questionIds.length) return null;
    if (resumeFrom.currentQ < 0 || resumeFrom.currentQ >= restoredQuestions.length)
      return null;
    return { filter, questions: restoredQuestions, saved: resumeFrom };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // resolve once on mount

  // --- Quiz state ---
  const [filter, setFilter] = useState<SubjectFilter>(
    initial?.filter ?? initialFilter,
  );
  const [questions, setQuestions] = useState<readonly SubjectQuestion[]>(
    () =>
      initial?.questions ??
      selectQuestions(initialFilter, allQuestions, bookmarks, wrongIds),
  );
  const [currentQ, setCurrentQ] = useState(initial?.saved.currentQ ?? 0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplain, setShowExplain] = useState(false);
  const [score, setScore] = useState(initial?.saved.score ?? 0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>(
    () => (initial ? [...initial.saved.answers] : []),
  );

  // Short-answer mode toggle
  const [shortAnswerMode, setShortAnswerMode] = useState(false);
  // Tracks whether the current short-answer question was answered (for "next" button)
  const [shortAnswerDone, setShortAnswerDone] = useState(false);

  // --- Timer ---
  const quizStartTimeRef = useRef<number>(
    initial?.saved.startedAt ?? Date.now(),
  );
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - quizStartTimeRef.current) / 1000));
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // --- User counter ping ---
  // Fire once when the first question in this quiz session is answered.
  const hasPingedRef = useRef(false);
  const sendPing = useCallback(() => {
    if (hasPingedRef.current) return;
    hasPingedRef.current = true;
    const deviceId = getOrCreateDeviceId();
    pingUserCount(deviceId, subjectId);
  }, [subjectId]);

  // --- Auto-save progress ---
  const finishedRef = useRef(finished);
  finishedRef.current = finished;

  useEffect(() => {
    if (finishedRef.current) return;
    if (questions.length === 0) return;
    saveQuizProgress(subjectId, {
      filter: filter.label,
      questionIds: questions.map((q) => questionId(q)),
      currentQ,
      score,
      answers: answers.map((a) => ({ selected: a.selected, correct: a.correct })),
      updatedAt: Date.now(),
      startedAt: quizStartTimeRef.current,
    });
  }, [subjectId, filter, questions, currentQ, score, answers]);

  // --- Reset helpers ---
  const resetQuizState = (
    nextFilter: SubjectFilter,
    next: readonly SubjectQuestion[],
  ) => {
    quizStartTimeRef.current = Date.now();
    setElapsed(0);
    hasPingedRef.current = false;
    setFilter(nextFilter);
    setQuestions(next);
    setCurrentQ(0);
    setSelected(null);
    setShowExplain(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
    setShortAnswerDone(false);
    clearQuizProgress(subjectId);
  };

  const handleFilterChange = (next: SubjectFilter) => {
    resetQuizState(
      next,
      selectQuestions(next, allQuestions, bookmarks, wrongIds),
    );
  };

  const handleRetry = () => {
    resetQuizState(
      filter,
      selectQuestions(filter, allQuestions, bookmarks, wrongIds),
    );
  };

  const computeWrongIds = (
    finalAnswers: readonly AnswerRecord[],
    finalQuestions: readonly SubjectQuestion[],
  ): readonly string[] => {
    const ids: string[] = [];
    for (let i = 0; i < finalAnswers.length; i++) {
      if (!finalAnswers[i].correct) ids.push(questionId(finalQuestions[i]));
    }
    return ids;
  };

  // --- Answer handlers ---
  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    sendPing();
    const q = questions[currentQ];
    const correct = idx === q.ans;
    setSelected(idx);
    setShowExplain(true);
    if (correct) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { selected: idx, correct }]);
  };

  const handleShortAnswerSubmit = (isCorrect: boolean) => {
    sendPing();
    const q = questions[currentQ];
    const idx = isCorrect ? q.ans : (q.ans === 0 ? 1 : 0); // synthetic index
    setSelected(q.ans); // mark correct answer revealed
    setShowExplain(true);
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { selected: isCorrect ? q.ans : idx, correct: isCorrect }]);
    setShortAnswerDone(true);
  };

  const next = () => {
    if (currentQ + 1 >= questions.length) {
      if (timerRef.current) clearInterval(timerRef.current);
      const wrongIdList = computeWrongIds(answers, questions);
      saveLastWrongIds(subjectId, wrongIdList);
      setFinished(true);
      clearQuizProgress(subjectId);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowExplain(false);
      setShortAnswerDone(false);
    }
  };

  // --- Finished screen ---
  if (finished) {
    const durationSecs = Math.floor((Date.now() - quizStartTimeRef.current) / 1000);
    const wrongCount = answers.filter((a) => !a.correct).length;
    const handleReviewWrong = () => {
      const wrongQs = answers
        .map((a, i) => (!a.correct ? questions[i] : null))
        .filter((q): q is SubjectQuestion => q !== null);
      const reviewFilter: SubjectFilter = {
        label: "Câu sai gần nhất",
        kind: { type: "wrong" },
      };
      resetQuizState(reviewFilter, wrongQs);
    };
    return (
      <QuizResult
        score={score}
        total={questions.length}
        answers={answers}
        questions={questions}
        filter={filter.label}
        durationSecs={durationSecs}
        onRetry={handleRetry}
        onBack={onBack}
        onSave={
          onSaveResult
            ? (r) => onSaveResult({ ...r, durationSecs })
            : undefined
        }
        wrongCount={wrongCount}
        onReviewWrong={wrongCount > 0 ? handleReviewWrong : undefined}
      />
    );
  }

  // --- Empty state ---
  if (questions.length === 0) {
    const emptyMsg =
      filter.kind.type === "bookmarks"
        ? "Bạn chưa đánh dấu câu nào. Hãy bấm ☆ trên câu hỏi để lưu lại ôn sau."
        : "Không có câu hỏi cho chủ đề này.";
    return (
      <main className="min-h-screen bg-bg p-5 font-serif text-text">
        <div className="mx-auto max-w-[720px]">
          <div
            role="toolbar"
            aria-label="Bộ lọc câu hỏi"
            className="mb-6 flex flex-wrap items-center gap-2.5"
          >
            <Pill onClick={onBack}>← Quay lại</Pill>
            {filters.map((t) => (
              <Pill
                key={t.label}
                active={filter.label === t.label}
                ariaPressed={filter.label === t.label}
                onClick={() => handleFilterChange(t)}
              >
                {t.label}
              </Pill>
            ))}
          </div>
          <p className="rounded-xl border border-border-earth bg-surface px-6 py-5 text-text-dim">
            {emptyMsg}
          </p>
        </div>
      </main>
    );
  }

  // --- Active quiz ---
  const question = questions[currentQ];
  const qid = questionId(question);
  const bookmarked = isBookmarked(qid);
  const progressPct = (currentQ / questions.length) * 100;
  const tagColor = tagColors[question.tag] ?? "#5A3820";
  const wasResumed =
    !!initial && answers.length > 0 && currentQ === initial.saved.currentQ;

  // Determine if current question should use short-answer input.
  // Keep showing ShortAnswerInput even after submission (shortAnswerDone=true)
  // so its result panel stays visible until the user navigates to the next Q.
  const useShortAnswerForThis =
    shortAnswerMode &&
    canBeShortAnswer(question) &&
    (selected === null || shortAnswerDone);

  return (
    <main className="min-h-screen bg-bg px-4 py-5 font-serif text-text">
      <div className="mx-auto max-w-[720px]">
        {/* Filter toolbar */}
        <div
          role="toolbar"
          aria-label="Bộ lọc câu hỏi"
          className="mb-6 flex flex-wrap items-center gap-2.5"
        >
          <Pill onClick={onBack}>← Quay lại</Pill>
          {filters.map((t) => (
            <Pill
              key={t.label}
              active={filter.label === t.label}
              ariaPressed={filter.label === t.label}
              onClick={() => handleFilterChange(t)}
            >
              {t.label}
              {t.kind.type === "bookmarks" && bookmarks.size > 0
                ? ` (${bookmarks.size})`
                : ""}
            </Pill>
          ))}
          {/* Short-answer mode toggle — locked once current question answered */}
          <Pill
            tone="teal"
            active={shortAnswerMode}
            ariaPressed={shortAnswerMode}
            disabled={selected !== null || shortAnswerDone}
            onClick={() => {
              setShortAnswerMode((v) => !v);
              setShortAnswerDone(false);
            }}
          >
            ✍️ Tự điền
          </Pill>
        </div>

        {wasResumed && (
          <div className="mb-3 rounded-lg border border-gold/40 bg-surface-2 px-3 py-2 text-[12px] text-gold">
            ↻ Đã khôi phục bài làm dở từ lần trước (câu {currentQ + 1}, điểm{" "}
            {score}).
          </div>
        )}

        {/* Progress row */}
        <div className="mb-2.5 flex items-center justify-between text-[13px] text-text-dim">
          <span>
            Câu {currentQ + 1} / {questions.length}
          </span>
          <div className="flex items-center gap-3">
            {/* Timer */}
            <span
              className="font-mono text-[12px] tabular-nums text-text-dim"
              aria-label={`Thời gian: ${formatElapsed(elapsed)}`}
            >
              ⏱ {formatElapsed(elapsed)}
            </span>
            <span className="font-semibold text-gold">Điểm: {score}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div
          aria-hidden="true"
          className="mb-5 h-[5px] overflow-hidden rounded-md bg-surface-2"
        >
          <div
            className="h-full bg-gold transition-[width] duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={questions.length}
          aria-valuenow={currentQ}
          aria-label={`Tiến độ: câu ${currentQ + 1} trên ${questions.length}`}
          className="sr-only"
        />

        {/* Tag + Bookmark row */}
        <div className="mb-3 flex items-center justify-between gap-2">
          <span
            className="rounded-full px-2.5 py-[3px] text-[11px] font-bold tracking-wider text-white uppercase"
            style={{ background: tagColor }}
          >
            {question.tag}
          </span>
          <div className="flex items-center gap-2">
            {shortAnswerMode && canBeShortAnswer(question) && (
              <span className="rounded-full border border-teal/60 bg-teal/10 px-2.5 py-[3px] text-[11px] font-bold text-teal">
                ✍️ Tự điền
              </span>
            )}
            <BookmarkButton
              active={bookmarked}
              onToggle={() => toggleBookmark(qid)}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="mb-5 rounded-xl border border-border-earth bg-surface px-6 py-5">
          {question.passage && (
            <blockquote className="mb-4 border-l-4 border-gold/60 bg-surface-2 px-4 py-3 text-sm italic leading-relaxed text-text-dim whitespace-pre-line rounded-r-lg">
              {question.passage}
            </blockquote>
          )}
          <p className="m-0 whitespace-pre-line text-base leading-relaxed text-text">
            <strong className="text-gold">Câu {currentQ + 1}:</strong>{" "}
            {question.q}
          </p>
        </div>

        {/* Choices or short-answer input */}
        {useShortAnswerForThis ? (
          <ShortAnswerInput
            key={qid}
            question={question}
            onSubmit={handleShortAnswerSubmit}
          />
        ) : (
          <div
            role="radiogroup"
            aria-label={`Câu ${currentQ + 1}`}
            className="flex flex-col gap-2.5"
          >
            {question.opts.map((opt, idx) => {
              const locked = selected !== null;
              let stateClasses =
                "border-border-earth bg-surface-2 text-text hover:border-gold/60";
              if (locked) {
                if (idx === question.ans) {
                  stateClasses = "border-correct bg-correct-bg text-correct";
                } else if (idx === selected) {
                  stateClasses = "border-wrong bg-wrong-bg text-wrong";
                } else {
                  stateClasses = "border-border-earth bg-surface-2 text-text/70";
                }
              }
              const letter = String.fromCharCode(65 + idx);
              return (
                <button
                  key={idx}
                  type="button"
                  role="radio"
                  aria-checked={selected === idx}
                  aria-disabled={locked}
                  disabled={locked}
                  onClick={() => handleAnswer(idx)}
                  className={`rounded-[10px] border-2 px-4 py-3 text-left text-sm leading-snug transition-all duration-200 ${stateClasses} ${
                    locked ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <span className="sr-only">Đáp án {letter}: </span>
                  <strong aria-hidden="true" className="mr-2">
                    {letter}.
                  </strong>
                  {opt}
                </button>
              );
            })}
          </div>
        )}

        {/* Explanation box */}
        {showExplain && (
          <div
            role="status"
            className="mt-4 rounded-[10px] border border-correct bg-correct-bg/40 p-4"
          >
            <strong className="text-correct">💡 Giải thích:</strong>
            <p className="m-0 mt-2 whitespace-pre-line text-sm leading-relaxed text-text-dim">
              {question.explain}
            </p>
            {/* Show next button after MC answer or after short-answer done */}
            {(selected !== null || shortAnswerDone) && (
              <button
                type="button"
                onClick={next}
                className="mt-3.5 cursor-pointer rounded-lg border-0 bg-teal px-5 py-2.5 font-serif text-sm font-bold text-white"
              >
                {currentQ + 1 >= questions.length
                  ? "Xem kết quả →"
                  : "Câu tiếp theo →"}
              </button>
            )}
          </div>
        )}

      </div>
    </main>
  );
}
