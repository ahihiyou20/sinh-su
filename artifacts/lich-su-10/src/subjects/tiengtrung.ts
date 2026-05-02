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
  title: "🀄 ÔN TẬP TIẾNG TRUNG HSK 2",
  subtitle: "Ngữ pháp • Từ vựng • Cấu trúc câu HSK 2",
  emoji: "🀄",
  headerGradient: "linear-gradient(135deg, #1A0A0A 0%, #2C0A0A 100%)",
  accent: "var(--color-red, #C0392B)",
  accentHex: "#C0392B",

  tagColors: {
    "Ngữ pháp HSK 2": "#C0392B",
  },

  TheoryView: TiengTrungTheory,
  theoryHeading: "📚 Tổng hợp ngữ pháp HSK 2",

  questions: tiengTrungQuestions,
  filters: [
    allFilter,
    bookmarkFilter,
    { label: "Ngữ pháp HSK 2", kind: { type: "topic", topic: "Ngữ pháp HSK 2" } },
  ],
  defaultFilter: allFilter,
  bookmarkFilter,

  footer: "© Ôn tập Tiếng Trung HSK 2 — Ngữ pháp vững, điểm cao.",
};
