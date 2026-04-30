import type { QuizQuestion, QuizTag } from "./quiz";

// =============================================================================
// ADMIN-EDITABLE EXTRA QUESTIONS — Lịch sử 10
// -----------------------------------------------------------------------------
// Add new history questions to the array below. They will be appended to the
// main quiz pool automatically the next time the app rebuilds. No restart
// command or database edit is required — just edit this file.
//
// Schema (one entry per object in the array):
//   {
//     q:       "Câu hỏi…",                            // Question text
//     opts:    ["Lựa chọn A", "B", "C", "D"],         // Always 4 options
//     ans:     0,                                       // 0..3 — index of the
//                                                       //   correct option
//     explain: "Giải thích ngắn gọn…",                  // Shown after answer
//     tag:     "Văn Lang – Âu Lạc"                      // One of:
//                                                       //   "Văn Lang – Âu Lạc"
//                                                       //   "Chăm Pa"
//                                                       //   "Phù Nam"
//   }
// =============================================================================

export const extraQuestions: readonly QuizQuestion[] = [
  // Example (uncomment & edit, or add new entries below):
  // {
  //   q: "Trống đồng Đông Sơn là biểu tượng tiêu biểu của nền văn minh nào?",
  //   opts: ["Văn Lang – Âu Lạc", "Chăm Pa", "Phù Nam", "Óc Eo"],
  //   ans: 0,
  //   explain:
  //     "Trống đồng Đông Sơn là di vật tiêu biểu cho trình độ luyện kim và đời sống văn hoá của cư dân Văn Lang – Âu Lạc.",
  //   tag: "Văn Lang – Âu Lạc" satisfies QuizTag,
  // },
];
