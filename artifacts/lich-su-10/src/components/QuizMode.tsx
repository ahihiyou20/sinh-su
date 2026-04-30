import { useEffect, useState } from "react";
import { quizData, type QuizQuestion, type QuizTag } from "@/data/quiz";
import { tagColor } from "@/lib/palette";
import { QuizResult, type AnswerRecord } from "./QuizResult";

interface QuizModeProps {
  readonly onBack: () => void;
}

const FILTERS = [
  "Tất cả",
  "Văn Lang – Âu Lạc",
  "Chăm Pa",
  "Phù Nam",
] as const;

type Filter = (typeof FILTERS)[number];

function filterQuestions(filter: Filter): readonly QuizQuestion[] {
  if (filter === "Tất cả") return quizData;
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

export function QuizMode({ onBack }: QuizModeProps) {
  const [filter, setFilter] = useState<Filter>("Tất cả");
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplain, setShowExplain] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const questions = filterQuestions(filter);

  const reset = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowExplain(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  useEffect(() => {
    reset();
  }, [filter]);

  if (questions.length === 0) {
    return (
      <main className="min-h-screen bg-bg p-5 text-text">
        <p>Không có câu hỏi cho chủ đề này.</p>
        <Pill onClick={onBack}>← Quay lại</Pill>
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
        onRetry={reset}
        onBack={onBack}
      />
    );
  }

  const question = questions[currentQ];
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
              onClick={() => setFilter(t)}
            >
              {t}
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

        <div className="mb-3">
          <span
            className="rounded-full px-2.5 py-[3px] text-[11px] font-bold tracking-wider text-white uppercase"
            style={{ background: tagColor[question.tag] }}
          >
            {question.tag}
          </span>
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
