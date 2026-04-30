import type { Quiz } from "./types";

// =============================================================================
// ADMIN-EDITABLE EXTRA QUESTIONS — Sinh học 10
// -----------------------------------------------------------------------------
// Add new biology questions to the array below. They will be appended to the
// main quiz pool automatically the next time the app rebuilds. No restart
// command or database edit is required — just edit this file.
//
// Schema (one entry per object in the array):
//   {
//     q:       "Câu hỏi…",                              // Question text
//     options: ["Lựa chọn A", "B", "C", "D"],           // Always 4 options
//     answer:  0,                                         // 0..3 — index of
//                                                         //   the correct
//                                                         //   option
//     explain: "Giải thích ngắn gọn…",                    // Shown after answer
//     tag:     "Dinh dưỡng VSV",                          // One of:
//                                                         //   "Dinh dưỡng VSV"
//                                                         //   "Trao đổi chất VSV"
//                                                         //   "Sinh trưởng & Virus"
//                                                         //   "Phân bào (NP – GP)"
//   }
//
// `tag` controls which topic-filter pill the question appears under in the
// quiz toolbar. It must match one of the labels above exactly.
// =============================================================================

export type ExtraQuiz = Quiz & { readonly tag: string };

export const extraQuestions: readonly ExtraQuiz[] = [
  // Example (uncomment & edit, or add new entries below):
  // {
  //   q: "Trong giảm phân, quá trình tiếp hợp và trao đổi chéo xảy ra ở kỳ nào?",
  //   options: ["Kỳ đầu I", "Kỳ giữa I", "Kỳ sau I", "Kỳ đầu II"],
  //   answer: 0,
  //   explain:
  //     "Tiếp hợp và trao đổi chéo giữa các NST tương đồng diễn ra ở KỲ ĐẦU I của giảm phân.",
  //   tag: "Phân bào (NP – GP)",
  // },
];
