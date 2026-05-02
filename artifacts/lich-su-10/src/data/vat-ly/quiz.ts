export interface VatLyQuestion {
  q: string;
  options: string[];
  answer: number;
  explain: string;
  tag: string;
}

export const vatLyQuizData: VatLyQuestion[] = [
  // ── ĐỘNG LƯỢNG & XUNG LƯỢNG ──────────────────────────────────────────────
  {
    q: "Xung lượng của lực được tính bằng:",
    options: [
      "Tích của khối lượng và vận tốc",
      "Tích của lực và khoảng thời gian lực tác dụng",
      "Tích của lực và quãng đường",
      "Đạo hàm của động lượng theo thời gian",
    ],
    answer: 1,
    explain:
      "Xung lượng J = F·Δt, là tích của lực F và thời gian Δt lực tác dụng lên vật.",
    tag: "Động lượng",
  },
  {
    q: "Động lượng của một vật là đại lượng:",
    options: [
      "Vô hướng, bằng tích khối lượng và tốc độ",
      "Vô hướng, bằng tích khối lượng và động năng",
      "Vectơ, cùng chiều với vectơ vận tốc",
      "Vectơ, ngược chiều với vectơ vận tốc",
    ],
    answer: 2,
    explain:
      "Động lượng p = mv là đại lượng vectơ có cùng chiều với vectơ vận tốc v.",
    tag: "Động lượng",
  },
  {
    q: "Đơn vị của động lượng là:",
    options: ["N", "N·s", "J", "kg·m²/s"],
    answer: 1,
    explain:
      "Động lượng p = mv, đơn vị là kg·m/s = N·s (vì 1 N = 1 kg·m/s²).",
    tag: "Động lượng",
  },
  {
    q: "Phát biểu nào sau đây về định luật bảo toàn động lượng là ĐÚNG?",
    options: [
      "Tổng động lượng của hệ bảo toàn trong mọi trường hợp",
      "Tổng động lượng của hệ kín được bảo toàn",
      "Động lượng của mỗi vật trong hệ luôn bảo toàn",
      "Tổng động lượng bảo toàn khi các ngoại lực bằng nhau",
    ],
    answer: 1,
    explain:
      "Định luật bảo toàn động lượng chỉ áp dụng cho hệ kín (hệ không có ngoại lực, hoặc tổng ngoại lực bằng 0).",
    tag: "Động lượng",
  },
  {
    q: "Hệ kín là hệ thỏa mãn điều kiện nào sau đây?",
    options: [
      "Chỉ có nội lực, không có ngoại lực",
      "Tổng ngoại lực tác dụng lên hệ bằng 0",
      "Ngoại lực rất nhỏ so với nội lực nên có thể bỏ qua",
      "Cả ba điều kiện trên đều đúng",
    ],
    answer: 3,
    explain:
      "Hệ kín thỏa mãn một trong ba điều kiện: chỉ có nội lực; tổng ngoại lực = 0; hoặc ngoại lực rất nhỏ so với nội lực.",
    tag: "Động lượng",
  },
  {
    q: "Dạng khác của định luật II Newton theo động lượng là:",
    options: [
      "F = ma",
      "F·t = Δp (độ biến thiên động lượng)",
      "W = F·s",
      "p = mv²/2",
    ],
    answer: 1,
    explain:
      "F·Δt = Δp, tức là xung lượng của hợp lực bằng độ biến thiên động lượng của vật.",
    tag: "Động lượng",
  },
  {
    q: "Hai vật có khối lượng m₁ = m₂ chuyển động ngược chiều nhau với cùng tốc độ v. Tổng động lượng của hệ là:",
    options: ["2mv", "mv", "0", "mv/2"],
    answer: 2,
    explain:
      "Hai vật ngược chiều: p₁ = mv, p₂ = -mv → p_hệ = mv + (-mv) = 0.",
    tag: "Động lượng",
  },
  {
    q: "Trong va chạm mềm (hai vật dính vào nhau sau va chạm), đại lượng nào được bảo toàn?",
    options: [
      "Động năng",
      "Động lượng",
      "Cả động năng và động lượng",
      "Không có đại lượng nào bảo toàn",
    ],
    answer: 1,
    explain:
      "Trong va chạm mềm, động lượng bảo toàn nhưng động năng không bảo toàn (một phần chuyển thành nhiệt năng, âm thanh...).",
    tag: "Động lượng",
  },
  {
    q: "Nguyên lý hoạt động của tên lửa dựa trên:",
    options: [
      "Định luật bảo toàn năng lượng",
      "Định luật bảo toàn động lượng",
      "Định luật vạn vật hấp dẫn",
      "Định luật bảo toàn cơ năng",
    ],
    answer: 1,
    explain:
      "Tên lửa phụt khí ra phía sau, theo bảo toàn động lượng, tên lửa tiến về phía trước.",
    tag: "Động lượng",
  },
  {
    q: "Hai vật chuyển động cùng chiều, p₁ cùng chiều p₂. Tổng động lượng hệ bằng:",
    options: [
      "p₁ - p₂",
      "p₁ + p₂",
      "√(p₁² + p₂²)",
      "√(p₁² + p₂² + 2p₁p₂cosα)",
    ],
    answer: 1,
    explain:
      "Khi p₁ và p₂ cùng phương, cùng chiều thì p_hệ = p₁ + p₂.",
    tag: "Động lượng",
  },
  {
    q: "Hai vật có p₁ vuông góc với p₂. Độ lớn tổng động lượng hệ bằng:",
    options: [
      "p₁ + p₂",
      "|p₁ - p₂|",
      "√(p₁² + p₂²)",
      "(p₁ + p₂)/2",
    ],
    answer: 2,
    explain:
      "Khi p₁ ⊥ p₂, theo định lý Pythagore: p_hệ = √(p₁² + p₂²).",
    tag: "Động lượng",
  },
  {
    q: "Một người đứng trên xe trượt băng ném quả bóng về phía trước. Xe sẽ:",
    options: [
      "Đứng yên vì ngoại lực bằng 0",
      "Chuyển động cùng chiều với bóng",
      "Chuyển động ngược chiều với bóng",
      "Chuyển động vuông góc với bóng",
    ],
    answer: 2,
    explain:
      "Theo bảo toàn động lượng, người + xe chuyển động ngược chiều bóng để tổng động lượng hệ bằng 0 (ban đầu đứng yên).",
    tag: "Động lượng",
  },

  // ── ĐỘNG NĂNG – THẾ NĂNG – CƠ NĂNG ──────────────────────────────────────
  {
    q: "Công thức tính động năng của một vật là:",
    options: ["Wđ = mv", "Wđ = mv²/2", "Wđ = mgh", "Wđ = p²/m"],
    answer: 1,
    explain: "Động năng Wđ = ½mv², trong đó m là khối lượng, v là vận tốc.",
    tag: "Năng lượng",
  },
  {
    q: "Đơn vị của động năng, thế năng và cơ năng là:",
    options: ["N·s", "N·m = J", "kg·m/s", "W"],
    answer: 1,
    explain:
      "Năng lượng đo bằng Jun (J = N·m = kg·m²/s²).",
    tag: "Năng lượng",
  },
  {
    q: "Thế năng trọng trường của vật tại độ cao h được tính bằng:",
    options: ["Wt = mv²", "Wt = mgh", "Wt = ½mgh", "Wt = mgv"],
    answer: 1,
    explain:
      "Thế năng trọng trường Wt = mgh, phụ thuộc vào khối lượng, gia tốc trọng trường và độ cao so với mốc thế năng.",
    tag: "Năng lượng",
  },
  {
    q: "Cơ năng của vật là:",
    options: [
      "Tổng động năng và nhiệt năng",
      "Tổng động năng và thế năng",
      "Hiệu giữa động năng và thế năng",
      "Tích của động năng và thế năng",
    ],
    answer: 1,
    explain: "Cơ năng W = Wđ + Wt = ½mv² + mgh.",
    tag: "Năng lượng",
  },
  {
    q: "Định luật bảo toàn cơ năng áp dụng khi:",
    options: [
      "Vật chỉ chịu tác dụng của lực hấp dẫn (lực bảo toàn)",
      "Vật chịu tác dụng của mọi lực",
      "Vật chuyển động nhanh",
      "Vật chuyển động chậm",
    ],
    answer: 0,
    explain:
      "Cơ năng bảo toàn khi vật chỉ chịu tác dụng của lực bảo toàn (lực hấp dẫn, lực đàn hồi), không có lực ma sát hay lực cản.",
    tag: "Năng lượng",
  },
  {
    q: "Khi vật rơi tự do (bỏ qua không khí), cơ năng của vật:",
    options: [
      "Tăng dần",
      "Giảm dần",
      "Bảo toàn (không đổi)",
      "Bằng 0",
    ],
    answer: 2,
    explain:
      "Rơi tự do chỉ chịu trọng lực (lực bảo toàn), cơ năng được bảo toàn: khi Wt giảm thì Wđ tăng và ngược lại.",
    tag: "Năng lượng",
  },
  {
    q: "Mối liên hệ giữa động lượng p và động năng Wđ là:",
    options: [
      "Wđ = p²/(2m)",
      "Wđ = 2p²/m",
      "Wđ = p·m",
      "Wđ = p/(2m)",
    ],
    answer: 0,
    explain:
      "Wđ = ½mv² = (mv)²/(2m) = p²/(2m). Quan hệ hữu ích khi biết p để tính Wđ.",
    tag: "Năng lượng",
  },
  {
    q: "Hiệu suất H của một máy được tính bằng:",
    options: [
      "H = A_toàn_phần / A_có_ích",
      "H = A_có_ích / A_toàn_phần",
      "H = A_hao_phí / A_toàn_phần",
      "H = A_toàn_phần × A_có_ích",
    ],
    answer: 1,
    explain:
      "H = A_có_ích / A_toàn_phần (× 100%). Hiệu suất luôn nhỏ hơn 1 (hay 100%) vì luôn có hao phí.",
    tag: "Năng lượng",
  },
  {
    q: "Một vật được ném lên thẳng đứng. Tại điểm cao nhất, nhận xét nào ĐÚNG?",
    options: [
      "Động năng cực đại, thế năng bằng 0",
      "Động năng bằng 0, thế năng cực đại",
      "Cả động năng và thế năng đều cực đại",
      "Cơ năng bằng 0",
    ],
    answer: 1,
    explain:
      "Tại điểm cao nhất, vật dừng lại (v = 0) nên Wđ = 0, thế năng đạt cực đại. Cơ năng vẫn bảo toàn.",
    tag: "Năng lượng",
  },
  {
    q: "Vật trượt xuống mặt phẳng nghiêng có ma sát. Cơ năng của vật:",
    options: [
      "Bảo toàn",
      "Tăng lên",
      "Giảm xuống (do ma sát sinh nhiệt)",
      "Không xác định",
    ],
    answer: 2,
    explain:
      "Khi có lực ma sát (lực không bảo toàn), cơ năng bị giảm. Phần giảm chuyển thành nhiệt năng.",
    tag: "Năng lượng",
  },
  {
    q: "Động năng của vật tăng khi:",
    options: [
      "Hợp lực tác dụng lên vật bằng 0",
      "Hợp lực tác dụng lên vật sinh công dương",
      "Hợp lực tác dụng lên vật sinh công âm",
      "Vật chuyển động thẳng đều",
    ],
    answer: 1,
    explain:
      "Theo định lý động năng: ΔWđ = A_hợp_lực. Khi A > 0, Wđ tăng; khi A < 0, Wđ giảm.",
    tag: "Năng lượng",
  },

  // ── CHUYỂN ĐỘNG TRÒN ĐỀU ────────────────────────────────────────────────
  {
    q: "Chuyển động tròn đều là chuyển động:",
    options: [
      "Có quỹ đạo tròn và tốc độ thay đổi đều",
      "Có quỹ đạo tròn và tốc độ như nhau trên mọi cung tròn",
      "Có gia tốc bằng 0",
      "Có vận tốc không đổi về phương và chiều",
    ],
    answer: 1,
    explain:
      "Chuyển động tròn đều: quỹ đạo tròn, tốc độ (độ lớn vận tốc) không đổi trên mọi cung. Tuy nhiên phương vận tốc luôn thay đổi.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Trong chuyển động tròn đều, vectơ vận tốc có đặc điểm:",
    options: [
      "Không đổi cả hướng và độ lớn",
      "Luôn thay đổi hướng, độ lớn không đổi",
      "Luôn hướng vào tâm",
      "Luôn hướng ra xa tâm",
    ],
    answer: 1,
    explain:
      "Vận tốc có phương tiếp tuyến với đường tròn, nên hướng liên tục thay đổi. Độ lớn (tốc độ) không đổi.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Trong chuyển động tròn đều, gia tốc hướng tâm:",
    options: [
      "Có phương tiếp tuyến với quỹ đạo",
      "Luôn hướng vào tâm và vuông góc với vận tốc",
      "Bằng 0 vì tốc độ không đổi",
      "Cùng chiều với vận tốc",
    ],
    answer: 1,
    explain:
      "Gia tốc hướng tâm luôn hướng vào tâm, vuông góc với vectơ vận tốc, đặc trưng cho sự thay đổi phương của vận tốc.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Chu kì T trong chuyển động tròn đều là:",
    options: [
      "Số vòng vật quay được trong 1 giây",
      "Thời gian vật quay được một vòng",
      "Tốc độ góc của vật",
      "Bán kính quỹ đạo",
    ],
    answer: 1,
    explain: "Chu kì T là thời gian để vật quay hết một vòng (đơn vị: giây).",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Tần số f trong chuyển động tròn đều là:",
    options: [
      "Thời gian quay 1 vòng",
      "Số vòng quay trong 1 giây",
      "Vận tốc dài của vật",
      "Góc quay trong 1 giây",
    ],
    answer: 1,
    explain:
      "Tần số f là số vòng quay trong 1 giây, đơn vị Hz (vòng/giây). f = 1/T.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Tốc độ góc ω có đơn vị là:",
    options: ["m/s", "vòng/phút", "rad/s", "Hz"],
    answer: 2,
    explain:
      "Tốc độ góc ω = Δφ/Δt đo bằng rad/s (radian trên giây).",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Mối liên hệ giữa tốc độ dài v và tốc độ góc ω là:",
    options: ["v = ω/R", "v = ωR", "v = ω²R", "v = ω/R²"],
    answer: 1,
    explain:
      "v = ωR, trong đó R là bán kính quỹ đạo. Vật càng xa tâm, tốc độ dài càng lớn khi ω như nhau.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Công thức tính gia tốc hướng tâm a_ht là:",
    options: [
      "a_ht = v²/R = ω²R",
      "a_ht = vR",
      "a_ht = v/R",
      "a_ht = ωv",
    ],
    answer: 0,
    explain:
      "a_ht = v²/R = ω²R. Hai biểu thức tương đương nhau vì v = ωR.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Lực hướng tâm là:",
    options: [
      "Một loại lực mới ngoài các lực đã học",
      "Lực hoặc hợp lực tác dụng lên vật gây ra gia tốc hướng tâm",
      "Luôn là lực hấp dẫn",
      "Luôn là lực ma sát",
    ],
    answer: 1,
    explain:
      "Lực hướng tâm không phải loại lực mới mà là vai trò của các lực đã biết (hấp dẫn, ma sát, căng dây...) khi gây ra gia tốc hướng tâm.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Công thức lực hướng tâm F_ht là:",
    options: [
      "F_ht = mv²/R = mω²R",
      "F_ht = mv/R",
      "F_ht = mωR",
      "F_ht = mv²R",
    ],
    answer: 0,
    explain:
      "F_ht = m·a_ht = mv²/R = mω²R. Đây là hợp lực hướng vào tâm quỹ đạo.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Xe đi qua đỉnh cầu cong vồng lên (điểm cao nhất). Lực nâng N của cầu lên xe tính theo lực hướng tâm là:",
    options: [
      "N = P + mv²/R",
      "N = P - mv²/R (N < P)",
      "N = mv²/R",
      "N = P",
    ],
    answer: 1,
    explain:
      "Tại đỉnh cầu vồng lên: P - N = mv²/R (hướng tâm hướng xuống) → N = P - mv²/R. Áp lực lên cầu nhỏ hơn trọng lượng.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Xe đi qua đáy cầu cong võng xuống (điểm thấp nhất). Lực nâng N của cầu lên xe tính theo lực hướng tâm là:",
    options: [
      "N = P - mv²/R",
      "N = P + mv²/R (N > P)",
      "N = mv²/R",
      "N = 0",
    ],
    answer: 1,
    explain:
      "Tại đáy cầu võng: N - P = mv²/R (hướng tâm hướng lên) → N = P + mv²/R. Áp lực lên cầu lớn hơn trọng lượng.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Chu kì của đầu kim giây đồng hồ là:",
    options: ["1 phút = 60 s", "12 giờ", "1 giờ = 3600 s", "24 giờ"],
    answer: 0,
    explain:
      "Kim giây quay 1 vòng trong 60 giây → T = 60 s.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Trong chuyển động tròn đều, vật có công của lực hướng tâm bằng bao nhiêu?",
    options: [
      "Lớn hơn 0",
      "Nhỏ hơn 0",
      "Bằng 0 (lực hướng tâm vuông góc với vận tốc)",
      "Bằng mv²/R",
    ],
    answer: 2,
    explain:
      "Lực hướng tâm luôn vuông góc với vận tốc nên công của nó luôn bằng 0.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Mối quan hệ giữa tốc độ góc ω và chu kì T là:",
    options: ["ω = T/2π", "ω = 2π/T", "ω = T·f", "ω = 2πT"],
    answer: 1,
    explain:
      "Trong một chu kì T, vật quay góc 2π rad → ω = 2π/T = 2πf.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Trái Đất quay quanh Mặt Trời với chu kì xấp xỉ:",
    options: ["1 ngày", "1 tháng", "1 năm ≈ 365 ngày", "10 năm"],
    answer: 2,
    explain:
      "Trái Đất quay quanh Mặt Trời với chu kì T ≈ 365 ngày (1 năm).",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Một vật quay trên dây trong mặt phẳng thẳng đứng. Tại điểm cao nhất, lực căng dây T được tính:",
    options: [
      "T = P + mv²/R",
      "T = mv²/R - P (T = mv²/R - mg)",
      "T = P = mg",
      "T = mv²/R + P",
    ],
    answer: 1,
    explain:
      "Tại điểm cao nhất, cả T và P đều hướng vào tâm: T + P = mv²/R → T = mv²/R - mg. Điều kiện để dây không chùng: T ≥ 0 → v ≥ √(gR).",
    tag: "Chuyển động tròn đều",
  },

  // ── CHIẾN LƯỢC LÀM BÀI – LÝ THUYẾT THÊM ──────────────────────────────
  {
    q: "Khi giải bài toán chuyển động tròn, chiều dương thường được chọn là:",
    options: [
      "Chiều dương tùy ý, không ảnh hưởng kết quả",
      "Hướng vào tâm (hướng của lực và gia tốc hướng tâm)",
      "Hướng ra xa tâm",
      "Chiều chuyển động",
    ],
    answer: 1,
    explain:
      "Trong bài toán chuyển động tròn, nên chọn chiều dương hướng vào tâm để lực hướng tâm mang dấu dương, giúp thiết lập phương trình rõ ràng.",
    tag: "Chiến lược làm bài",
  },
  {
    q: "Trong bài toán xe đi trên cầu vồng lên hỏi 'áp lực lên cầu lớn nhất', điều kiện để áp lực lớn nhất là:",
    options: [
      "Xe đi nhanh nhất",
      "Xe đi chậm nhất (v = 0 thì N = P = mg)",
      "Xe ở giữa cầu",
      "Xe ở cuối cầu",
    ],
    answer: 1,
    explain:
      "Tại đỉnh cầu vồng: N = mg - mv²/R. N lớn nhất khi v nhỏ nhất (v → 0): N_max ≈ mg. Ngược lại, khi v lớn, N giảm và có thể = 0.",
    tag: "Chiến lược làm bài",
  },
  {
    q: "Khi giải bài toán va chạm (không phải va chạm đàn hồi hoàn toàn), đại lượng cần ưu tiên bảo toàn là:",
    options: [
      "Động năng",
      "Động lượng (vì hệ gần kín trong thời gian va chạm ngắn)",
      "Cơ năng",
      "Thế năng",
    ],
    answer: 1,
    explain:
      "Trong va chạm, thời gian rất ngắn nên nội lực >> ngoại lực → hệ coi là kín → bảo toàn động lượng. Động năng chỉ bảo toàn trong va chạm đàn hồi hoàn toàn.",
    tag: "Chiến lược làm bài",
  },
  {
    q: "Bài toán vật trượt không ma sát từ độ cao h xuống đáy, hỏi vận tốc ở đáy. Nên dùng phương pháp nào?",
    options: [
      "Phương trình chuyển động (v² = v₀² + 2as)",
      "Bảo toàn cơ năng: mgh = ½mv² → v = √(2gh)",
      "Định lý động năng",
      "Cả B và C đều đúng",
    ],
    answer: 3,
    explain:
      "Không có ma sát → bảo toàn cơ năng rất tiện: v = √(2gh). Định lý động năng cũng cho kết quả tương tự vì A_hợp_lực = mgh = ΔWđ.",
    tag: "Chiến lược làm bài",
  },
  {
    q: "Để xe đi qua đỉnh cầu vồng mà không bị 'bay' khỏi mặt đường, điều kiện là:",
    options: [
      "N ≥ 0, tức là v ≤ √(gR)",
      "N ≥ mg",
      "v ≥ √(gR)",
      "Lực hướng tâm bằng 0",
    ],
    answer: 0,
    explain:
      "N = mg - mv²/R ≥ 0 → v ≤ √(gR). Nếu v > √(gR), xe rời mặt đường (N âm, không thể xảy ra thực tế).",
    tag: "Chiến lược làm bài",
  },
  {
    q: "Điều kiện để vật quay tròn trên dây không bị đứt dây là:",
    options: [
      "Tốc độ quay thật lớn",
      "Lực căng dây không vượt quá lực căng tối đa",
      "Lực hướng tâm bằng 0",
      "Vật phải ở mặt phẳng nằm ngang",
    ],
    answer: 1,
    explain:
      "Dây đứt khi lực căng T vượt quá giới hạn chịu lực T_max. Điểm nguy hiểm nhất (T lớn nhất) là điểm thấp nhất trong quỹ đạo thẳng đứng.",
    tag: "Chiến lược làm bài",
  },
  {
    q: "Trong bài toán về động lượng, nên chọn chiều dương như thế nào?",
    options: [
      "Chiều dương luôn là chiều chuyển động của vật 1",
      "Chiều dương là chiều chuyển động của vật có khối lượng lớn hơn",
      "Tùy ý, thường chọn chiều chuyển động ban đầu làm chiều dương",
      "Chiều dương luôn là chiều từ trái sang phải",
    ],
    answer: 2,
    explain:
      "Nên chọn chiều dương theo chiều chuyển động ban đầu của một vật (thường là vật 1 hoặc vật chuyển động trước). Vật ngược chiều sẽ mang giá trị âm.",
    tag: "Chiến lược làm bài",
  },
  {
    q: "Trong bài toán 'người nhảy khỏi thuyền', ta áp dụng:",
    options: [
      "Bảo toàn cơ năng: năng lượng trước = sau",
      "Bảo toàn động lượng: p_hệ = 0 (ban đầu đứng yên)",
      "Định lý động năng",
      "Định luật II Newton",
    ],
    answer: 1,
    explain:
      "Người + thuyền ban đầu đứng yên, p_hệ = 0. Khi người nhảy với vận tốc v₁ về một phía, thuyền chuyển động ngược lại để tổng động lượng = 0.",
    tag: "Chiến lược làm bài",
  },

  // ── CÂU HỎI TỔNG HỢP ───────────────────────────────────────────────────
  {
    q: "Một vật đang chuyển động tròn đều. Nếu tăng tốc độ lên 2 lần (giữ nguyên bán kính), lực hướng tâm cần thiết thay đổi như thế nào?",
    options: [
      "Tăng 2 lần",
      "Tăng 4 lần",
      "Giảm 2 lần",
      "Không đổi",
    ],
    answer: 1,
    explain:
      "F_ht = mv²/R. Khi v tăng 2 lần, F_ht tăng v² = 4 lần. (F_ht tỉ lệ bình phương tốc độ)",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Hai vật A và B có cùng động năng. Khối lượng m_A = 4m_B. So sánh động lượng:",
    options: [
      "p_A = p_B",
      "p_A = 2p_B",
      "p_A = 4p_B",
      "p_B = 2p_A",
    ],
    answer: 1,
    explain:
      "Wđ = p²/(2m) → p = √(2mWđ). Vì Wđ bằng nhau: p_A/p_B = √(m_A/m_B) = √4 = 2. Vật nặng hơn có động lượng lớn hơn.",
    tag: "Năng lượng",
  },
  {
    q: "Điều nào sau đây KHÔNG phải đặc điểm của chuyển động tròn đều?",
    options: [
      "Tốc độ dài không đổi",
      "Tốc độ góc không đổi",
      "Vectơ vận tốc không đổi",
      "Gia tốc hướng tâm không đổi về độ lớn",
    ],
    answer: 2,
    explain:
      "Vectơ vận tốc liên tục thay đổi phương (tiếp tuyến với đường tròn) dù độ lớn không đổi. Đây chính là lý do có gia tốc hướng tâm.",
    tag: "Chuyển động tròn đều",
  },
  {
    q: "Đơn vị nào sau đây KHÔNG phải đơn vị của xung lượng?",
    options: ["N·s", "kg·m/s", "J·s/m", "J"],
    answer: 3,
    explain:
      "Xung lượng J = F·Δt có đơn vị N·s = kg·m/s = (kg·m/s²)·s. Đơn vị J (Jun) là đơn vị năng lượng, không phải xung lượng.",
    tag: "Động lượng",
  },
  {
    q: "Cơ năng của vật được bảo toàn trong trường hợp nào sau đây?",
    options: [
      "Vật trượt có ma sát trên mặt phẳng nghiêng",
      "Vật rơi trong không khí (có lực cản)",
      "Vật dao động con lắc đơn không có ma sát",
      "Vật bị ném ngang trong không khí",
    ],
    answer: 2,
    explain:
      "Con lắc đơn không ma sát chỉ chịu lực hấp dẫn và lực căng dây (vuông góc chuyển động, không sinh công) → cơ năng bảo toàn.",
    tag: "Năng lượng",
  },
];
