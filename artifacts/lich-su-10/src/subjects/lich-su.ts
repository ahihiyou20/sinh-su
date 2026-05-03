import { LichSuTheory } from "@/components/lich-su/LichSuTheory";
import { extraQuestions } from "@/data/lich-su/extra";
import { passageQuestions } from "@/data/lich-su/passages";
import { quizData } from "@/data/lich-su/quiz";
import { lichSuQuickRef } from "@/data/lich-su/quick-ref";
import type { SubjectConfig, SubjectFilter, SubjectQuestion } from "./types";

const tagColors: Record<string, string> = {
  "Văn Lang – Âu Lạc": "#2ECC71",
  "Chăm Pa": "#1A8B7A",
  "Phù Nam": "#E67E22",
};

const questions: readonly SubjectQuestion[] = [
  ...quizData.map((q) => ({
    q: q.q,
    opts: q.opts,
    ans: q.ans,
    explain: q.explain,
    tag: q.tag,
    difficulty: q.difficulty,
  })),
  ...extraQuestions.map((q, i) => ({
    q: q.q,
    opts: q.opts,
    ans: q.ans,
    explain: q.explain,
    tag: q.tag,
    id: `lichsu-extra:${i}`,
  })),
  ...passageQuestions,
];

const allFilter: SubjectFilter = { label: "Tất cả", kind: { type: "all" } };
const bookmarkFilter: SubjectFilter = {
  label: "Đã đánh dấu",
  kind: { type: "bookmarks" },
};

export const lichSuSubject: SubjectConfig = {
  id: "lichsu",
  path: "/lichsu",
  shortName: "Lịch sử",

  badge: "Ôn tập • Lịch sử 10",
  title: "📜 ÔN TẬP LỊCH SỬ LỚP 10",
  subtitle:
    "Văn minh cổ đại Việt Nam • Văn Lang – Âu Lạc • Chăm Pa • Phù Nam",
  emoji: "📜",
  headerGradient: "linear-gradient(135deg, #2A1810 0%, #1A0F08 100%)",
  accent: "var(--color-gold)",
  accentHex: "#D4A017",

  tagColors,
  quickRef: lichSuQuickRef,

  TheoryView: LichSuTheory,
  theoryHeading: "📚 Tổng hợp lý thuyết",

  questions,
  filters: [
    allFilter,
    bookmarkFilter,
    { label: "Văn Lang – Âu Lạc", kind: { type: "topic", topic: "Văn Lang – Âu Lạc" } },
    { label: "Chăm Pa", kind: { type: "topic", topic: "Chăm Pa" } },
    { label: "Phù Nam", kind: { type: "topic", topic: "Phù Nam" } },
  ],
  defaultFilter: allFilter,
  bookmarkFilter,

  footer: "© Ôn tập Lịch sử 10 — Học để hiểu, hiểu để nhớ.",
};
