import { Zap, Target } from "lucide-react";
import type { ReactNode } from "react";

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

export function Header({
  badge,
  title,
  subtitle,
  questionCount,
  onStartQuiz,
  hasResume,
  onResume,
  children,
}: HeaderProps) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-bg/80 backdrop-blur-md">
        <div className="max-w-[1100px] mx-auto px-5 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.4)]">
              <Zap className="w-3.5 h-3.5 text-white" fill="currentColor" />
            </div>
            <span className="font-semibold text-sm tracking-wide hidden sm:block">StudyAI</span>
          </div>
          <div className="flex items-center gap-2 min-w-0 overflow-x-auto">
            {children}
          </div>
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-5 pt-12 pb-10">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dim">
          {badge}
        </div>
        <h1 className="m-0 text-4xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight"
          style={{
            background: "linear-gradient(135deg, #ffffff 40%, #818cf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </h1>
        <p className="text-text-dim text-base sm:text-lg max-w-2xl mb-8 leading-relaxed m-0">
          {subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onStartQuiz}
            className="cursor-pointer bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg px-6 py-2.5 transition-all duration-200 active:scale-[0.98] border-0 text-sm flex items-center gap-2"
            style={{ boxShadow: "0 0 15px rgba(99,102,241,0.3)" }}
          >
            <Target size={15} />
            {hasResume ? "Bắt đầu Quiz mới" : "Bắt đầu Quiz"} ({questionCount} câu)
          </button>
          {hasResume && onResume && (
            <button
              type="button"
              onClick={onResume}
              className="cursor-pointer border border-white/[0.12] text-text-dim hover:text-text hover:border-white/25 rounded-lg px-6 py-2.5 text-sm font-medium transition-all duration-200 bg-transparent"
            >
              Tiếp tục bài đang làm
            </button>
          )}
        </div>
      </div>
    </>
  );
}
