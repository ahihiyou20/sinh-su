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
  // ── Virus: cấu trúc (từ đề Cấu trúc virus – Wayground) ───────────────────
  {
    q: "Loại virus nào dưới đây có vật chất di truyền là DNA?",
    options: ["Virus đậu mùa", "Virus cúm", "Virus viêm não Nhật Bản", "Virus HIV"],
    answer: 0,
    explain: "Virus đậu mùa (Smallpox virus) có hệ gene là DNA mạch kép. Virus cúm, viêm não Nhật Bản và HIV đều có hệ gene là RNA.",
    tag: "Sinh trưởng & Virus",
    difficulty: "medium",
  },
  {
    q: "Virus mang hệ gene là phân tử nào sau đây?",
    options: ["DNA hoặc RNA", "Chỉ DNA", "Chỉ protein", "DNA và RNA cùng lúc"],
    answer: 0,
    explain: "Mỗi loại virus chỉ mang MỘT loại acid nucleic, nhưng đó có thể là DNA hoặc RNA (không có virus nào chứa đồng thời cả hai).",
    tag: "Sinh trưởng & Virus",
    difficulty: "easy",
  },
  {
    q: "Bệnh nào sau đây do virus gây ra và lây truyền qua côn trùng đốt?",
    options: ["Bệnh cúm H5N1", "Bệnh viêm gan B", "Bệnh sốt rét", "Bệnh sốt xuất huyết"],
    answer: 3,
    explain: "Sốt xuất huyết do virus Dengue, lây truyền qua muỗi Aedes aegypti đốt. Cúm H5N1 lây qua đường hô hấp; viêm gan B lây qua máu/dịch cơ thể; sốt rét do ký sinh trùng Plasmodium (không phải virus).",
    tag: "Sinh trưởng & Virus",
    difficulty: "medium",
  },
  {
    q: "Đối với các nhóm virus có vỏ ngoài, bản chất của lớp vỏ ngoài có cấu tạo tương tự với?",
    options: ["Màng sinh chất", "Carbohydrate", "Glycoprotein", "Vỏ capsid"],
    answer: 0,
    explain: "Vỏ ngoài (envelope) của virus được hình thành từ màng sinh chất của tế bào chủ khi virus xuất bào nên có cấu tạo tương tự màng sinh chất (lớp kép phospholipid + protein).",
    tag: "Sinh trưởng & Virus",
    difficulty: "hard",
  },
  {
    q: "Người ta không sử dụng thuật ngữ 'sinh sản' đối với virus, bởi vì?",
    options: [
      "Virus không phải là sinh vật",
      "Virus chưa có hệ sinh sản riêng",
      "Virus kí sinh bắt buộc và phải nhờ bộ máy của tế bào chủ để tạo ra các virus con",
      "Virus làm tan tế bào chủ sau mỗi chu kì",
    ],
    answer: 2,
    explain: "Virus không có bộ máy enzyme và ribosome riêng → phải 'nhờ' hoàn toàn bộ máy tế bào chủ tổng hợp các thành phần và lắp ráp thành virus mới → gọi là 'nhân lên' (replication) thay vì 'sinh sản'.",
    tag: "Sinh trưởng & Virus",
    difficulty: "hard",
  },
  {
    q: "Khi xâm nhập vào cơ thể người, HIV sẽ xâm nhập vào tế bào nào dưới đây?",
    options: ["Hồng cầu", "Lympho T-CD4", "Bạch cầu trung tính", "Tiểu cầu"],
    answer: 1,
    explain: "HIV gắn đặc hiệu vào thụ thể CD4 trên bề mặt tế bào Lympho T-CD4 (T helper cell), phá hủy hệ miễn dịch và gây ra hội chứng AIDS.",
    tag: "Sinh trưởng & Virus",
    difficulty: "medium",
  },
  {
    q: "Điền vào chỗ trống: 'Khi hệ gene đã vào bên trong tế bào vật chủ, chúng lập tức ức chế các quá trình tổng hợp của tế bào và [  ] bộ máy của tế bào theo hướng tổng hợp các thành phần của virus.'",
    options: ["Phá hủy", "Kích hoạt", "Ức chế", "Tổng hợp"],
    answer: 1,
    explain: "Hệ gene virus 'chiếm' bộ máy tế bào chủ bằng cách KÍCH HOẠT lại theo chương trình của mình: ngừng sản xuất protein tế bào, chuyển sang sản xuất protein virus và acid nucleic virus.",
    tag: "Sinh trưởng & Virus",
    difficulty: "hard",
  },
  {
    q: "Lúc xuất bào, virus lấy [  ] của tế bào vật chủ làm lớp vỏ ngoài cho mình, giúp nó dễ xâm nhập vào các tế bào khác cùng loại hơn.",
    options: ["Màng nhân", "Màng đáy", "Màng sinh chất", "Màng lưới nội chất"],
    answer: 2,
    explain: "Khi xuất bào theo kiểu nảy chồi, virus đẩy nucleocapsid qua màng sinh chất và 'bọc' một đoạn màng sinh chất của tế bào chủ làm vỏ ngoài → đây là nguồn gốc của lớp envelope.",
    tag: "Sinh trưởng & Virus",
    difficulty: "medium",
  },
  {
    q: "Lớp vỏ ngoài (envelope) của virus có màng bọc có cấu tạo là?",
    options: [
      "Lớp đơn phospholipid và protein",
      "Lớp đơn phospholipid",
      "Lớp kép phospholipid và protein",
      "Lớp kép phospholipid",
    ],
    answer: 2,
    explain: "Vỏ ngoài virus giống màng sinh chất: LỚP KÉP PHOSPHOLIPID gắn với các phân tử PROTEIN (glycoprotein), trong đó các gai glycoprotein đóng vai trò thụ thể bám vào tế bào chủ.",
    tag: "Sinh trưởng & Virus",
    difficulty: "hard",
  },

  // ── Kiểm soát sinh trưởng VSV ─────────────────────────────────────────────
  {
    q: "Biện pháp nào sau đây giúp kéo dài thời gian bảo quản thịt cá bằng cách ức chế sinh trưởng của vi sinh vật?",
    options: [
      "Để ở nhiệt độ phòng thoáng mát",
      "Ướp muối đậm đặc",
      "Ngâm trong nước sôi",
      "Bổ sung kháng sinh vào thực phẩm",
    ],
    answer: 1,
    explain: "Ướp muối đậm đặc tạo áp suất thẩm thấu cao → vi sinh vật mất nước và bị ức chế sinh trưởng (co nguyên sinh). Đây là phương pháp bảo quản truyền thống hiệu quả.",
    tag: "Sinh trưởng & Virus",
    difficulty: "easy",
  },

  // ── Phân bào (nguyên phân – giảm phân) ───────────────────────────────────
  {
    q: "Một tế bào sinh dưỡng của người có bộ NST 2n = 46. Ở kì sau của nguyên phân, số NST trong tế bào là?",
    options: ["46", "23", "92", "184"],
    answer: 2,
    explain: "Ở kì sau nguyên phân, các NST kép tách thành NST đơn và di chuyển về hai cực: số NST = 2 × 2n = 2 × 46 = 92 (chưa chia tế bào chất).",
    tag: "Phân bào (NP – GP)",
    difficulty: "medium",
  },
  {
    q: "Sau giảm phân I, mỗi tế bào con của loài có 2n = 18 sẽ chứa số NST là?",
    options: ["18 NST đơn", "9 NST đơn", "9 NST kép", "18 NST kép"],
    answer: 2,
    explain: "Giảm phân I tách các NST kép tương đồng về hai tế bào con: mỗi tế bào con chứa n = 9 NST KÉP (chưa tách tâm động).",
    tag: "Phân bào (NP – GP)",
    difficulty: "hard",
  },
  {
    q: "Một tế bào có bộ NST 2n = 16 nguyên phân liên tiếp 2 lần. Số tế bào con được tạo ra là?",
    options: ["4", "8", "16", "32"],
    answer: 0,
    explain: "Số tế bào con = 2^k = 2² = 4 tế bào con (k = số lần phân chia = 2).",
    tag: "Phân bào (NP – GP)",
    difficulty: "easy",
  },
  {
    q: "Ở một loài có 2n = 24. Số NST trong mỗi giao tử bình thường là?",
    options: ["24", "12", "6", "48"],
    answer: 1,
    explain: "Giao tử được tạo ra qua giảm phân, mang bộ NST đơn bội n = 24 ÷ 2 = 12 NST.",
    tag: "Phân bào (NP – GP)",
    difficulty: "easy",
  },
  {
    q: "Điểm kiểm soát nào sau đây KHÔNG thuộc kì trung gian của chu kì tế bào?",
    options: [
      "Điểm kiểm soát G1 (cuối pha G1)",
      "Điểm kiểm soát S (trong pha S)",
      "Điểm kiểm soát G2 (cuối pha G2)",
      "Điểm kiểm soát thoi phân bào (M checkpoint)",
    ],
    answer: 3,
    explain: "M checkpoint (spindle assembly checkpoint) kiểm tra sự gắn đúng của thoi phân bào với NST ở KÌ GIỮA của nguyên phân, không thuộc kì trung gian.",
    tag: "Phân bào (NP – GP)",
    difficulty: "hard",
  },
  {
    q: "Một tế bào có bộ NST 2n = 10 nguyên phân liên tiếp 3 lần. Môi trường nội bào cần cung cấp bao nhiêu NST đơn tương đương?",
    options: ["30", "50", "70", "80"],
    answer: 2,
    explain: "Số NST đơn cần cung cấp = 2n × (2^k − 1) = 10 × (2³ − 1) = 10 × 7 = 70 NST đơn.",
    tag: "Phân bào (NP – GP)",
    difficulty: "hard",
  },
];
