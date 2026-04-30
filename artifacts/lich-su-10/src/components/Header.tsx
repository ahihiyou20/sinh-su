import type { CSSProperties, ReactNode } from "react";

interface HeaderProps {
  readonly badge: string;
  readonly title: string;
  readonly subtitle: string;
  readonly headerGradient: string;
  readonly questionCount: number;
  readonly onStartQuiz: () => void;
  readonly hasResume: boolean;
  readonly onResume?: () => void;
  readonly children?: ReactNode;
}

const headerInlineStyle = (gradient: string): CSSProperties => ({
  background: gradient,
});

export function Header({
  badge,
  title,
  subtitle,
  headerGradient,
  questionCount,
  onStartQuiz,
  hasResume,
  onResume,
  children,
}: HeaderProps) {
  return (
    <header
      className="relative overflow-hidden border-b-2 border-gold/25 px-5 pt-8 pb-8 text-center"
      style={headerInlineStyle(headerGradient)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-10 h-[200px] w-[200px] rounded-full bg-gold/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-8 h-[160px] w-[160px] rounded-full bg-jade/10"
      />

      {children}

      <div className="mb-2.5 mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-gold-dim">
        {badge}
      </div>
      <h1 className="m-0 font-display text-2xl font-bold leading-snug tracking-wide text-gold sm:text-3xl">
        {title}
      </h1>
      <p className="mx-auto mt-2.5 max-w-[540px] px-2 text-sm leading-relaxed text-text-dim">
        {subtitle}
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={onStartQuiz}
          className="cursor-pointer rounded-full border-0 px-7 py-3 font-display text-[15px] font-bold tracking-wide text-bg shadow-[0_4px_20px_rgba(212,160,23,0.25)]"
          style={{
            background: "linear-gradient(135deg, #D4A017, #B8860B)",
          }}
        >
          🎯 {hasResume ? "Bắt đầu Quiz mới" : "Bắt đầu Quiz"} ({questionCount} câu)
        </button>
        {hasResume && onResume && (
          <button
            type="button"
            onClick={onResume}
            className="cursor-pointer rounded-full border border-gold/60 bg-surface px-7 py-3 font-display text-[15px] font-bold tracking-wide text-gold transition-colors duration-200 hover:bg-surface-2"
          >
            ↻ Tiếp tục bài đang làm
          </button>
        )}
      </div>
    </header>
  );
}
