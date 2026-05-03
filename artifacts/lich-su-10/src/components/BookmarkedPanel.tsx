import { useMemo, useState } from "react";
import { Bookmark, ChevronRight, Play } from "lucide-react";
import {
  questionId,
  type SubjectQuestion,
} from "@/subjects/types";

interface BookmarkedPanelProps {
  readonly bookmarks: ReadonlySet<string>;
  readonly questions: readonly SubjectQuestion[];
  readonly tagColors: Record<string, string>;
  readonly onRemove: (id: string) => void;
  readonly onStartQuiz: () => void;
}

export function BookmarkedPanel({
  bookmarks,
  questions,
  tagColors,
  onRemove,
  onStartQuiz,
}: BookmarkedPanelProps) {
  const [open, setOpen] = useState(true);

  const items = useMemo<readonly SubjectQuestion[]>(
    () => questions.filter((q) => bookmarks.has(questionId(q))),
    [bookmarks, questions],
  );

  if (items.length === 0) return null;

  return (
    <section
      aria-labelledby="bookmarks-heading"
      className="my-4 rounded-xl border border-border-earth bg-surface px-5 py-4"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="bookmarks-list"
          className="flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-sm font-semibold text-text hover:text-gold transition-colors"
        >
          <Bookmark size={14} className="text-gold" fill={open ? "currentColor" : "none"} style={{ color: "#6366F1" }} />
          <span id="bookmarks-heading">Câu đã đánh dấu ({items.length})</span>
          <ChevronRight
            size={14}
            className={`text-text-dim transition-transform duration-200 ${open ? "rotate-90" : ""}`}
          />
        </button>
        <button
          type="button"
          onClick={onStartQuiz}
          className="flex cursor-pointer items-center gap-2 rounded-md border-0 bg-indigo-500 hover:bg-indigo-400 px-3 py-1.5 text-xs font-semibold text-white transition-colors duration-200"
        >
          <Play size={11} fill="currentColor" />
          Quiz các câu đã đánh dấu
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
            const tagColor = tagColors[q.tag] ?? "#1e2736";
            return (
              <li
                key={id}
                className="rounded-lg border border-border-earth bg-surface-2 px-3 py-2.5 text-[13px]"
              >
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                  <span
                    className="rounded-full px-2 py-[2px] text-[10px] font-bold tracking-wider text-white uppercase"
                    style={{ background: tagColor }}
                  >
                    {q.tag}
                  </span>
                  <button
                    type="button"
                    onClick={() => onRemove(id)}
                    aria-label="Bỏ đánh dấu"
                    className="cursor-pointer rounded-md border border-border-earth bg-surface px-2 py-1 text-[11px] font-medium text-text-dim transition-colors duration-200 hover:border-wrong/60 hover:text-wrong"
                  >
                    Bỏ đánh dấu
                  </button>
                </div>
                <p className="m-0 mb-1.5 leading-relaxed text-text whitespace-pre-line">
                  {q.q}
                </p>
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
