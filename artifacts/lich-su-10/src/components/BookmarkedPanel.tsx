import { useMemo, useState } from "react";
import { quizData, questionId, type QuizQuestion } from "@/data/quiz";
import { tagColor } from "@/lib/palette";

interface BookmarkedPanelProps {
  readonly bookmarks: ReadonlySet<string>;
  readonly onRemove: (id: string) => void;
  readonly onStartQuiz: () => void;
}

export function BookmarkedPanel({
  bookmarks,
  onRemove,
  onStartQuiz,
}: BookmarkedPanelProps) {
  const [open, setOpen] = useState(true);

  const items = useMemo<readonly QuizQuestion[]>(
    () => quizData.filter((q) => bookmarks.has(questionId(q))),
    [bookmarks],
  );

  if (items.length === 0) return null;

  return (
    <section
      aria-labelledby="bookmarks-heading"
      className="my-5 rounded-xl border border-border-earth bg-surface px-5 py-4"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="bookmarks-list"
          className="flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 font-display text-base font-bold text-gold"
        >
          <span
            aria-hidden="true"
            className={`inline-block transition-transform duration-200 ${
              open ? "rotate-90" : ""
            }`}
          >
            ▶
          </span>
          <span id="bookmarks-heading">
            ★ Câu đã đánh dấu ({items.length})
          </span>
        </button>
        <button
          type="button"
          onClick={onStartQuiz}
          className="cursor-pointer rounded-md border-0 bg-gold px-3 py-1.5 font-serif text-xs font-bold text-bg transition-colors duration-200 hover:bg-gold/90"
        >
          🎯 Bắt đầu Quiz các câu đã đánh dấu
        </button>
      </div>

      {open && (
        <ol
          id="bookmarks-list"
          className="m-0 flex list-none flex-col gap-2.5 p-0"
        >
          {items.map((q) => {
            const id = questionId(q);
            const letter = String.fromCharCode(65 + q.ans);
            return (
              <li
                key={id}
                className="rounded-lg border border-border-earth bg-surface-2 px-3 py-2.5 text-[13px]"
              >
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                  <span
                    className="rounded-full px-2 py-[2px] text-[10px] font-bold tracking-wider text-white uppercase"
                    style={{ background: tagColor[q.tag] }}
                  >
                    {q.tag}
                  </span>
                  <button
                    type="button"
                    onClick={() => onRemove(id)}
                    aria-label={`Bỏ đánh dấu: ${q.q}`}
                    className="cursor-pointer rounded-md border border-border-earth bg-surface px-2 py-1 font-serif text-[11px] font-bold text-text-dim transition-colors duration-200 hover:border-wrong hover:text-wrong"
                  >
                    Bỏ đánh dấu
                  </button>
                </div>
                <p className="m-0 mb-1.5 leading-relaxed text-text">{q.q}</p>
                <p className="m-0 text-[12px] leading-relaxed text-correct">
                  <strong>Đáp án {letter}:</strong> {q.opts[q.ans]}
                </p>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
