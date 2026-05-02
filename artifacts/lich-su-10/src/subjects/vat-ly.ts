import { VatLyTheory } from "@/components/vat-ly/VatLyTheory";
import { vatLyQuizData } from "@/data/vat-ly/quiz";
import { vatLyQuickRef } from "@/data/vat-ly/quick-ref";
import type { SubjectConfig, SubjectFilter, SubjectQuestion } from "./types";

const TAG_DONG_LUONG = "Động lượng";
const TAG_NANG_LUONG = "Năng lượng";
const TAG_TRON = "Chuyển động tròn đều";
const TAG_CHIEN_LUOC = "Chiến lược làm bài";

const tagColors: Record<string, string> = {
  [TAG_DONG_LUONG]: "#E74C3C",
  [TAG_NANG_LUONG]: "#F39C12",
  [TAG_TRON]: "#2ECC71",
  [TAG_CHIEN_LUOC]: "#3498DB",
};

const questions: readonly SubjectQuestion[] = vatLyQuizData.map((q, i) => ({
  q: q.q,
  opts: q.options,
  ans: q.answer,
  explain: q.explain,
  tag: q.tag,
  id: `vatly:${i}`,
}));

const allFilter: SubjectFilter = { label: "Tất cả", kind: { type: "all" } };
const bookmarkFilter: SubjectFilter = {
  label: "Đã đánh dấu",
  kind: { type: "bookmarks" },
};

export const vatLySubject: SubjectConfig = {
  id: "vatly",
  path: "/vatly",
  shortName: "Vật lý",

  badge: "Ôn tập • Vật lý 10 HK2",
  title: "⚛️ ÔN TẬP VẬT LÝ LỚP 10",
  subtitle: "Động lượng • Năng lượng • Chuyển động tròn đều",
  emoji: "⚛️",
  headerGradient: "linear-gradient(135deg, #1A0A2E 0%, #0D1B3E 100%)",
  accent: "var(--color-crimson, #E74C3C)",
  accentHex: "#E74C3C",

  tagColors,
  quickRef: vatLyQuickRef,

  TheoryView: VatLyTheory,
  theoryHeading: "⚡ Tổng hợp lý thuyết & Chiến lược làm bài",

  questions,
  filters: [
    allFilter,
    bookmarkFilter,
    { label: TAG_DONG_LUONG, kind: { type: "topic", topic: TAG_DONG_LUONG } },
    { label: TAG_NANG_LUONG, kind: { type: "topic", topic: TAG_NANG_LUONG } },
    { label: TAG_TRON, kind: { type: "topic", topic: TAG_TRON } },
    { label: TAG_CHIEN_LUOC, kind: { type: "topic", topic: TAG_CHIEN_LUOC } },
  ],
  defaultFilter: allFilter,
  bookmarkFilter,

  footer: "© Ôn tập Vật lý 10 — Hiểu công thức, chinh phục điểm cao.",
};
