import { useId, useState } from "react";
import type { TheorySection } from "@/data/lich-su/theory";

interface TheoryCardProps {
  readonly section: TheorySection;
}

export function TheoryCard({ section }: TheoryCardProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const headingId = useId();

  return (
    <article
      className="mb-5 overflow-hidden rounded-xl"
      style={{ border: `1px solid ${section.color}60` }}
    >
      <h3 id={headingId} className="m-0">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full cursor-pointer items-center justify-between gap-3 border-0 px-5 py-4 text-left font-display text-lg font-bold tracking-wide text-white"
          style={{
            background: `linear-gradient(135deg, ${section.color}DD, ${section.color}88)`,
          }}
        >
          <span>{section.title}</span>
          <span aria-hidden="true" className="text-base opacity-80">
            {open ? "▲" : "▼"}
          </span>
        </button>
      </h3>

      {open && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={headingId}
          className="bg-surface p-5"
        >
          {section.sections.map((block, bi) => (
            <div key={bi} className="mb-7 last:mb-0">
              <h4
                className="mt-0 mb-3.5 border-b pb-2 font-serif text-sm font-bold uppercase tracking-widest"
                style={{
                  color: section.accent,
                  borderColor: `${section.accent}40`,
                }}
              >
                {block.heading}
              </h4>

              {block.type === "list" && (
                <div className="flex flex-col gap-2.5">
                  {block.items.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-r-lg bg-surface-2 px-4 py-3"
                      style={{ borderLeft: `3px solid ${section.accent}` }}
                    >
                      <span
                        className="text-sm font-bold"
                        style={{ color: section.accent }}
                      >
                        {item.main}:
                      </span>
                      <span className="ml-1.5 text-sm leading-relaxed text-text">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {block.type === "compare" && (
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {block.items.map((col, ci) => (
                    <div
                      key={ci}
                      className="overflow-hidden rounded-[10px] bg-surface-2"
                      style={{ border: `1px solid ${col.color}40` }}
                    >
                      <div
                        className="px-3.5 py-2 font-display text-sm font-bold text-white"
                        style={{ background: col.color }}
                      >
                        {col.label}
                      </div>
                      <div className="p-3.5">
                        {col.points.map((p, pi) => (
                          <div
                            key={pi}
                            className="mb-2 flex gap-2 text-[13px] leading-relaxed text-text-dim last:mb-0"
                          >
                            <span
                              aria-hidden="true"
                              className="min-w-[14px]"
                              style={{ color: col.color }}
                            >
                              →
                            </span>
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {block.type === "warnings" && (
                <div className="flex flex-col gap-2">
                  {block.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-2 rounded-lg border border-warn-border/40 bg-warn-bg px-3.5 py-2.5 text-[13px] leading-relaxed text-warn-text"
                    >
                      <span aria-hidden="true" className="font-bold">!</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
