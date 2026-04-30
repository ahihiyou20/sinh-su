import type { QuickRef } from "@/subjects/types";

interface QuickRefTableProps {
  readonly data: QuickRef;
}

export function QuickRefTable({ data }: QuickRefTableProps) {
  return (
    <section
      aria-labelledby="quick-ref-heading"
      className="mb-6 rounded-2xl border border-border-earth bg-surface p-5"
    >
      <h2
        id="quick-ref-heading"
        className="mt-0 mb-4 font-display text-lg font-bold text-gold"
      >
        {data.heading}
      </h2>
      <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr>
              {data.headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="border border-border-earth bg-surface-2 px-3 py-2.5 text-left font-display font-bold text-gold"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, ri) => {
              const rowBg = ri % 2 === 0 ? "bg-surface" : "bg-surface-2";
              return (
                <tr key={ri}>
                  {row.cells.map((cell, ci) => {
                    const isName = ci === 0;
                    return (
                      <td
                        key={ci}
                        className={`border border-border-earth/40 px-3 py-2.5 text-sm ${rowBg} ${
                          isName ? "font-bold" : "font-normal text-text-dim"
                        }`}
                        style={
                          isName && row.nameColor
                            ? { color: row.nameColor }
                            : undefined
                        }
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
