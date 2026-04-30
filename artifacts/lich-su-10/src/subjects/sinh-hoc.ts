import { SinhHocTheory } from "@/components/sinh-hoc/SinhHocTheory";
import { quizData as quizQuestions } from "@/data/sinh-hoc/quiz";
import { sinhHocQuickRef } from "@/data/sinh-hoc/quick-ref";
import type { SubjectConfig, SubjectFilter, SubjectQuestion } from "./types";

const TAG_DINHDUONG = "Dinh dưỡng VSV";
const TAG_TRAODOI = "Trao đổi chất VSV";
const TAG_VIRUS = "Sinh trưởng & Virus";
const TAG_PHANBAO = "Phân bào (NP – GP)";

const tagColors: Record<string, string> = {
  [TAG_DINHDUONG]: "#2ECC71",
  [TAG_TRAODOI]: "#3498DB",
  [TAG_VIRUS]: "#9B59B6",
  [TAG_PHANBAO]: "#E67E22",
};

function tagFor(index: number): string {
  // Question numbering matches the source comments in data/sinh-hoc/quiz.ts:
  //   Q1-9   → Khái niệm & dinh dưỡng VSV
  //   Q10-20 → Quá trình tổng hợp & phân giải
  //   Q21-50 → Sinh trưởng VSV & virus
  //   Q51-56 → Nguyên phân – Giảm phân
  if (index < 9) return TAG_DINHDUONG;
  if (index < 20) return TAG_TRAODOI;
  if (index < 50) return TAG_VIRUS;
  return TAG_PHANBAO;
}

const questions: readonly SubjectQuestion[] = quizQuestions.map((q, i) => ({
  q: q.q,
  opts: q.options,
  ans: q.answer,
  explain: q.explain,
  tag: tagFor(i),
}));

const allFilter: SubjectFilter = { label: "Tất cả", kind: { type: "all" } };
const bookmarkFilter: SubjectFilter = {
  label: "Đã đánh dấu",
  kind: { type: "bookmarks" },
};

export const sinhHocSubject: SubjectConfig = {
  id: "sinhhoc",
  path: "/sinhhoc",

  badge: "Ôn tập • Sinh học 10",
  title: "🧬 ÔN TẬP SINH HỌC LỚP 10",
  subtitle: "Vi sinh vật • Phân bào • Nguyên phân – Giảm phân",
  emoji: "🧬",
  headerGradient: "linear-gradient(135deg, #0F1F18 0%, #081410 100%)",
  accent: "var(--color-jade)",
  accentHex: "#2ECC71",

  otherId: "lichsu",
  otherPath: "/lichsu",
  otherShortName: "Lịch sử",
  otherEmoji: "📜",

  tagColors,
  quickRef: sinhHocQuickRef,

  TheoryView: SinhHocTheory,
  theoryHeading: "🧪 Tổng hợp lý thuyết",

  questions,
  filters: [
    allFilter,
    bookmarkFilter,
    { label: TAG_DINHDUONG, kind: { type: "topic", topic: TAG_DINHDUONG } },
    { label: TAG_TRAODOI, kind: { type: "topic", topic: TAG_TRAODOI } },
    { label: TAG_VIRUS, kind: { type: "topic", topic: TAG_VIRUS } },
    { label: TAG_PHANBAO, kind: { type: "topic", topic: TAG_PHANBAO } },
  ],
  defaultFilter: allFilter,
  bookmarkFilter,

  footer: "© Ôn tập Sinh học 10 — Học để hiểu, hiểu để nhớ.",
};
