import { useEffect, useRef } from "react";
import { CheckCircle2, XCircle, RotateCcw, BookOpen, ArrowLeft } from "lucide-react";
import type { SubjectQuestion } from "@/subjects/types";

export interface AnswerRecord {
  readonly selected: number;
  readonly correct: boolean;
}

interface QuizResultProps {
  readonly score: number;
  readonly total: number;
  readonly answers: ReadonlyArray<AnswerRecord>;
  readonly questions: ReadonlyArray<SubjectQuestion>;
  readonly filter: string;
  readonly durationSecs?: number;
  readonly onRetry: () => void;
  readonly onBack: () => void;
  readonly onSave?: (result: {
    readonly filter: string;
    readonly score: number;
    readonly total: number;
  }) => void;
  readonly wrongCount?: number;
  readonly onReviewWrong?: () => void;
}

function formatDuration(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  if (m === 0) return `${s} giây`;
  return `${m} phút${s > 0 ? ` ${s} giây` : ""}`;
}

function scoreGrade(pct: number): { label: string; color: string } {
  if (pct >= 80) return { label: "Xuất sắc", color: "text-correct" };
  if (pct >= 60) return { label: "Khá tốt", color: "text-gold" };
  return { label: "Cần ôn thêm", color: "text-wrong" };
}

function scoreMessage(pct: number): string {
  if (pct >= 80) return "Bạn đã nắm vững kiến thức này. Tiếp tục duy trì phong độ!";
  if (pct >= 60) return "Kết quả tốt. Ôn lại các câu sai để củng cố thêm.";
  return "Đọc lại lý thuyết và làm lại bài để cải thiện kết quả.";
}

export function QuizResult({
  score,
  total,
  answers,
  questions,
  filter,
  durationSecs,
  onRetry,
  onBack,
  onSave,
  wrongCount,
  onReviewWrong,
}: QuizResultProps) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const { label: gradeLabel, color: gradeColor } = scoreGrade(pct);
  const savedRef = useRef(false);

  useEffect(() => {
    if (savedRef.current) return;
    if (total <= 0) return;
    savedRef.current = true;
    onSave?.({ filter, score, total });
  }, [onSave, filter, score, total]);

  const correctAnswers = answers.filter((a) => a.correct).length;
  const wrongAnswers = answers.length - correctAnswers;

  return (
    <main className="min-h-screen bg-bg text-text">
      {/* Top nav */}
      <div className="border-b border-border-earth px-4 py-3">
        <div className="mx-auto max-w-[720px]">
          <button
            type="button"
            onClick={onBack}
            className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-border-earth bg-surface px-3 py-1.5 text-sm text-text-dim hover:text-text transition-colors"
          >
            <ArrowLeft size={14} />
            Về trang ôn tập
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[720px] px-4 py-10">
        {/* Score card */}
        <div className="mb-6 rounded-2xl border border-border-earth bg-surface p-8 text-center">
          {/* Score circle */}
          <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border-4 border-border-earth bg-surface-2"
            style={{ borderColor: pct >= 80 ? "#10B981" : pct >= 60 ? "#6366F1" : "#EF4444" }}
          >
            <div>
              <div className={`text-4xl font-bold leading-none ${gradeColor}`}>
                {pct}
              </div>
              <div className="text-xs text-text-dim mt-0.5">%</div>
            </div>
          </div>

          <div className={`mb-1 text-xl font-bold ${gradeColor}`}>{gradeLabel}</div>
          <div className="mb-4 text-sm text-text-dim">{scoreMessage(pct)}</div>

          {/* Stats row */}
          <div className="flex justify-center gap-6 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-correct">{correctAnswers}</div>
              <div className="text-xs text-text-dim">Đúng</div>
            </div>
            <div className="w-px bg-border-earth" />
            <div className="text-center">
              <div className="text-2xl font-bold text-wrong">{wrongAnswers}</div>
              <div className="text-xs text-text-dim">Sai</div>
            </div>
            <div className="w-px bg-border-earth" />
            <div className="text-center">
              <div className="text-2xl font-bold text-text">{total}</div>
              <div className="text-xs text-text-dim">Tổng câu</div>
            </div>
          </div>

          {durationSecs !== undefined && durationSecs > 0 && (
            <div className="mt-4 text-[12px] text-text-dim">
              Thời gian: <strong className="text-text">{formatDuration(durationSecs)}</strong>
            </div>
          )}
        </div>

        {/* Answer review */}
        <div className="mb-6 rounded-xl border border-border-earth bg-surface px-5 py-4">
          <h3 className="m-0 mb-3 text-sm font-semibold text-text">Chi tiết kết quả</h3>
          <ol
            aria-label="Chi tiết kết quả từng câu"
            className="m-0 list-none p-0 grid grid-cols-2 sm:grid-cols-3 gap-1.5"
          >
            {answers.map((a, i) => {
              const ansLetter = String.fromCharCode(65 + questions[i].ans);
              return (
                <li
                  key={i}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] ${
                    a.correct
                      ? "bg-correct-bg border border-correct/20 text-correct"
                      : "bg-wrong-bg border border-wrong/20 text-wrong"
                  }`}
                >
                  {a.correct ? (
                    <CheckCircle2 size={13} className="shrink-0" />
                  ) : (
                    <XCircle size={13} className="shrink-0" />
                  )}
                  <span>
                    Câu {i + 1}
                    {!a.correct && (
                      <span className="opacity-75"> · {ansLetter}</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {onReviewWrong && wrongCount && wrongCount > 0 ? (
            <button
              type="button"
              onClick={onReviewWrong}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-wrong/40 bg-wrong/[0.08] px-6 py-2.5 text-sm font-semibold text-wrong hover:bg-wrong/15 transition-colors duration-200"
            >
              <RotateCcw size={14} />
              Ôn lại {wrongCount} câu sai
            </button>
          ) : null}
          <button
            type="button"
            onClick={onRetry}
            className="flex cursor-pointer items-center gap-2 rounded-lg border-0 bg-indigo-500 hover:bg-indigo-400 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200"
          >
            <RotateCcw size={14} />
            Làm lại
          </button>
          <button
            type="button"
            onClick={onBack}
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-border-earth bg-surface px-6 py-2.5 text-sm font-medium text-text-dim hover:text-text hover:border-white/20 transition-colors duration-200"
          >
            <BookOpen size={14} />
            Xem lý thuyết
          </button>
        </div>
      </div>
    </main>
  );
}
