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
  {
    q: "Khí hậu nhiệt đới ẩm gió mùa, lượng mưa nhiều là điều kiện thuận lợi để cư dân Văn Lang - Âu Lạc phát triển ngành kinh tế nào sau đây?",
    opts: ["Luyện kim, đúc đồng", "Trồng trọt, chăn nuôi", "Thương nghiệp biển", "Chế tạo vũ khí"],
    ans: 1,
    explain: "Khí hậu nhiệt đới ẩm gió mùa, lượng mưa nhiều là điều kiện thuận lợi để cư dân Văn Lang - Âu Lạc phát triển ngành chăn nuôi và trồng trọt",
    tag: "Văn Lang – Âu Lạc",
    difficulty: "easy"
  },
  {
    q: "Cư dân Chăm - pa đã tiếp thu Phật giáo từ quốc gia nào sau đây?",
    opts: ["Ai Cập", "Hà Lan", "Tây Ban Nha", "Ấn Độ"],
    ans: 3,
    explain: "Do nằm trên tuyến đường biển huyết mạch, Chăm-pa sớm giao thương và chịu ảnh hưởng sâu sắc bởi văn hóa, tôn giáo từ Ấn Độ, bao gồm Phật giáo và Hin-đu giáo.",
    tag: "Chăm Pa",
    difficulty: "medium"
  },
  {
    q: "Nội dung nào sau đây là một trong những cơ sở dẫn đến sự hình thành và phát triển của văn minh Phù Nam?",
    opts: ["Mối liên kết giữa các cộng đồng cư dân Việt cố", "Chịu ảnh hưởng sâu sắc của văn minh Ân Độ", "Nhu cầu đoàn kết chống xâm lược từ Trung Quốc", "Nền văn hóa Sa Huỳnh phát triển đến cực thịnh"],
    ans: 1,
    explain: "Văn minh Phù Nam chịu ảnh hưởng sâu sắc của văn minh Ấn Độ về tôn giáo, nghệ thuật, chữ viết và mô hình tổ chức nhà nước",
    tag: "Phù Nam",
    difficulty: "medium"
  },
  {
    q: "Nhà nước Chăm - pa và nhà nước Phù Nam đều được tổ chức theo mô hình của thể chế",
    opts: ["Dân chủ cộng hoà", "Dân chủ chủ nô", "Quân chủ chuyên chế", "Quân chủ lập hiến"],
    ans: 2,
    explain: "Nhà nước Chăm - pa và nhà nước Phù Nam đều được tổ chức theo mô hình của thể chế Quân chủ chuyên chế",
    tag: "Phù Nam",
    difficulty: "hard"
  }
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
