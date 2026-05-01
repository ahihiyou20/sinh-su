import type { QuizAttempt } from "@/lib/storage";

interface HistoryPanelProps {
  readonly history: readonly QuizAttempt[];
  readonly onClear: () => void;
}

const MAX_VISIBLE = 5;

function formatDate(ts: number): string {
  try {
    return new Date(ts).toLocaleString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return new Date(ts).toISOString();
  }
}

function pctToneClass(pct: number): string {
  if (pct >= 80) return "text-correct";
  if (pct >= 60) return "text-gold";
  return "text-wrong";
}

function formatDuration(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  if (m === 0) return `${s}s`;
  return `${m}m${s > 0 ? ` ${s}s` : ""}`;
}

export function HistoryPanel({ history, onClear }: HistoryPanelProps) {
  const visible = history.slice(0, MAX_VISIBLE);

  return (
    <section
      aria-labelledby="history-heading"
      className="my-5 rounded-xl border border-border-earth bg-surface px-5 py-4"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2
          id="history-heading"
          className="m-0 font-display text-base font-bold text-gold"
        >
          📊 Lịch sử làm bài
        </h2>
        {history.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="cursor-pointer rounded-md border border-border-earth bg-surface-2 px-3 py-1 font-serif text-xs font-bold text-text-dim transition-colors duration-200 hover:border-wrong hover:text-wrong"
          >
            Xóa lịch sử
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="m-0 text-[13px] leading-relaxed text-text-dim">
          Chưa có lượt làm bài nào. Hãy bắt đầu kiểm tra để theo dõi tiến bộ
          của bạn.
        </p>
      ) : (
        <ol className="m-0 flex list-none flex-col gap-2 p-0">
          {visible.map((entry) => {
            const pct =
              entry.total > 0
                ? Math.round((entry.score / entry.total) * 100)
                : 0;
            return (
              <li
                key={entry.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-surface-2 px-3 py-2 text-[13px]"
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-text">
                    {entry.filter}
                  </span>
                  <span className="text-[11px] text-text-dim">
                    {formatDate(entry.timestamp)}
                    {entry.durationSecs !== undefined && entry.durationSecs > 0
                      ? ` · ⏱ ${formatDuration(entry.durationSecs)}`
                      : ""}
                  </span>
                </div>
                <div
                  className={`flex items-baseline gap-2 font-bold ${pctToneClass(pct)}`}
                >
                  <span>
                    {entry.score}/{entry.total}
                  </span>
                  <span className="text-[12px] font-semibold">({pct}%)</span>
                </div>
              </li>
            );
          })}
        </ol>
      )}

      {history.length > MAX_VISIBLE && (
        <p className="m-0 mt-2 text-right text-[11px] text-text-dim">
          Hiển thị {MAX_VISIBLE} lượt gần nhất / {history.length} đã lưu
        </p>
      )}
    </section>
  );
}
