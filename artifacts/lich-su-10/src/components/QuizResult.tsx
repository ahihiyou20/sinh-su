import type { QuizQuestion } from "@/data/quiz";

export interface AnswerRecord {
  readonly selected: number;
  readonly correct: boolean;
}

interface QuizResultProps {
  readonly score: number;
  readonly total: number;
  readonly answers: ReadonlyArray<AnswerRecord>;
  readonly questions: ReadonlyArray<QuizQuestion>;
  readonly onRetry: () => void;
  readonly onBack: () => void;
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
  onRetry,
  onBack,
}: QuizResultProps) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <main className="min-h-screen bg-bg px-4 py-5 font-serif text-text">
      <div className="mx-auto max-w-[720px] px-3 py-8 text-center">
        <div aria-hidden="true" className="mb-4 text-7xl leading-none">
          {medal(pct)}
        </div>
        <h2 className="m-0 mb-2 font-display text-3xl text-gold">
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
        <div className="mb-7 text-[15px] leading-relaxed text-text-dim">
          {message(pct)}
        </div>

        <ol
          aria-label="Chi tiết kết quả từng câu"
          className="m-0 mb-7 max-h-[280px] list-none overflow-y-auto rounded-xl bg-surface p-4 text-left"
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
          <button
            type="button"
            onClick={onRetry}
            className="cursor-pointer rounded-lg border-0 bg-gold px-7 py-2.5 font-serif text-sm font-bold tracking-wide text-bg"
          >
            Làm lại
          </button>
          <button
            type="button"
            onClick={onBack}
            className="cursor-pointer rounded-lg border border-border-earth bg-surface-2 px-7 py-2.5 font-serif text-sm font-bold tracking-wide text-text"
          >
            Xem lý thuyết
          </button>
        </div>
      </div>
    </main>
  );
}
