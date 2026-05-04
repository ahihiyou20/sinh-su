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
  {
    q: "Cho một số đặc điểm sau: (1) Có khả năng chuyển hóa mạnh, sinh sản nhanh. (2) Có khả năng tổng hợp được một số chất quý. (3) Có khả năng phân giải các chất hữu cơ dư thừa. (4) Có thể gây độc cho một số loài gây hại mùa màng. Số đặc điểm có lợi của vi sinh vật được ứng dụng trong thực tiễn là",
    options: ["1", "2", "3", "4"],
    answer: 3,
    explain: "Cả 4 đặc điểm đều là lợi thế ứng dụng: (1) sinh sản nhanh → lên men; (2) tổng hợp chất quý → kháng sinh, enzyme; (3) phân giải hữu cơ → xử lý môi trường; (4) gây độc côn trùng → thuốc trừ sâu sinh học (Bt).",
    tag: "Trao đổi chất VSV",
    difficulty: "easy",
  },
  {
    q: "Quy trình sản xuất khí sinh học từ rác thải hữu cơ được thực hiện nhờ",
    options: ["vi sinh vật nitrate hóa và phản nitrate hóa.", "vi sinh vật quang tự dưỡng và quang dị dưỡng.", "vi sinh vật cố định và phân giải lân.", "vi sinh vật lên men và sinh methane."],
    answer: 3,
    explain: "Biogas tạo ra qua lên men kị khí: VSV lên men phân giải chất hữu cơ, sau đó vi khuẩn sinh methane chuyển hóa thành CH₄ – thành phần chính của khí sinh học.",
    tag: "Trao đổi chất VSV",
    difficulty: "medium",
  },
  {
    q: "Cơ sở khoa học của ứng dụng sử dụng vi sinh vật để sản xuất thuốc trừ sâu sinh học là",
    options: ["khả năng tự tổng hợp các chất cần thiết của vi sinh vật.", "khả năng tiết enzyme ngoại bào để phân giải các chất của vi sinh vật.", "khả năng tạo ra các chất độc hại cho côn trùng gây hại của vi sinh vật.", "khả năng chuyển hóa các chất dinh dưỡng cho cây trồng của vi sinh vật."],
    answer: 2,
    explain: "Vi khuẩn Bacillus thuringiensis (Bt) tạo protein độc (Bt toxin) diệt côn trùng khi chúng ăn phải. Đây là cơ sở sản xuất thuốc trừ sâu sinh học an toàn.",
    tag: "Trao đổi chất VSV",
    difficulty: "medium",
  },
  {
    q: "Để sản xuất chất kháng sinh, người ta thường sử dụng chủ yếu những nhóm vi sinh vật nào sau đây? (1) Xạ khuẩn. (2) Vi khuẩn. (3) Động vật nguyên sinh. (4) Nấm mốc",
    options: ["(1), (2), (3).", "(1), (2), (4).", "(2), (3).", "(1), (4)."],
    answer: 1,
    explain: "Kháng sinh sản xuất từ: Xạ khuẩn (Streptomyces → streptomycin...), Vi khuẩn (Bacillus → bacitracin...), Nấm mốc (Penicillium → penicillin...). Động vật nguyên sinh không được dùng.",
    tag: "Trao đổi chất VSV",
    difficulty: "medium",
  },
  {
    q: "Trong sản xuất tương, nấm mốc Aspergillus oryzae có vai trò",
    options: ["tiết acid lactic để làm đông tụ tinh bột và protein trong đậu tương.", "tiết độc tố để ức chế sự phát triển của vi sinh vật gây thối hỏng tương.", "tiết enzyme ngoại bào thủy phân tinh bột và protein trong đậu tương.", "tiết chất kháng sinh để ức chế sự phát triển của vi sinh vật gây thối hỏng tương."],
    answer: 2,
    explain: "A. oryzae tiết amylase và protease thủy phân tinh bột thành đường và protein thành amino acid → tạo vị ngọt đặc trưng của tương.",
    tag: "Trao đổi chất VSV",
    difficulty: "medium",
  },
  {
    q: "Vi khuẩn Bacillus thuringiensis được sử dụng để sản xuất thuốc trừ sâu sinh học vì vi khuẩn này",
    options: ["có khả năng sinh ra độc tố để tiêu diệt côn trùng.", "có khả năng kí sinh và làm chết côn trùng.", "có khả năng ức chế sự sinh sản của côn trùng.", "có khả năng ức chế sự di chuyển của côn trùng."],
    answer: 0,
    explain: "Bt tạo protein tinh thể độc (Cry protein) khi hình thành bào tử. Côn trùng ăn phải → độc tố phá vỡ tế bào ruột → chết.",
    tag: "Trao đổi chất VSV",
    difficulty: "easy",
  },
  {
    q: "Nối ứng dụng (Cột A) với cơ sở khoa học (Cột B) sao cho phù hợp. Cột A: (1) Sản xuất chất kháng sinh; (2) Sản xuất nước mắm; (3) Tạo chế phẩm xử lí ô nhiễm môi trường; (4) Sản xuất vaccine. Cột B: (a) VSV có khả năng phân giải protein; (b) VSV có khả năng tự tổng hợp các chất; (c) VSV có khả năng phân giải chất hữu cơ; (d) VSV đóng vai trò là kháng nguyên.",
    options: ["1–b, 2–a, 3–d, 4–c.", "1–a, 2–b, 3–d, 4–c.", "1–a, 2–b, 3–c, 4–d.", "1–b, 2–a, 3–c, 4–d."],
    answer: 3,
    explain: "(1)↔(b) kháng sinh do VSV tự tổng hợp; (2)↔(a) protease phân giải protein cá thành amino acid; (3)↔(c) VSV phân giải hữu cơ trong rác thải; (4)↔(d) VSV/virus bất hoạt kích thích miễn dịch.",
    tag: "Trao đổi chất VSV",
    difficulty: "medium",
  },
  {
    q: "Penicillin là thuốc kháng sinh được sản xuất từ",
    options: ["xạ khuẩn.", "vi tảo.", "nấm men.", "nấm mốc."],
    answer: 3,
    explain: "Penicillin được Fleming phát hiện năm 1928 từ nấm mốc Penicillium notatum (sản xuất công nghiệp dùng P. chrysogenum).",
    tag: "Trao đổi chất VSV",
    difficulty: "easy",
  },
  {
    q: "Cho các hướng phát triển sau: (1) Chỉnh sửa, tạo đột biến định hướng các gene trong tế bào vi sinh vật; (2) Tìm kiếm và khai thác các nguồn gene vi sinh vật; (3) Thiết lập các hệ thống lên men lớn, tự động, liên tục và đồng bộ với công nghệ thu hồi; (4) Xây dựng các giải pháp phân tích vi sinh vật tự động trong công nghiệp, nông nghiệp và xử lí môi trường. Số hướng phát triển của công nghệ vi sinh vật trong tương lai là",
    options: ["1.", "2.", "3.", "4."],
    answer: 3,
    explain: "Cả 4 đều là hướng phát triển tương lai: chỉnh sửa gene (CRISPR), khai thác gene tự nhiên, tự động hóa lên men, và ứng dụng phân tích VSV tự động.",
    tag: "Trao đổi chất VSV",
    difficulty: "medium",
  },
  {
    q: "Enzyme Taq-DNA polymerase chịu được nhiệt độ cao, dùng trong phản ứng PCR để nhân lên các đoạn DNA dùng chẩn đoán bệnh được tách chiết từ",
    options: ["nấm mốc sinh trưởng ở nơi ẩm ướt.", "vi khuẩn sống ở suối nước nóng.", "kí sinh trùng trong cơ thể người.", "nấm men sống trên vỏ hoa quả."],
    answer: 1,
    explain: "Taq polymerase tách từ Thermus aquaticus – vi khuẩn ưa nhiệt sống ở suối nước nóng (~70–75°C), nên enzyme không bị biến tính ở 94°C trong chu trình PCR.",
    tag: "Sinh trưởng & Virus",
    difficulty: "medium",
  },
  {
    q: "Streptococcus mutans là nguyên nhân chính gây sâu răng. Nó nằm trong túi kẹo cao su, không có hoạt tính catalase và có thể phát triển trong điều kiện có không khí. Vi khuẩn này là loại nào?",
    options: ["kị khí tùy chọn (phát triển tốt hơn khi có oxygen nhưng có thể sinh trưởng khi không có oxygen).", "bắt buộc hiếu khí (chỉ phát triển khi có oxygen).", "kị khí bắt buộc (chỉ phát triển khi không có oxy).", "kị khí hiếu khí (phát triển tốt hơn khi không có oxygen nhưng có thể sinh trưởng khi có oxy)."],
    answer: 0,
    explain: "S. mutans phát triển được cả khi có lẫn không có O₂ → kị khí tùy chọn. Không có catalase nhưng không phải kị khí bắt buộc vì vẫn sống được khi có không khí.",
    tag: "Sinh trưởng & Virus",
    difficulty: "hard",
  },
  {
    q: "Vi khuẩn phát triển trong hệ thống thoát nước của mỏ ở pH = 1–2 có lẽ là vi khuẩn",
    options: ["ưa kiềm.", "ưa acid.", "trung tính.", "ưa nhiệt."],
    answer: 1,
    explain: "pH = 1–2 là môi trường cực acid. Vi khuẩn sống được ở đây là vi khuẩn ưa acid (acidophile), ví dụ Acidithiobacillus thường gặp trong nước thải mỏ chứa acid sulfuric.",
    tag: "Sinh trưởng & Virus",
    difficulty: "medium",
  },
  {
    q: "Vi khuẩn được phân lập từ hồ Natron, độ pH của nước gần bằng 10, là vi khuẩn nào sau đây?",
    options: ["ưa kiềm.", "ưa acid.", "trung tính.", "ưa nhiệt."],
    answer: 0,
    explain: "Hồ Natron có pH ~10 do chứa nhiều natri cacbonat. Vi khuẩn sống được ở đây là vi khuẩn ưa kiềm (alkaliphile), ví dụ Natronobacterium.",
    tag: "Sinh trưởng & Virus",
    difficulty: "medium",
  },
  {
    q: "Một hộp đựng súp đã bị lãng quên trong tủ lạnh và bị nhiễm khuẩn. Các vi khuẩn gây hư hỏng súp có thể là loại nào sau đây?",
    options: ["Vi khuẩn chịu nhiệt độ cao.", "Vi khuẩn ưa nhiệt độ ấm.", "Vi khuẩn ưa lạnh không bắt buộc.", "Vi khuẩn siêu nhiệt."],
    answer: 2,
    explain: "Tủ lạnh duy trì 2–5°C. Vi khuẩn gây hỏng thức ăn trong điều kiện này là vi khuẩn ưa lạnh không bắt buộc (psychrotroph) – phát triển được ở 0–7°C, ví dụ Pseudomonas, Listeria.",
    tag: "Sinh trưởng & Virus",
    difficulty: "medium",
  },
  {
    q: "Hầu hết các kháng sinh đã biết được sản xuất bởi loại vi sinh vật nào?",
    options: ["Nấm.", "Vi khuẩn Gram dương.", "Xạ khuẩn.", "Vi khuẩn Gram âm."],
    answer: 2,
    explain: "Xạ khuẩn (đặc biệt Streptomyces) sản xuất hơn 70–80% kháng sinh đã biết. Nấm (Penicillium) phát hiện đầu tiên nhưng về số lượng xạ khuẩn vượt trội.",
    tag: "Trao đổi chất VSV",
    difficulty: "easy",
  },
  {
    q: "Tế bào vi khuẩn có ba hình dạng chính: Hình cầu (cocci); Hình que hay gọi là trực khuẩn (bacilli); Hình xoắn ốc (spirilli). Quan sát hình và chọn đáp án KHÔNG đúng.",
    options: ["Streptococcus mutans là nhóm liên cầu khuẩn.", "Treponema pallidum là vi khuẩn hình chóp nón.", "Clostridium botulinum là trực khuẩn.", "Vi khuẩn hình cầu có khả năng chống khô tốt hơn hình que."],
    answer: 1,
    explain: "Treponema pallidum có hình xoắn ốc (spirochete), KHÔNG phải hình chóp nón. Các đáp án còn lại đều đúng.",
    tag: "Dinh dưỡng VSV",
    difficulty: "medium",
  }
];
