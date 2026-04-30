interface HeaderProps {
  readonly questionCount: number;
  readonly onStartQuiz: () => void;
}

export function Header({ questionCount, onStartQuiz }: HeaderProps) {
  return (
    <header
      className="relative overflow-hidden border-b-2 border-gold/25 px-5 pt-9 pb-8 text-center"
      style={{
        background:
          "linear-gradient(160deg, #2C0A00 0%, #1C1008 40%, #0A1C10 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-10 h-[200px] w-[200px] rounded-full bg-gold/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-8 h-[160px] w-[160px] rounded-full bg-jade/10"
      />

      <div className="mb-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-dim">
        Lịch Sử 10 • Kết Nối Tri Thức • 2025–2026
      </div>
      <h1 className="m-0 font-display text-2xl font-bold leading-snug tracking-wide text-gold sm:text-3xl">
        📜 Đề Cương Ôn Tập Học Kì 2
      </h1>
      <p className="mx-auto mt-2.5 max-w-[540px] px-2 text-sm leading-relaxed text-text-dim">
        Chủ đề 6: Một số nền văn minh trên đất nước Việt Nam (trước năm 1858)
      </p>

      <button
        type="button"
        onClick={onStartQuiz}
        className="mt-6 max-w-[calc(100%-1rem)] rounded-full border-0 px-7 py-3 font-display text-[15px] font-bold tracking-wide text-bg shadow-[0_4px_20px_rgba(212,160,23,0.25)]"
        style={{
          background: "linear-gradient(135deg, #D4A017, #B8860B)",
          cursor: "pointer",
        }}
      >
        🎯 Bắt đầu Quiz ({questionCount} câu hỏi)
      </button>
    </header>
  );
}
