import { Link } from "wouter";
import { subjectList } from "@/subjects";
import type { SubjectId } from "@/lib/storage";

interface SubjectSwitcherProps {
  readonly currentId: SubjectId;
}

export function SubjectSwitcher({ currentId }: SubjectSwitcherProps) {
  return (
    <nav
      role="group"
      aria-label="Chuyển môn học"
      className="flex items-center bg-surface p-1 rounded-full border border-white/[0.07] gap-0.5"
    >
      {subjectList.map((s) => {
        const isCurrent = s.id === currentId;
        return isCurrent ? (
          <span
            key={s.id}
            aria-current="page"
            className="px-3.5 py-1.5 rounded-full bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap"
          >
            {s.emoji} {s.shortName}
          </span>
        ) : (
          <Link
            key={s.id}
            href={s.path}
            className="cursor-pointer px-3.5 py-1.5 rounded-full text-text-dim hover:text-white hover:bg-white/[0.05] text-xs font-medium transition-all duration-150 flex items-center gap-1.5 whitespace-nowrap"
          >
            {s.emoji} {s.shortName}
          </Link>
        );
      })}
    </nav>
  );
}
