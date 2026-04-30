interface RowSpec {
  readonly name: string;
  readonly era: string;
  readonly river: string;
  readonly place: string;
  readonly polity: string;
  readonly culture: string;
  readonly nameColor: string;
}

const HEADERS = [
  "Nhà nước",
  "Ra đời",
  "Lưu vực",
  "Địa điểm",
  "Thể chế",
  "Văn hóa gốc",
] as const;

const ROWS: ReadonlyArray<RowSpec> = [
  {
    name: "Văn Lang",
    era: "Thế kỉ VII TCN",
    river: "Sông Hồng",
    place: "Phong Châu",
    polity: "Vua Hùng + Lạc hầu",
    culture: "Đông Sơn",
    nameColor: "var(--color-jade)",
  },
  {
    name: "Âu Lạc",
    era: "Sau Văn Lang",
    river: "Sông Hồng",
    place: "Cổ Loa (HN)",
    polity: "Hoàn thiện hơn",
    culture: "Đông Sơn",
    nameColor: "#3498DB",
  },
  {
    name: "Chăm Pa",
    era: "Thế kỉ II SCN",
    river: "Sông Thu Bồn",
    place: "Miền Trung",
    polity: "Quân chủ chuyên chế",
    culture: "Ảnh hưởng Ấn Độ",
    nameColor: "var(--color-teal)",
  },
  {
    name: "Phù Nam",
    era: "Sau Chăm Pa",
    river: "Sông Cửu Long",
    place: "Nam Bộ",
    polity: "Quân chủ chuyên chế",
    culture: "Văn hóa Óc Eo",
    nameColor: "var(--color-crimson)",
  },
];

export function QuickRefTable() {
  return (
    <section
      aria-labelledby="quick-ref-heading"
      className="mb-6 rounded-2xl border border-border-earth bg-surface p-5"
    >
      <h2
        id="quick-ref-heading"
        className="mt-0 mb-4 font-display text-lg font-bold text-gold"
      >
        📊 Bảng so sánh nhanh ba nền văn minh
      </h2>
      <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr>
              {HEADERS.map((h) => (
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
            {ROWS.map((row, ri) => {
              const cells = [
                row.name,
                row.era,
                row.river,
                row.place,
                row.polity,
                row.culture,
              ];
              const rowBg = ri % 2 === 0 ? "bg-surface" : "bg-surface-2";
              return (
                <tr key={row.name}>
                  {cells.map((cell, ci) => {
                    const isName = ci === 0;
                    return (
                      <td
                        key={ci}
                        className={`border border-border-earth/40 px-3 py-2.5 text-sm ${rowBg} ${
                          isName ? "font-bold" : "font-normal text-text-dim"
                        }`}
                        style={isName ? { color: row.nameColor } : undefined}
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
