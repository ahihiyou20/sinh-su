import { useState } from "react";
import { quizData, questionId, type QuizQuestion, type QuizTag } from "@/data/quiz";
import { tagColor } from "@/lib/palette";
import { useBookmarks } from "@/lib/bookmarks";
import { QuizResult, type AnswerRecord } from "./QuizResult";

const FILTERS = [
  "Tất cả",
  "Văn Lang – Âu Lạc",
  "Chăm Pa",
  "Phù Nam",
  "Đã đánh dấu",
] as const;

type Filter = (typeof FILTERS)[number];

interface QuizModeProps {
  readonly onBack: () => void;
  readonly onSaveResult?: (result: {
    readonly filter: string;
    readonly score: number;
    readonly total: number;
  }) => void;
  readonly initialFilter?: Filter;
}

function filterQuestions(
  filter: Filter,
  bookmarks: ReadonlySet<string>,
): readonly QuizQuestion[] {
  if (filter === "Tất cả") return quizData;
  if (filter === "Đã đánh dấu") {
    return quizData.filter((q) => bookmarks.has(questionId(q)));
  }
  return quizData.filter((q) => q.tag === (filter as QuizTag));
}

interface PillProps {
  readonly active?: boolean;
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
  readonly ariaPressed?: boolean;
}

function Pill({ active = false, children, onClick, ariaPressed }: PillProps) {
  const base =
    "cursor-pointer rounded-lg border-0 px-[18px] py-2.5 font-serif text-[13px] font-bold tracking-wide transition-colors duration-200";
  const tone = active
    ? "bg-gold text-bg"
    : "bg-surface-2 text-gold hover:bg-surface-2/80";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={ariaPressed}
      className={`${base} ${tone}`}
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

export function QuizMode({
  onBack,
  onSaveResult,
  initialFilter = "Tất cả",
}: QuizModeProps) {
  const { bookmarks, isBookmarked, toggleBookmark } = useBookmarks();

  const [filter, setFilter] = useState<Filter>(initialFilter);
  const [questions, setQuestions] = useState<readonly QuizQuestion[]>(() =>
    filterQuestions(initialFilter, bookmarks),
  );
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplain, setShowExplain] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const resetQuizState = (next: readonly QuizQuestion[]) => {
    setQuestions(next);
    setCurrentQ(0);
    setSelected(null);
    setShowExplain(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  const handleFilterChange = (next: Filter) => {
    setFilter(next);
    resetQuizState(filterQuestions(next, bookmarks));
  };

  const handleRetry = () => {
    resetQuizState(filterQuestions(filter, bookmarks));
  };

  if (questions.length === 0) {
    const emptyMsg =
      filter === "Đã đánh dấu"
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
            {FILTERS.map((t) => (
              <Pill
                key={t}
                active={filter === t}
                ariaPressed={filter === t}
                onClick={() => handleFilterChange(t)}
              >
                {t}
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

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    const correct = idx === questions[currentQ].ans;
    setSelected(idx);
    setShowExplain(true);
    if (correct) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { selected: idx, correct }]);
  };

  const next = () => {
    if (currentQ + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowExplain(false);
    }
  };

  if (finished) {
    return (
      <QuizResult
        score={score}
        total={questions.length}
        answers={answers}
        questions={questions}
        filter={filter}
        onRetry={handleRetry}
        onBack={onBack}
        onSave={onSaveResult}
      />
    );
  }

  const question = questions[currentQ];
  const qid = questionId(question);
  const bookmarked = isBookmarked(qid);
  const progressPct = (currentQ / questions.length) * 100;

  return (
    <main className="min-h-screen bg-bg px-4 py-5 font-serif text-text">
      <div className="mx-auto max-w-[720px]">
        <div
          role="toolbar"
          aria-label="Bộ lọc câu hỏi"
          className="mb-6 flex flex-wrap items-center gap-2.5"
        >
          <Pill onClick={onBack}>← Quay lại</Pill>
          {FILTERS.map((t) => (
            <Pill
              key={t}
              active={filter === t}
              ariaPressed={filter === t}
              onClick={() => handleFilterChange(t)}
            >
              {t}
              {t === "Đã đánh dấu" && bookmarks.size > 0 ? ` (${bookmarks.size})` : ""}
            </Pill>
          ))}
        </div>

        <div className="mb-2.5 flex justify-between text-[13px] text-text-dim">
          <span>
            Câu {currentQ + 1} / {questions.length}
          </span>
          <span className="font-semibold text-gold">Điểm: {score}</span>
        </div>

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

        <div className="mb-3 flex items-center justify-between gap-2">
          <span
            className="rounded-full px-2.5 py-[3px] text-[11px] font-bold tracking-wider text-white uppercase"
            style={{ background: tagColor[question.tag] }}
          >
            {question.tag}
          </span>
          <BookmarkButton
            active={bookmarked}
            onToggle={() => toggleBookmark(qid)}
          />
        </div>

        <div className="mb-5 rounded-xl border border-border-earth bg-surface px-6 py-5">
          <p className="m-0 text-base leading-relaxed text-text">
            <strong className="text-gold">Câu {currentQ + 1}:</strong>{" "}
            {question.q}
          </p>
        </div>

        <div
          role="radiogroup"
          aria-label={`Câu ${currentQ + 1}: ${question.q}`}
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

        {showExplain && (
          <div
            role="status"
            className="mt-4 rounded-[10px] border border-correct bg-correct-bg/40 p-4"
          >
            <strong className="text-correct">💡 Giải thích:</strong>
            <p className="m-0 mt-2 text-sm leading-relaxed text-text-dim">
              {question.explain}
            </p>
            <button
              type="button"
              onClick={next}
              className="mt-3.5 cursor-pointer rounded-lg border-0 bg-teal px-5 py-2.5 font-serif text-sm font-bold text-white"
            >
              {currentQ + 1 >= questions.length
                ? "Xem kết quả →"
                : "Câu tiếp theo →"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
