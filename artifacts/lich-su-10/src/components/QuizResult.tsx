import { useEffect, useRef } from "react";
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
  return `${m} phút ${s} giây`;
}

function medal(pct: number): string {
  if (pct >= 80) return "🏆";
  if (pct >= 60) return "🎯";
  return "📚";
}

function scoreToneClass(pct: number): string {
  if (pct >= 80) return "text-correct";
  if (pct >= 60) return "text-gold";
  return "text-wrong";
}

function message(pct: number): string {
  if (pct >= 80) return "Xuất sắc! Bạn đã nắm vững kiến thức.";
  if (pct >= 60) return "Tốt! Ôn thêm các điểm còn yếu.";
  return "Cần ôn tập thêm. Đọc lại lý thuyết nhé!";
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
  const savedRef = useRef(false);

  useEffect(() => {
    if (savedRef.current) return;
    if (total <= 0) return;
    savedRef.current = true;
    onSave?.({ filter, score, total });
  }, [onSave, filter, score, total]);

  return (
    <main className="min-h-screen bg-bg px-4 py-5 text-text">
      <div className="mx-auto max-w-[720px] px-3 py-12 text-center">
        <div aria-hidden="true" className="mb-4 text-6xl leading-none">
          {medal(pct)}
        </div>
        <h2 className="m-0 mb-2 text-2xl font-bold text-text">
          Kết quả kiểm tra
        </h2>
        <div
          className={`mb-2 text-[56px] font-bold leading-tight ${scoreToneClass(pct)}`}
        >
          {score}/{total}
        </div>
        <div className="mb-2 text-[15px] text-text-dim">
          {pct}% chính xác
        </div>
        <div className="mb-4 text-[15px] leading-relaxed text-text-dim">
          {message(pct)}
        </div>
        {durationSecs !== undefined && durationSecs > 0 && (
          <div className="mb-8 text-[13px] text-text-dim">
            ⏱ Thời gian làm bài:{" "}
            <strong className="text-text">{formatDuration(durationSecs)}</strong>
          </div>
        )}

        <ol
          aria-label="Chi tiết kết quả từng câu"
          className="m-0 mb-8 max-h-[280px] list-none overflow-y-auto rounded-xl border border-border-earth bg-surface p-4 text-left"
        >
          {answers.map((a, i) => {
            const ansLetter = String.fromCharCode(65 + questions[i].ans);
            const tone = a.correct ? "text-correct" : "text-wrong";
            return (
              <li
                key={i}
                className={`mb-1.5 flex gap-2 text-[13px] last:mb-0 ${tone}`}
              >
                <span aria-hidden="true">{a.correct ? "✓" : "✗"}</span>
                <span>
                  Câu {i + 1}:{" "}
                  {a.correct ? "Đúng" : `Sai (Đáp án: ${ansLetter})`}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="flex flex-wrap justify-center gap-3">
          {onReviewWrong && wrongCount && wrongCount > 0 ? (
            <button
              type="button"
              onClick={onReviewWrong}
              className="cursor-pointer rounded-lg border border-wrong/40 bg-wrong/[0.08] px-7 py-2.5 text-sm font-semibold text-wrong hover:bg-wrong/15 transition-colors duration-200"
            >
              🔁 Ôn lại {wrongCount} câu sai
            </button>
          ) : null}
          <button
            type="button"
            onClick={onRetry}
            className="cursor-pointer rounded-lg border-0 bg-indigo-500 hover:bg-indigo-400 px-7 py-2.5 text-sm font-semibold text-white transition-colors duration-200"
          >
            Làm lại
          </button>
          <button
            type="button"
            onClick={onBack}
            className="cursor-pointer rounded-lg border border-border-earth bg-surface px-7 py-2.5 text-sm font-semibold text-text-dim hover:text-text hover:border-white/20 transition-colors duration-200"
          >
            Xem lý thuyết
          </button>
        </div>
      </div>
    </main>
  );
}
