import { useId, useState } from "react";
import type { Block, Section } from "@/data/sinh-hoc/types";

interface SectionCardProps {
  readonly section: Section;
}

function BlockRenderer({
  block,
  accent,
}: {
  readonly block: Block;
  readonly accent: string;
}) {
  switch (block.type) {
    case "formulas":
      return (
        <div className="flex flex-col gap-2.5">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="rounded-r-lg bg-surface-2 px-4 py-3"
              style={{ borderLeft: `3px solid ${accent}` }}
            >
              <div
                className="mb-1 text-[12px] font-bold uppercase tracking-wider"
                style={{ color: accent }}
              >
                {item.label}
              </div>
              <div className="font-mono text-sm text-text">{item.formula}</div>
            </div>
          ))}
        </div>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-lg border border-border-earth">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr style={{ background: `${accent}20` }}>
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="border-b border-border-earth px-3 py-2 text-left font-display font-bold"
                    style={{ color: accent }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-b border-border-earth/40 last:border-0"
                >
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-text">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "table2col":
      return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {[block.gp1, block.gp2].map((g, gi) => (
            <div
              key={gi}
              className="overflow-hidden rounded-lg border"
              style={{ borderColor: `${accent}55` }}
            >
              <div
                className="px-3 py-2 font-display text-sm font-bold text-white"
                style={{ background: accent }}
              >
                {g.label}
              </div>
              <table className="w-full border-collapse text-[12px]">
                <thead>
                  <tr className="bg-surface-2">
                    {block.headers.map((h, i) => (
                      <th
                        key={i}
                        className="border-b border-border-earth/50 px-2.5 py-1.5 text-left font-bold text-text-dim"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {g.rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className="border-b border-border-earth/30 last:border-0"
                    >
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-2.5 py-1.5 text-text">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      );

    case "list":
      return (
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-2.5 rounded-r-lg bg-surface-2 px-4 py-2.5 text-[13px] leading-relaxed text-text"
              style={{ borderLeft: `3px solid ${accent}` }}
            >
              <span aria-hidden="true" style={{ color: accent }}>
                ●
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "tips":
      return (
        <div className="flex flex-col gap-2">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="flex gap-2 rounded-lg border border-warn-border/40 bg-warn-bg px-3.5 py-2.5 text-[13px] leading-relaxed text-warn-text"
            >
              <span aria-hidden="true">💡</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      );

    case "nutrition":
      return (
        <div>
          <p className="mt-0 mb-3 text-[13px] italic text-text-dim">
            {block.note}
          </p>
          <div className="overflow-x-auto rounded-lg border border-border-earth">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr style={{ background: `${accent}20` }}>
                  {["Kiểu", "Năng lượng", "Carbon", "Đại diện"].map((h, i) => (
                    <th
                      key={i}
                      className="border-b border-border-earth px-3 py-2 text-left font-display font-bold"
                      style={{ color: accent }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.table.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border-earth/40 last:border-0"
                  >
                    <td className="px-3 py-2 font-bold text-text">{row.kieu}</td>
                    <td className="px-3 py-2 text-text">{row.nangluong}</td>
                    <td className="px-3 py-2 text-text">{row.carbon}</td>
                    <td className="px-3 py-2 text-text-dim">{row.daidien}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "compare":
      return (
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {block.items.map((col, ci) => (
            <div
              key={ci}
              className="overflow-hidden rounded-[10px] bg-surface-2"
              style={{ border: `1px solid ${accent}40` }}
            >
              <div
                className="px-3.5 py-2 font-display text-sm font-bold text-white"
                style={{ background: accent }}
              >
                {col.title}
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
                      style={{ color: accent }}
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
      );

    case "steps":
      return (
        <ol className="m-0 flex list-none flex-col gap-2.5 p-0">
          {block.items.map((s, i) => (
            <li key={i} className="flex gap-3 rounded-lg bg-surface-2 p-3">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                style={{ background: accent }}
              >
                {s.step}
              </span>
              <div>
                <div className="text-sm font-bold" style={{ color: accent }}>
                  {s.name}
                </div>
                <div className="text-[13px] leading-relaxed text-text-dim">
                  {s.desc}
                </div>
              </div>
            </li>
          ))}
        </ol>
      );

    case "tip-box":
      return (
        <div
          className="rounded-lg border bg-surface-2 px-4 py-3 text-[13px] leading-relaxed text-text"
          style={{ borderColor: `${accent}55` }}
        >
          <span aria-hidden="true" className="mr-2" style={{ color: accent }}>
            ✦
          </span>
          {block.content}
        </div>
      );
  }
}

export function SectionCard({ section }: SectionCardProps) {
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
          <span>
            {section.icon} {section.title}
          </span>
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
          {section.content.map((block, bi) => (
            <div key={bi} className="mb-7 last:mb-0">
              <h4
                className="mt-0 mb-3.5 border-b pb-2 font-serif text-sm font-bold uppercase tracking-widest"
                style={{
                  color: section.accent,
                  borderColor: `${section.accent}40`,
                }}
              >
                {block.subtitle}
              </h4>
              <BlockRenderer block={block} accent={section.accent} />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
