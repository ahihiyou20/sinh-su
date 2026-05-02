import { Link } from "wouter";
import { subjectList } from "@/subjects";
import type { SubjectId } from "@/lib/storage";

interface SubjectSwitcherProps {
  readonly currentId: SubjectId;
}

export function SubjectSwitcher({ currentId }: SubjectSwitcherProps) {
  return (
    <div className="mb-3 flex justify-center">
      <div
        role="group"
        aria-label="Chuyển môn học"
        className="inline-flex items-center overflow-hidden rounded-full border border-gold/40 bg-bg/70 text-[12px] font-bold uppercase tracking-wider backdrop-blur-sm"
      >
        {subjectList.map((s, i) => {
          const isCurrent = s.id === currentId;
          return isCurrent ? (
            <span
              key={s.id}
              aria-current="page"
              className={`bg-gold px-3.5 py-1.5 text-bg${i > 0 ? " border-l border-gold/40" : ""}`}
            >
              {s.emoji} {s.shortName}
            </span>
          ) : (
            <Link
              key={s.id}
              href={s.path}
              className={`cursor-pointer px-3.5 py-1.5 text-gold transition-colors duration-200 hover:bg-surface-2${i > 0 ? " border-l border-gold/40" : ""}`}
            >
              {s.emoji} {s.shortName}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
