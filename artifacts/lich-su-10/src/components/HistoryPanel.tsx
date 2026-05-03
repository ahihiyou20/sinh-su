import { BarChart2, Clock, Trash2 } from "lucide-react";
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
  const byFilter = new Map<string, number>();
  for (const entry of history) byFilter.set(entry.filter, (byFilter.get(entry.filter) ?? 0) + 1);

  return (
    <section
      aria-labelledby="history-heading"
      className="my-4 rounded-xl border border-border-earth bg-surface px-5 py-4"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2
          id="history-heading"
          className="m-0 flex items-center gap-2 text-sm font-semibold text-text"
        >
          <BarChart2 size={15} className="text-gold" />
          Lịch sử làm bài
        </h2>
        {history.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="flex cursor-pointer items-center gap-1.5 rounded-md border border-border-earth bg-surface-2 px-3 py-1 text-xs font-medium text-text-dim transition-colors duration-200 hover:border-wrong/60 hover:text-wrong"
          >
            <Trash2 size={12} />
            Xóa lịch sử
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="m-0 text-[13px] leading-relaxed text-text-dim">
          Chưa có lượt làm bài nào. Hãy bắt đầu kiểm tra để theo dõi tiến bộ của bạn.
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
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-surface-2 px-3 py-2.5 text-[13px]"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium text-text">
                    {entry.filter}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-text-dim">
                    {formatDate(entry.timestamp)}
                    {entry.durationSecs !== undefined && entry.durationSecs > 0 && (
                      <>
                        <span>·</span>
                        <Clock size={10} className="inline" />
                        {formatDuration(entry.durationSecs)}
                      </>
                    )}
                  </span>
                </div>
                <div
                  className={`flex items-baseline gap-1.5 font-bold ${pctToneClass(pct)}`}
                >
                  <span>{entry.score}/{entry.total}</span>
                  <span className="text-[12px] font-semibold opacity-80">({pct}%)</span>
                </div>
              </li>
            );
          })}
        </ol>
      )}

      {history.length > 0 && (
        <div className="mt-3 rounded-lg bg-surface-2 px-3 py-2 text-[11px] text-text-dim">
          <span className="font-medium text-text">Theo bộ đề:</span>{" "}
          {[...byFilter.entries()]
            .slice(0, 3)
            .map(([k, v]) => `${k} (${v})`)
            .join(" · ")}
        </div>
      )}

      {history.length > MAX_VISIBLE && (
        <p className="m-0 mt-2 text-right text-[11px] text-text-dim">
          Hiển thị {MAX_VISIBLE} lượt gần nhất / {history.length} đã lưu
        </p>
      )}
    </section>
  );
}
