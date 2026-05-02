import type { Section } from "@/data/sinh-hoc/types";

export const vatLySections: Section[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // I. ĐỘNG LƯỢNG
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "dong-luong",
    icon: "💥",
    title: "I. ĐỘNG LƯỢNG & BẢO TOÀN ĐỘNG LƯỢNG",
    color: "#8B1A1A",
    accent: "#E74C3C",
    content: [
      {
        subtitle: "A. Xung lượng và Động lượng",
        type: "formulas",
        items: [
          {
            label: "Xung lượng của lực",
            formula: "J = F · Δt    (đơn vị: N·s)",
          },
          {
            label: "Động lượng",
            formula: "p = m·v    (vectơ, cùng chiều v, đơn vị: kg·m/s = N·s)",
          },
          {
            label: "Dạng khác Định luật II Newton",
            formula: "F·Δt = Δp = p₂ − p₁  →  F = Δp/Δt",
          },
          {
            label: "Quan hệ động lượng – động năng",
            formula: "Wđ = p²/(2m)  →  p = √(2m·Wđ)",
          },
        ],
      },
      {
        subtitle: "B. Tổng hợp động lượng của hệ",
        type: "table",
        headers: ["Trường hợp", "Công thức tính p_hệ"],
        rows: [
          ["p₁ cùng chiều p₂", "p_hệ = p₁ + p₂"],
          ["p₁ ngược chiều p₂", "p_hệ = |p₁ − p₂|"],
          ["p₁ ⊥ p₂", "p_hệ = √(p₁² + p₂²)"],
          ["p₁ hợp p₂ góc α", "p_hệ = √(p₁² + p₂² + 2p₁p₂cosα)"],
        ],
      },
      {
        subtitle: "C. Hệ kín – Định luật bảo toàn động lượng",
        type: "list",
        items: [
          "Hệ kín: Chỉ có nội lực, KHÔNG có ngoại lực",
          "Hệ kín: Có ngoại lực nhưng tổng ngoại lực = 0",
          "Hệ kín: Ngoại lực rất nhỏ so với nội lực (va chạm ngắn)",
          "Định luật: Trong hệ kín, tổng động lượng được bảo toàn: p_trước = p_sau",
          "Ví dụ hệ kín: súng – đạn khi bắn, người nhảy khỏi thuyền, tên lửa phóng",
        ],
      },
      {
        subtitle: "D. Các dạng va chạm",
        type: "compare",
        items: [
          {
            title: "Va chạm mềm (dính nhau)",
            points: [
              "Sau va chạm hai vật dính nhau, cùng vận tốc V",
              "m₁v₁ + m₂v₂ = (m₁+m₂)V",
              "Động lượng bảo toàn",
              "Động năng KHÔNG bảo toàn (bị hao phí)",
            ],
          },
          {
            title: "Va chạm đàn hồi hoàn toàn",
            points: [
              "Hai vật bật ra với vận tốc khác nhau",
              "Cả động lượng và động năng đều bảo toàn",
              "Ít gặp trong thực tế (ví dụ: bi-a, nguyên tử)",
            ],
          },
        ],
      },
      {
        subtitle: "E. Chiến lược giải bài toán động lượng",
        type: "tips",
        items: [
          "Chọn chiều dương: thường chọn chiều chuyển động ban đầu của vật 1 (hoặc vật đang chuyển động trước).",
          "Vật chuyển động ngược chiều dương → vận tốc mang dấu âm.",
          "Lập phương trình bảo toàn động lượng: p_trước = p_sau (có dấu vectơ).",
          "Kiểm tra: nếu bài hỏi 'vật 2 chuyển động theo chiều nào?' → xem dấu kết quả.",
          "Bài toán tên lửa / súng – đạn: hệ ban đầu đứng yên nên p_hệ = 0 → m₁v₁ = −m₂v₂.",
          "Phân biệt: Va chạm ngắn → bảo toàn động lượng; Không ma sát → bảo toàn cơ năng.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // II. ĐỘNG NĂNG – THẾ NĂNG – CƠ NĂNG
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "nang-luong",
    icon: "⚡",
    title: "II. ĐỘNG NĂNG – THẾ NĂNG – CƠ NĂNG – HIỆU SUẤT",
    color: "#7D5A1E",
    accent: "#F39C12",
    content: [
      {
        subtitle: "A. Các công thức cơ bản",
        type: "formulas",
        items: [
          {
            label: "Động năng (Kinetic Energy)",
            formula: "Wđ = ½mv²   (J) — phụ thuộc tốc độ và khối lượng",
          },
          {
            label: "Thế năng trọng trường (Potential Energy)",
            formula: "Wt = mgh   (J) — phụ thuộc vào độ cao so với mốc",
          },
          {
            label: "Cơ năng (Mechanical Energy)",
            formula: "W = Wđ + Wt = ½mv² + mgh   (J)",
          },
          {
            label: "Định lý động năng",
            formula: "A_hợp_lực = ΔWđ = Wđ₂ − Wđ₁",
          },
          {
            label: "Hiệu suất",
            formula: "H = A_có_ích / A_toàn_phần (× 100%)   — H < 1",
          },
        ],
      },
      {
        subtitle: "B. Định luật bảo toàn cơ năng",
        type: "list",
        items: [
          "Điều kiện: Vật chỉ chịu tác dụng của lực bảo toàn (trọng lực, lực đàn hồi).",
          "Không có ma sát, lực cản → Cơ năng bảo toàn: W = const",
          "Khi Wđ tăng → Wt giảm và ngược lại (chuyển hóa qua lại)",
          "Khi có ma sát: W_sau = W_trước − Q (Q là nhiệt lượng sinh ra do ma sát)",
          "Mốc thế năng: thường chọn tại điểm thấp nhất hoặc mặt đất (Wt = 0)",
        ],
      },
      {
        subtitle: "C. Bảng biến thiên năng lượng trong chuyển động điển hình",
        type: "table",
        headers: ["Chuyển động", "Wđ", "Wt", "W (cơ năng)"],
        rows: [
          ["Rơi tự do (không KK)", "Tăng", "Giảm", "Bảo toàn"],
          ["Ném lên (không KK)", "Giảm rồi tăng", "Tăng rồi giảm", "Bảo toàn"],
          ["Trượt có ma sát", "Giảm", "Giảm", "Giảm (→ nhiệt)"],
          ["Tại đỉnh ném lên", "Bằng 0 (v=0)", "Cực đại", "= Wt_max"],
          ["Con lắc đơn (không MS)", "Biến thiên", "Biến thiên", "Bảo toàn"],
        ],
      },
      {
        subtitle: "D. Chiến lược giải bài toán năng lượng",
        type: "tips",
        items: [
          "Bài không có ma sát → dùng bảo toàn cơ năng: W₁ = W₂ → ½mv₁² + mgh₁ = ½mv₂² + mgh₂.",
          "Chọn mốc thế năng tại điểm thấp nhất để Wt tại đó = 0, đơn giản hóa phương trình.",
          "Bài có ma sát → dùng định lý động năng: A_tổng = ΔWđ; hoặc W₂ = W₁ − |A_ms|.",
          "Bài hỏi vận tốc tại điểm nào đó → từ bảo toàn cơ năng rút v.",
          "Bài hỏi độ cao cực đại → tại điểm cao nhất v = 0 → Wđ = 0 → mgh = ½mv₀².",
          "Phân biệt 'công của trọng lực' và 'thế năng': A_P = mgh₁ − mgh₂ = ΔWt (giảm).",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // III. CHUYỂN ĐỘNG TRÒN ĐỀU
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "chuyen-dong-tron",
    icon: "🔄",
    title: "III. CHUYỂN ĐỘNG TRÒN ĐỀU – LỰC HƯỚNG TÂM",
    color: "#1A4A2E",
    accent: "#2ECC71",
    content: [
      {
        subtitle: "A. Các đại lượng đặc trưng (7 đại lượng)",
        type: "formulas",
        items: [
          {
            label: "Tốc độ dài v (m/s)",
            formula: "v = s/t = 2πR/T = ωR",
          },
          {
            label: "Tốc độ góc ω (rad/s)",
            formula: "ω = Δφ/Δt = 2π/T = 2πf",
          },
          {
            label: "Chu kì T (s) và Tần số f (Hz)",
            formula: "T = 1/f = 2π/ω    |    f = 1/T = ω/(2π)",
          },
          {
            label: "Gia tốc hướng tâm a_ht (m/s²)",
            formula: "a_ht = v²/R = ω²R    [hướng vào tâm, ⊥ vận tốc]",
          },
          {
            label: "Lực hướng tâm F_ht (N)",
            formula: "F_ht = ma_ht = mv²/R = mω²R    [hướng vào tâm]",
          },
        ],
      },
      {
        subtitle: "B. Chu kì của một số chuyển động thực tế",
        type: "table",
        headers: ["Chuyển động", "Chu kì T"],
        rows: [
          ["Kim giây đồng hồ", "60 s"],
          ["Kim phút đồng hồ", "3 600 s (1 giờ)"],
          ["Kim giờ đồng hồ", "43 200 s (12 giờ)"],
          ["Trái Đất quanh Mặt Trời", "≈ 365 ngày ≈ 3,15 × 10⁷ s"],
          ["Mặt Trăng quanh Trái Đất", "≈ 27,3 ngày ≈ 2,36 × 10⁶ s"],
          ["Vật trên mặt đất (so với tâm TĐ)", "≈ 86 400 s (24 giờ)"],
        ],
      },
      {
        subtitle: "C. Đặc điểm vectơ trong chuyển động tròn đều",
        type: "list",
        items: [
          "Vectơ vận tốc: Tiếp tuyến với đường tròn, vuông góc với bán kính R, luôn thay đổi hướng.",
          "Vectơ gia tốc hướng tâm: Luôn hướng vào tâm, vuông góc với v.",
          "v và a_ht luôn VUÔNG GÓC nhau tại mọi điểm.",
          "Độ lớn v (tốc độ) và độ lớn a_ht đều KHÔNG ĐỔI trong chuyển động tròn đều.",
          "Công của lực hướng tâm = 0 (vì lực ⊥ chuyển động).",
          "Chuyển động tròn đều có gia tốc (thay đổi phương) dù tốc độ không đổi.",
        ],
      },
      {
        subtitle: "D. Lực hướng tâm trong các bài toán điển hình",
        type: "steps",
        items: [
          {
            step: "1",
            name: "Xe đi qua đỉnh cầu VỒNG LÊN",
            desc: "Chiều dương: hướng xuống (vào tâm). P − N = mv²/R → N = mg − mv²/R. N < P. Lực nâng CỨU lớn nhất khi v = 0 (N = mg). Điều kiện không bị hất lên: N ≥ 0 → v ≤ √(gR).",
          },
          {
            step: "2",
            name: "Xe đi qua đáy cầu VÕT XUỐNG",
            desc: "Chiều dương: hướng lên (vào tâm). N − P = mv²/R → N = mg + mv²/R. N > P. Áp lực lên cầu LỚN HƠN trọng lượng. Lớn hơn khi xe đi nhanh hơn.",
          },
          {
            step: "3",
            name: "Vật treo dây, quay trong mặt phẳng THẲNG ĐỨNG",
            desc: "Tại điểm CAO NHẤT: T + P = mv²/R → T = mv²/R − mg (T < P). Điều kiện dây không chùng: T ≥ 0 → v ≥ √(gR). Tại điểm thấp nhất: T − P = mv²/R → T = mv²/R + mg (T lớn nhất, dây dễ đứt).",
          },
          {
            step: "4",
            name: "Xe vào khúc cua (mặt phẳng nằm ngang)",
            desc: "Lực hướng tâm do lực ma sát đảm nhận: F_ms = mv²/R. Nếu đường nghiêng góc θ: N·sinθ = mv²/R; N·cosθ = mg → tanθ = v²/(gR).",
          },
        ],
      },
      {
        subtitle: "E. Chiến lược giải bài toán chuyển động tròn",
        type: "tips",
        items: [
          "Luôn chọn chiều dương hướng VÀO TÂM khi viết phương trình lực hướng tâm.",
          "Xác định lực nào đóng vai trò lực hướng tâm (hay thành phần nào): trọng lực, căng dây, phản lực, ma sát...",
          "Tại đỉnh cầu vồng: P − N = mv²/R → áp lực lên cầu N nhỏ nhất khi xe đi nhanh nhất.",
          "Tại đáy cầu võng: N − P = mv²/R → áp lực lên cầu N lớn nhất khi xe đi nhanh nhất.",
          "Điểm 'nguy hiểm' nhất của dây (dễ đứt): điểm THẤP NHẤT vì T = mv²/R + mg.",
          "Điểm dây dễ chùng (T = 0): điểm CAO NHẤT. Điều kiện tối thiểu: v = √(gR).",
          "Nếu đề cho vòng/phút → đổi ra tốc độ góc: ω = 2πn/60 (n: vòng/phút).",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // IV. CHIẾN LƯỢC TỔNG HỢP
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "chien-luoc",
    icon: "🎯",
    title: "IV. CHIẾN LƯỢC TỔNG HỢP & MẸO THI",
    color: "#1A2A5E",
    accent: "#3498DB",
    content: [
      {
        subtitle: "A. Sơ đồ chọn phương pháp giải",
        type: "steps",
        items: [
          {
            step: "①",
            name: "Bài về va chạm / súng – đạn / tên lửa",
            desc: "→ Dùng BẢO TOÀN ĐỘNG LƯỢNG. Hệ kín trong thời gian va chạm ngắn. Chọn chiều dương, viết p_trước = p_sau có dấu.",
          },
          {
            step: "②",
            name: "Bài tính vận tốc từ độ cao (không ma sát)",
            desc: "→ Dùng BẢO TOÀN CƠ NĂNG: ½mv₁² + mgh₁ = ½mv₂² + mgh₂. Chọn mốc thế năng tại điểm thấp nhất.",
          },
          {
            step: "③",
            name: "Bài có ma sát (tính công hoặc nhiệt lượng)",
            desc: "→ Dùng ĐỊNH LÝ ĐỘNG NĂNG: A_tổng = ΔWđ. Hoặc: W_mất = Q (nhiệt do ma sát) = f·s.",
          },
          {
            step: "④",
            name: "Bài xe qua cầu / vật quay tròn",
            desc: "→ Dùng PHƯƠNG TRÌNH LỰC HƯỚNG TÂM. Chiều dương VÀO TÂM. Xác định dấu từng lực, viết ΣF_hướng_vào_tâm = mv²/R.",
          },
          {
            step: "⑤",
            name: "Bài cho tốc độ góc / chu kì / tần số",
            desc: "→ Đổi về tốc độ dài bằng v = ωR, hoặc dùng trực tiếp a_ht = ω²R, F_ht = mω²R.",
          },
        ],
      },
      {
        subtitle: "B. Bảng so sánh các định luật bảo toàn",
        type: "table",
        headers: ["Định luật", "Điều kiện áp dụng", "Đại lượng bảo toàn"],
        rows: [
          ["Bảo toàn động lượng", "Hệ kín (ngoại lực = 0)", "p = Σmᵢvᵢ"],
          ["Bảo toàn cơ năng", "Chỉ lực bảo toàn (không MS)", "W = Wđ + Wt"],
          ["Bảo toàn năng lượng", "Mọi trường hợp", "Tổng mọi dạng năng lượng"],
        ],
      },
      {
        subtitle: "C. Những lỗi hay gặp khi làm bài",
        type: "tips",
        items: [
          "NHẦM DẤU: Quên dấu âm khi vật chuyển động ngược chiều dương trong bảo toàn động lượng.",
          "QUÊN MỐC: Không chọn mốc thế năng dẫn đến h không xác định trong bài cơ năng.",
          "LẪN CHIỀU: Ở bài cầu vồng/võng quên đổi chiều dương, dẫn đến dấu sai trong phương trình.",
          "NHẦM ĐƠN VỊ: Đổi vòng/phút sang rad/s: ω = 2πn/60; đổi km/h sang m/s: chia 3,6.",
          "LẦM TƯỞNG: Cơ năng bảo toàn khi có ma sát → SAI. Chỉ bảo toàn khi không có lực phi bảo toàn.",
          "BỎ QUA: Điều kiện dây không chùng (T ≥ 0) hoặc xe không bị 'hất lên' (N ≥ 0).",
        ],
      },
      {
        subtitle: "D. Công thức 'phao' cần nhớ khi vào phòng thi",
        type: "tip-box",
        content:
          "p = mv | Wđ = ½mv² = p²/(2m) | W = Wđ + Wt | F·Δt = Δp | v = ωR | a = v²/R = ω²R | F_ht = mv²/R | N_đỉnh_vồng = mg − mv²/R | N_đáy_võng = mg + mv²/R | T_đỉnh = mv²/R − mg",
      },
    ],
  },
];
