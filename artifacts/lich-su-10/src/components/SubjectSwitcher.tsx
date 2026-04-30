import { Link } from "wouter";

interface SubjectSwitcherProps {
  readonly currentShortName: string;
  readonly currentEmoji: string;
  readonly otherShortName: string;
  readonly otherEmoji: string;
  readonly otherPath: string;
}

export function SubjectSwitcher({
  currentShortName,
  currentEmoji,
  otherShortName,
  otherEmoji,
  otherPath,
}: SubjectSwitcherProps) {
  return (
    <div className="mb-3 flex justify-center">
      <div
        role="group"
        aria-label="Chuyển môn học"
        className="inline-flex items-center overflow-hidden rounded-full border border-gold/40 bg-bg/70 text-[12px] font-bold uppercase tracking-wider backdrop-blur-sm"
      >
        <span
          aria-current="page"
          className="bg-gold px-3.5 py-1.5 text-bg"
        >
          {currentEmoji} {currentShortName}
        </span>
        <Link
          href={otherPath}
          className="cursor-pointer px-3.5 py-1.5 text-gold transition-colors duration-200 hover:bg-surface-2"
        >
          ↔ {otherEmoji} {otherShortName}
        </Link>
      </div>
    </div>
  );
}
