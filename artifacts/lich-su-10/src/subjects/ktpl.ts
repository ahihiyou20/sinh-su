import { KTPLTheory } from "@/components/ktpl/KTPLTheory";
import { ktplQuestions } from "@/data/ktpl/questions";
import type { SubjectConfig, SubjectFilter } from "./types";

const allFilter: SubjectFilter = { label: "Tất cả", kind: { type: "all" } };
const bookmarkFilter: SubjectFilter = {
  label: "Đã đánh dấu",
  kind: { type: "bookmarks" },
};

export const ktplSubject: SubjectConfig = {
  id: "ktpl",
  path: "/ktpl",
  shortName: "Kinh tế PL",

  badge: "Ôn tập • Kinh tế Pháp luật 10",
  title: "ÔN TẬP KINH TẾ PHÁP LUẬT",
  subtitle: "Hệ thống chính trị • Quốc hội • Chính phủ • Tòa án • Viện kiểm sát",
  emoji: "⚖️",
  headerGradient: "linear-gradient(135deg, #0D1F0F 0%, #1A3A1E 100%)",
  accent: "var(--color-gold, #D4A017)",
  accentHex: "#D4A017",

  tagColors: {
    "Quốc hội": "#1A5276",
    "Chủ tịch nước": "#6C3483",
    "Chính phủ": "#1E8449",
    "Tòa án nhân dân": "#C0392B",
    "Viện kiểm sát nhân dân": "#B7770D",
  },

  TheoryView: KTPLTheory,
  theoryHeading: "Tổng hợp kiến thức Kinh tế Pháp luật 10",

  questions: ktplQuestions,
  filters: [
    allFilter,
    bookmarkFilter,
    { label: "Quốc hội", kind: { type: "topic", topic: "Quốc hội" } },
    { label: "Chủ tịch nước", kind: { type: "topic", topic: "Chủ tịch nước" } },
    { label: "Chính phủ", kind: { type: "topic", topic: "Chính phủ" } },
    { label: "Tòa án ND", kind: { type: "topic", topic: "Tòa án nhân dân" } },
    { label: "Viện kiểm sát", kind: { type: "topic", topic: "Viện kiểm sát nhân dân" } },
  ],
  defaultFilter: allFilter,
  bookmarkFilter,

  footer: "© Ôn tập Kinh tế Pháp luật 10 — Hiểu luật, vững điểm.",
};
