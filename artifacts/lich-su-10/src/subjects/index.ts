import type { SubjectId } from "@/lib/storage";
import { lichSuSubject } from "./lich-su";
import { sinhHocSubject } from "./sinh-hoc";
import type { SubjectConfig } from "./types";

export const subjects: Record<SubjectId, SubjectConfig> = {
  lichsu: lichSuSubject,
  sinhhoc: sinhHocSubject,
};

export const subjectList: readonly SubjectConfig[] = [
  lichSuSubject,
  sinhHocSubject,
];

export function getSubject(id: SubjectId): SubjectConfig {
  return subjects[id];
}
