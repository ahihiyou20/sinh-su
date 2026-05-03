import { TiengTrungTheory } from "@/components/tieng-trung/TiengTrungTheory";
import { tiengTrungQuestions } from "@/data/tieng-trung/questions";
import type { SubjectConfig, SubjectFilter } from "./types";

const allFilter: SubjectFilter = { label: "Tất cả", kind: { type: "all" } };
const bookmarkFilter: SubjectFilter = {
  label: "Đã đánh dấu",
  kind: { type: "bookmarks" },
};

export const tiengTrungSubject: SubjectConfig = {
  id: "tiengtrung",
  path: "/tiengtrung",
  shortName: "Tiếng Trung",

  badge: "Ôn tập • Tiếng Trung HSK 2",
  title: "ÔN TẬP TIẾNG TRUNG HSK 2",
  subtitle: "Ngữ pháp • Từ vựng • Cấu trúc câu HSK 2",
  emoji: "🀄",
  headerGradient: "linear-gradient(135deg, #0D2137 0%, #1A3A5C 100%)",
  accent: "var(--color-gold, #D4A017)",
  accentHex: "#D4A017",

  tagColors: {
    "Ngữ pháp HSK 2": "#C0392B",
    "Đọc hiểu": "#1A6B3A",
    "Điền vào đoạn văn": "#5B2CA0",
    "Viết câu": "#1A5276",
  },

  TheoryView: TiengTrungTheory,
  theoryHeading: "Tổng hợp ngữ pháp HSK 2",

  questions: tiengTrungQuestions,
  filters: [
    allFilter,
    bookmarkFilter,
    { label: "Ngữ pháp HSK 2", kind: { type: "topic", topic: "Ngữ pháp HSK 2" } },
    { label: "Đọc hiểu", kind: { type: "topic", topic: "Đọc hiểu" } },
    { label: "Điền vào đoạn văn", kind: { type: "topic", topic: "Điền vào đoạn văn" } },
    { label: "Viết câu", kind: { type: "topic", topic: "Viết câu" } },
  ],
  defaultFilter: allFilter,
  bookmarkFilter,

  footer: "© Ôn tập Tiếng Trung HSK 2 — Ngữ pháp vững, điểm cao.",
};
