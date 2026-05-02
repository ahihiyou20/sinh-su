import type { SubjectId } from "@/lib/storage";
import { lichSuSubject } from "./lich-su";
import { sinhHocSubject } from "./sinh-hoc";
import { tiengTrungSubject } from "./tiengtrung";
import type { SubjectConfig } from "./types";

export const subjects: Record<SubjectId, SubjectConfig> = {
  lichsu: lichSuSubject,
  sinhhoc: sinhHocSubject,
  tiengtrung: tiengTrungSubject,
};

export const subjectList: readonly SubjectConfig[] = [
  lichSuSubject,
  sinhHocSubject,
  tiengTrungSubject,
];

export function getSubject(id: SubjectId): SubjectConfig {
  return subjects[id];
}
