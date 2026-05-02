import type { SubjectId } from "@/lib/storage";
import { lichSuSubject } from "./lich-su";
import { sinhHocSubject } from "./sinh-hoc";
import { tiengTrungSubject } from "./tiengtrung";
import { vatLySubject } from "./vat-ly";
import type { SubjectConfig } from "./types";

export const subjects: Record<SubjectId, SubjectConfig> = {
  lichsu: lichSuSubject,
  sinhhoc: sinhHocSubject,
  tiengtrung: tiengTrungSubject,
  vatly: vatLySubject,
};

export const subjectList: readonly SubjectConfig[] = [
  lichSuSubject,
  sinhHocSubject,
  tiengTrungSubject,
  vatLySubject,
];

export function getSubject(id: SubjectId): SubjectConfig {
  return subjects[id];
}
