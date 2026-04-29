import { useState, type CSSProperties } from "react";

type FormulaItem = { label: string; formula: string };
type StepItem = { step: string; name: string; desc: string };
type CompareItem = { title: string; points: string[] };
type NutritionRow = { kieu: string; nangluong: string; carbon: string; daidien: string };
type GpBlock = { label: string; rows: string[][] };

type Block =
  | { subtitle: string; type: "formulas"; items: FormulaItem[] }
  | { subtitle: string; type: "table"; headers: string[]; rows: string[][] }
  | { subtitle: string; type: "table2col"; headers: string[]; gp1: GpBlock; gp2: GpBlock }
  | { subtitle: string; type: "list"; items: string[] }
  | { subtitle: string; type: "tips"; items: string[] }
  | { subtitle: string; type: "nutrition"; note: string; table: NutritionRow[] }
  | { subtitle: string; type: "compare"; items: CompareItem[] }
  | { subtitle: string; type: "steps"; items: StepItem[] }
  | { subtitle: string; type: "tip-box"; content: string };

type Section = {
  id: string;
  icon: string;
  title: string;
  color: string;
  accent: string;
  content: Block[];
};

const sections: Section[] = [
  {
    id: "nguyen-phan",
    icon: "🔬",
    title: "I. NGUYÊN PHÂN & GIẢM PHÂN",
    color: "#1a6b4a",
    accent: "#2ecc71",
    content: [
      {
        subtitle: "A. Công thức quan trọng (bộ NST 2n ban đầu)",
        type: "formulas",
        items: [
          { label: "Số TB con từ 1 TB nguyên phân k lần liên tiếp", formula: "2ᵏ tế bào con (bộ NST 2n)" },
          { label: "Số NST đơn tương đương môi trường cung cấp cho TB", formula: "(2ᵏ − 1) × 2n" },
          { label: "Số NST qua các kì nguyên phân (ban đầu TB có 2n NST đơn)", formula: "Xem bảng bên dưới" },
        ],
      },
      {
        subtitle: "B. Bảng NST qua các kì Nguyên phân",
        type: "table",
        headers: ["Kì Nguyên phân", "NST kép", "Chromatid", "NST đơn"],
        rows: [
          ["Kì trung gian – sau pha S", "2n", "4n", "0"],
          ["Kì đầu", "2n", "4n", "0"],
          ["Kì giữa", "2n", "4n", "0"],
          ["Kì sau", "0", "0", "4n"],
          ["Kì cuối", "0", "0", "2n"],
        ],
      },
      {
        subtitle: "C. Bảng NST qua các kì Giảm phân",
        type: "table2col",
        headers: ["Kì GP", "NST kép", "Chromatid", "NST đơn"],
        gp1: {
          label: "Giảm phân I",
          rows: [
            ["Kì trung gian – sau pha S", "2n", "4n", "0"],
            ["Kì đầu", "2n", "4n", "0"],
            ["Kì giữa", "2n", "4n", "0"],
            ["Kì sau", "2n", "4n", "0"],
            ["Kì cuối", "n", "2n", "0"],
          ],
        },
        gp2: {
          label: "Giảm phân II",
          rows: [
            ["Không có kì trung gian", "—", "—", "—"],
            ["Kì đầu", "n", "2n", "0"],
            ["Kì giữa", "n", "2n", "0"],
            ["Kì sau", "0", "0", "2n"],
            ["Kì cuối", "0", "0", "n"],
          ],
        },
      },
      {
        subtitle: "D. Điểm kiểm soát chu kì tế bào",
        type: "list",
        items: [
          "Điểm kiểm soát G₁/S: Kiểm tra xem tế bào có đủ lớn, DNA có nguyên vẹn không → quyết định có tiếp tục vào pha S (nhân đôi DNA) không.",
          "Điểm kiểm soát G₂/M: Kiểm tra DNA đã nhân đôi hoàn toàn chưa, môi trường có thuận lợi không → quyết định có vào phân bào không.",
          "Điểm kiểm soát thoi phân bào (kì giữa → kì sau): Kiểm tra các NST đã gắn đúng vào thoi phân bào chưa → đây là điểm kiểm soát ở trong kì trung gian.",
          "⚠️ Lưu ý: Trong kì trung gian có 2 điểm kiểm soát (G₁/S và G₂/M). Điểm kiểm soát thoi phân bào nằm ở kì giữa của nguyên phân.",
        ],
      },
      {
        subtitle: "E. Lưu ý làm bài tập",
        type: "tips",
        items: [
          "NST kép = NST đã nhân đôi (gồm 2 chromatid dính nhau tại tâm động). 1 NST kép = 2 chromatid.",
          "Kì sau nguyên phân: 2 chromatid tách ra → NST đơn → số NST đơn = 4n (tạm thời trong 1 tế bào).",
          "Kì cuối nguyên phân: tế bào chia đôi → mỗi TB con có 2n NST đơn.",
          "Giảm phân I tách cặp NST tương đồng → mỗi TB con có n NST kép.",
          "Giảm phân II giống nguyên phân nhưng bộ NST là n (đơn bội).",
          "Số giao tử tạo ra: 1 TB → giảm phân → 4 giao tử (tinh trùng); 1 TB sinh trứng → 1 trứng + 3 thể định hướng.",
          "Sau giảm phân ở người (2n=46): giao tử có n=23 NST đơn.",
        ],
      },
    ],
  },
  {
    id: "vi-sinh-vat",
    icon: "🦠",
    title: "II. VI SINH VẬT",
    color: "#1a3d6b",
    accent: "#3498db",
    content: [
      {
        subtitle: "A. Khái niệm & Đặc điểm chung",
        type: "list",
        items: [
          "Vi sinh vật (VSV): Những sinh vật có kích thước rất nhỏ (µm, nm), không thể quan sát bằng mắt thường.",
          "Đặc điểm chung của VSV: (1) Kích thước nhỏ bé; (2) Phân bố rộng rãi trong tất cả các môi trường; (3) Hấp thu và chuyển hóa vật chất nhanh; (4) Sinh trưởng và sinh sản nhanh.",
          "⚠️ Tất cả 4 đặc điểm trên đều là đặc điểm chung của vi sinh vật (đáp án D câu 6).",
          "Kích thước nhỏ → tỷ lệ S/V (diện tích/thể tích) lớn → trao đổi chất nhanh → sinh trưởng, sinh sản nhanh.",
          "VSV thuộc: Giới Khởi sinh (vi khuẩn), Giới Nguyên sinh (tảo đơn bào, trùng biến hình, trùng roi), Giới Nấm (nấm men, nấm mốc).",
        ],
      },
      {
        subtitle: "B. Các kiểu dinh dưỡng ở vi sinh vật",
        type: "nutrition",
        note: "Phân loại dựa vào: nguồn năng lượng (ánh sáng / hóa học) và nguồn carbon (CO₂ / chất hữu cơ)",
        table: [
          { kieu: "Quang tự dưỡng", nangluong: "Ánh sáng", carbon: "CO₂", daidien: "Vi khuẩn lam, vi tảo, vi khuẩn lưu huỳnh màu tía & lục" },
          { kieu: "Quang dị dưỡng", nangluong: "Ánh sáng", carbon: "Chất hữu cơ", daidien: "Vi khuẩn không chứa lưu huỳnh màu tía & lục" },
          { kieu: "Hóa tự dưỡng", nangluong: "Hóa học (oxy hóa chất vô cơ)", carbon: "CO₂", daidien: "Vi khuẩn oxy hóa hydrogen, lưu huỳnh, sắt, nitrate hóa" },
          { kieu: "Hóa dị dưỡng", nangluong: "Hóa học (chất hữu cơ)", carbon: "Chất hữu cơ", daidien: "Vi nấm, Động vật NS, Đa số vi khuẩn" },
        ],
      },
      {
        subtitle: "C. Sinh trưởng của vi sinh vật",
        type: "list",
        items: [
          "Sinh trưởng của VSV = sự tăng lên về số lượng tế bào trong quần thể (không nghiên cứu cá thể).",
          "Đường cong sinh trưởng gồm 4 pha: Pha tiềm phát → Pha lũy thừa (tăng theo hàm mũ) → Pha cân bằng → Pha suy vong.",
          "Pha tiềm phát: VSV thích nghi với môi trường, chưa phân chia → mật độ gần như không thay đổi.",
          "Pha lũy thừa: VSV phân chia nhanh nhất, số lượng tăng theo cấp số nhân 2ⁿ.",
          "Pha cân bằng: Số TB sinh ra = số TB chết → mật độ ổn định. Chất dinh dưỡng vẫn đầy đủ nhưng chất độc tích lũy.",
          "Pha suy vong: Số TB chết > sinh ra, do cạn kiệt chất dinh dưỡng, tích lũy chất độc.",
          "Sinh khối VSV cao nhất vào cuối pha lũy thừa / đầu pha cân bằng.",
          "Muối đặc / giảm hoạt độ nước → ức chế sinh trưởng VSV → bảo quản thực phẩm.",
          "Dung dịch rửa vết thương, tiệt trùng dụng cụ y tế → tạo môi trường ưu trương → VSV bị co nguyên sinh → chết.",
        ],
      },
      {
        subtitle: "D. Phân loại vi sinh vật không phải VSV",
        type: "tip-box",
        content:
          "Nấm rơm (Câu 3, đáp án D) KHÔNG PHẢI vi sinh vật vì nấm rơm là sinh vật đa bào, có thể nhìn thấy bằng mắt thường. Các VSV gồm: vi khuẩn lam, tảo đơn bào, trùng biến hình.",
      },
    ],
  },
  {
    id: "virus",
    icon: "🧬",
    title: "III. VIRUS",
    color: "#6b1a1a",
    accent: "#e74c3c",
    content: [
      {
        subtitle: "A. Khái niệm & Đặc điểm",
        type: "list",
        items: [
          "Virus: Dạng sống KHÔNG có cấu tạo tế bào, kích thước rất nhỏ (nm), sống kí sinh bắt buộc trong tế bào sinh vật.",
          "Cấu tạo: 2 phần chính: (1) Lõi nucleic acid (DNA hoặc RNA) – mang thông tin di truyền; (2) Vỏ capsid – protein bảo vệ.",
          "Vật chất di truyền chỉ là một loại acid nucleic (DNA hoặc RNA), không có cả hai.",
          "Phân loại: Virus DNA và Virus RNA.",
          "Virus phải dùng vật chất có sẵn trong tế bào chủ để nhân lên.",
          "Mỗi loại virus chỉ gây bệnh ở một hoặc một số loài sinh vật nhất định vì: Gai glycoprotein (virus có màng bọc) hoặc protein vỏ capsid (virus trần) chỉ liên kết đặc hiệu với thụ thể trên bề mặt tế bào chủ cụ thể.",
        ],
      },
      {
        subtitle: "B. Cấu tạo Virus trần vs Virus có màng bọc",
        type: "compare",
        items: [
          {
            title: "Giống nhau",
            points: [
              "Lõi nucleic acid: mang thông tin di truyền, quy định toàn bộ hoạt động sống của virus.",
              "Vỏ capsid: có chức năng bao bọc, bảo vệ virus.",
            ],
          },
          {
            title: "Virus trần",
            points: [
              "KHÔNG có màng bọc ngoài.",
              "Protein vỏ capsid đóng vai trò là thụ thể giúp virus bám dính lên bề mặt tế bào chủ.",
            ],
          },
          {
            title: "Virus có màng bọc",
            points: [
              "Có màng bọc: phospholipid kép.",
              "Trên màng bọc có các gai glycoprotein đóng vai trò là thụ thể giúp virus bám dính lên bề mặt tế bào chủ.",
              "Ví dụ: HIV, virus cúm (influenza), Adenovirus.",
            ],
          },
        ],
      },
      {
        subtitle: "C. Chu trình nhân lên của Phage T4 (5 giai đoạn)",
        type: "steps",
        items: [
          { step: "1", name: "Hấp phụ (0 phút)", desc: "Phage T4 tiếp cận và gắn đuôi vào bề mặt vi khuẩn E. coli nhờ các sợi đuôi và đĩa gốc liên kết đặc hiệu với thụ thể trên màng tế bào vi khuẩn." },
          { step: "2", name: "Xâm nhập (0–13 phút)", desc: "Bơm DNA của phage vào tế bào vi khuẩn. Vỏ protein của phage ở lại bên ngoài (khác với virus có màng bọc: cả vỏ và lõi đều xâm nhập)." },
          { step: "3", name: "Sinh tổng hợp (13–15 phút)", desc: "DNA của phage điều khiển bộ máy của tế bào chủ để tổng hợp DNA và protein của phage mới." },
          { step: "4", name: "Lắp ráp (15–22 phút)", desc: "Các thành phần được lắp ráp thành các hạt phage T4 hoàn chỉnh." },
          { step: "5", name: "Phóng thích (22 phút)", desc: "Phage tổng hợp enzyme lysozyme phá vỡ thành tế bào vi khuẩn → tế bào tan → phóng thích ~200 phage mới ra ngoài." },
        ],
      },
      {
        subtitle: "D. HIV/AIDS – Lý do gây suy giảm miễn dịch",
        type: "tip-box",
        content:
          "HIV tấn công và phá hủy tế bào bạch cầu T4 (CD4+) – tế bào chủ chốt của hệ miễn dịch. Khi T4 giảm, cơ thể mất khả năng chống lại các mầm bệnh cơ hội → người bệnh dễ mắc loét da, tiêu chảy, các bệnh nhiễm trùng cơ hội. HIV có vỏ màng bọc → gai glycoprotein liên kết với thụ thể CD4 trên tế bào T4.",
      },
    ],
  },
];

type Quiz = { q: string; options: string[]; answer: number; explain: string };

const quizData: Quiz[] = [
  {
    q: "Một tế bào có 2n = 24 NST đơn nguyên phân liên tiếp 3 lần. Số NST đơn tương đương mà môi trường cần cung cấp là?",
    options: ["144", "168", "192", "96"],
    answer: 1,
    explain: "Công thức: (2ᵏ − 1) × 2n = (2³ − 1) × 24 = 7 × 24 = 168 NST đơn.",
  },
  {
    q: "Số NST trong một tế bào ở kì cuối của quá trình nguyên phân ở người (2n = 46) là?",
    options: ["46 NST đơn", "92 NST đơn", "23 NST kép", "46 NST kép"],
    answer: 0,
    explain: "Kì cuối nguyên phân: tế bào phân chia → mỗi tế bào con có 2n = 46 NST đơn (giống tế bào mẹ ban đầu).",
  },
  {
    q: "Ở người, tế bào sinh tinh có 2n = 46 NST. Số NST trong giao tử tạo ra sau giảm phân là?",
    options: ["46 NST đơn", "23 NST kép", "23 NST đơn", "92 NST đơn"],
    answer: 2,
    explain: "Sau giảm phân: tế bào con (giao tử) có n = 23 NST đơn.",
  },
  {
    q: "Một loài có 2n = 16 NST. Sau giảm phân 2, số NST trong mỗi tế bào con là?",
    options: ["8 NST đơn", "16 NST đơn", "8 NST kép", "4 NST đơn"],
    answer: 0,
    explain: "Sau giảm phân 2: 4 tế bào con đơn bội, mỗi tế bào có n = 8 NST đơn.",
  },
  {
    q: "Từ tế bào lưỡng bội (2n) trải qua 5 lần nguyên phân liên tiếp sẽ tạo ra bao nhiêu tế bào con?",
    options: ["10", "16", "32", "64"],
    answer: 2,
    explain: "Số tế bào con = 2⁵ = 32 tế bào.",
  },
  {
    q: "Trong nguyên phân, tế bào có 2n = 8. Số NST ở kì giữa là bao nhiêu?",
    options: ["8 NST đơn", "8 NST kép", "16 NST đơn", "4 NST kép"],
    answer: 1,
    explain: "Kì giữa nguyên phân: NST đã nhân đôi nhưng chưa tách → có 2n = 8 NST kép (= 16 chromatid).",
  },
  {
    q: "Căn cứ để phân loại các kiểu dinh dưỡng ở vi sinh vật là?",
    options: [
      "Dựa vào nguồn carbon và nguồn cung cấp vật chất",
      "Dựa vào nguồn oxygen và nguồn cung cấp năng lượng",
      "Dựa vào nguồn oxygen và nguồn cung cấp vật chất",
      "Dựa vào nguồn carbon và nguồn cung cấp năng lượng",
    ],
    answer: 3,
    explain: "Phân loại kiểu dinh dưỡng VSV dựa vào 2 yếu tố: nguồn năng lượng (ánh sáng hay hóa học) và nguồn carbon (CO₂ hay chất hữu cơ) → đáp án D.",
  },
  {
    q: "Loài nào sau đây KHÔNG PHẢI vi sinh vật?",
    options: ["Vi khuẩn lam", "Tảo đơn bào", "Trùng biến hình", "Nấm rơm"],
    answer: 3,
    explain: "Nấm rơm là sinh vật đa bào, có thể quan sát bằng mắt thường → không phải vi sinh vật.",
  },
  {
    q: "Kích thước vi sinh vật càng nhỏ thì?",
    options: [
      "Tốc độ trao đổi chất cao, sinh trưởng và sinh sản nhanh",
      "Tốc độ trao đổi chất cao, sinh trưởng và sinh sản chậm",
      "Tốc độ trao đổi chất thấp, sinh trưởng và sinh sản nhanh",
      "Tốc độ trao đổi chất thấp, sinh trưởng và sinh sản chậm",
    ],
    answer: 0,
    explain: "Kích thước nhỏ → tỷ lệ S/V lớn → hấp thu và trao đổi chất nhanh → sinh trưởng, sinh sản nhanh. Đáp án A.",
  },
  {
    q: "Cấu tạo virus gồm 2 phần chính là?",
    options: [
      "DNA và protein",
      "Nucleic acid (DNA hoặc RNA) và protein (vỏ capsid)",
      "Phospholipid và protein",
      "RNA và DNA",
    ],
    answer: 1,
    explain: "Virus có 2 phần: lõi nucleic acid (DNA hoặc RNA – không có cả 2) và vỏ capsid (protein). Virus có màng bọc có thêm lớp phospholipid bên ngoài.",
  },
  {
    q: "Vi sinh vật thuộc những giới nào trong hệ thống phân loại 5 giới?",
    options: [
      "Giới Khởi sinh, giới Nấm, giới Thực vật",
      "Giới Khởi sinh, giới Nguyên sinh, giới Nấm",
      "Giới Nấm, giới Thực vật, giới Động vật",
      "Giới Khởi sinh, Giới Thực vật, giới Động vật",
    ],
    answer: 1,
    explain: "Vi sinh vật thuộc: Giới Khởi sinh (vi khuẩn, vi khuẩn cổ), Giới Nguyên sinh (tảo đơn bào, động vật nguyên sinh), Giới Nấm (nấm men, nấm mốc).",
  },
  {
    q: "Phage T4 xâm nhập vào vi khuẩn E. coli khác với virus HIV xâm nhập tế bào bạch cầu ở điểm nào?",
    options: [
      "Phage bơm DNA vào, vỏ ở ngoài; HIV đưa cả vỏ lẫn lõi vào tế bào",
      "Phage đưa cả vỏ lẫn lõi vào; HIV chỉ bơm RNA vào",
      "Cả hai đều bơm nucleic acid vào tế bào chủ",
      "Cả hai đều đưa toàn bộ virus vào tế bào chủ",
    ],
    answer: 0,
    explain: "Phage T4 (virus trần): bơm DNA vào, vỏ capsid ở lại ngoài. HIV (virus có màng bọc): cả vỏ màng bọc và lõi đều xâm nhập vào tế bào chủ.",
  },
  {
    q: "Tảo Zooxanthellae sống cộng sinh với san hô, cung cấp carbohydrate qua quang hợp. Kiểu dinh dưỡng của tảo này là?",
    options: ["Hóa dị dưỡng", "Quang dị dưỡng", "Hóa tự dưỡng", "Quang tự dưỡng"],
    answer: 3,
    explain: "Tảo dùng ánh sáng làm nguồn năng lượng và CO₂ làm nguồn carbon (quang hợp: 6CO₂ + 6H₂O + Ánh sáng → C₆H₁₂O₆ + 6O₂) → Quang tự dưỡng.",
  },
  {
    q: "Nấm men sử dụng tinh bột trong cơm gạo nếp để phát triển, quá trình nấm men chuyển hóa tinh bột tạo ethanol. Vậy nấm men có kiểu dinh dưỡng là?",
    options: ["Quang tự dưỡng", "Quang dị dưỡng", "Hóa tự dưỡng", "Hóa dị dưỡng"],
    answer: 3,
    explain: "Nấm men dùng chất hữu cơ (tinh bột) vừa làm nguồn năng lượng vừa làm nguồn carbon → Hóa dị dưỡng.",
  },
  {
    q: "Cho các sinh vật: vi khuẩn lactic, nấm men, trùng roi, trùng giày, tảo silic, cây rêu, giun đất. Số vi sinh vật trong danh sách trên là?",
    options: ["4", "5", "6", "7"],
    answer: 1,
    explain: "VSV gồm: vi khuẩn lactic, nấm men, trùng roi, trùng giày, tảo silic = 5 loài. Cây rêu (thực vật đa bào) và giun đất (động vật đa bào) không phải VSV.",
  },
];

type AnswerEntry = { q: number; selected: number; correct: boolean };

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplain, setShowExplain] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<AnswerEntry[]>([]);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplain(true);
    const correct = idx === quizData[currentQ].answer;
    if (correct) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { q: currentQ, selected: idx, correct }]);
  };

  const nextQuestion = () => {
    if (currentQ + 1 >= quizData.length) {
      setFinished(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowExplain(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowExplain(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  if (quizMode) {
    return (
      <div style={{ minHeight: "100vh", background: "#0f0f1a", color: "#e8e0d0", fontFamily: "'Georgia', serif", padding: "20px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <button
            onClick={() => {
              setQuizMode(false);
              resetQuiz();
            }}
            style={{ background: "none", border: "1px solid #555", color: "#aaa", padding: "8px 16px", borderRadius: 6, cursor: "pointer", marginBottom: 20, fontSize: 13 }}
          >
            ← Quay lại ôn tập
          </button>

          {finished ? (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>{score >= 12 ? "🏆" : score >= 9 ? "🎯" : score >= 6 ? "📚" : "💪"}</div>
              <h2 style={{ color: "#f0c040", fontSize: 28, marginBottom: 8 }}>Kết quả kiểm tra</h2>
              <div style={{ fontSize: 48, fontWeight: "bold", color: score >= 12 ? "#2ecc71" : score >= 9 ? "#f0c040" : "#e74c3c", marginBottom: 8 }}>
                {score}/{quizData.length}
              </div>
              <div style={{ color: "#aaa", marginBottom: 24, fontSize: 16 }}>
                {score >= 12
                  ? "Xuất sắc! Bạn đã nắm vững kiến thức."
                  : score >= 9
                  ? "Tốt! Cần ôn thêm một số điểm."
                  : score >= 6
                  ? "Trung bình. Hãy xem lại lý thuyết!"
                  : "Cần ôn tập nhiều hơn."}
              </div>
              <div style={{ background: "#1a1a2e", borderRadius: 12, padding: "16px", marginBottom: 24, textAlign: "left" }}>
                {answers.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 13, color: a.correct ? "#2ecc71" : "#e74c3c" }}>
                    <span>{a.correct ? "✓" : "✗"}</span>
                    <span>
                      Câu {i + 1}: {a.correct ? "Đúng" : `Sai (Đáp án đúng: ${String.fromCharCode(65 + quizData[i].answer)})`}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={resetQuiz}
                style={{ background: "#3498db", color: "white", border: "none", padding: "12px 32px", borderRadius: 8, cursor: "pointer", fontSize: 16, marginRight: 12 }}
              >
                Làm lại
              </button>
              <button
                onClick={() => {
                  setQuizMode(false);
                  resetQuiz();
                }}
                style={{ background: "#555", color: "white", border: "none", padding: "12px 32px", borderRadius: 8, cursor: "pointer", fontSize: 16 }}
              >
                Xem lý thuyết
              </button>
            </div>
          ) : (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <span style={{ color: "#aaa", fontSize: 13 }}>
                  Câu {currentQ + 1} / {quizData.length}
                </span>
                <span style={{ color: "#f0c040", fontSize: 13 }}>Điểm: {score}</span>
              </div>
              <div style={{ background: "#1a1a30", borderRadius: 12, padding: "10px 0", marginBottom: 12 }}>
                <div style={{ height: 4, background: "#3498db", width: `${(currentQ / quizData.length) * 100}%`, borderRadius: 4, transition: "width 0.3s" }} />
              </div>
              <div style={{ background: "#1a1a30", borderRadius: 16, padding: "24px", marginBottom: 20 }}>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#e8e0d0", margin: 0 }}>
                  <strong style={{ color: "#f0c040" }}>Câu {currentQ + 1}:</strong> {quizData[currentQ].q}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {quizData[currentQ].options.map((opt, idx) => {
                  let bg = "#1e1e3a";
                  let border = "#333";
                  let col = "#e8e0d0";
                  if (selected !== null) {
                    if (idx === quizData[currentQ].answer) {
                      bg = "#1a3a1a";
                      border = "#2ecc71";
                      col = "#2ecc71";
                    } else if (idx === selected && selected !== quizData[currentQ].answer) {
                      bg = "#3a1a1a";
                      border = "#e74c3c";
                      col = "#e74c3c";
                    }
                  }
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      style={{
                        background: bg,
                        border: `2px solid ${border}`,
                        color: col,
                        padding: "14px 18px",
                        borderRadius: 10,
                        cursor: selected !== null ? "default" : "pointer",
                        textAlign: "left",
                        fontSize: 14,
                        lineHeight: 1.5,
                        transition: "all 0.2s",
                      }}
                    >
                      <strong style={{ marginRight: 8 }}>{String.fromCharCode(65 + idx)}.</strong>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {showExplain && (
                <div style={{ marginTop: 16, background: "#1a2a1a", border: "1px solid #2ecc71", borderRadius: 10, padding: "16px" }}>
                  <strong style={{ color: "#2ecc71" }}>💡 Giải thích:</strong>
                  <p style={{ margin: "8px 0 0", color: "#ccc", fontSize: 14, lineHeight: 1.6 }}>{quizData[currentQ].explain}</p>
                  <button
                    onClick={nextQuestion}
                    style={{ marginTop: 14, background: "#3498db", color: "white", border: "none", padding: "10px 24px", borderRadius: 8, cursor: "pointer", fontSize: 14 }}
                  >
                    {currentQ + 1 >= quizData.length ? "Xem kết quả →" : "Câu tiếp theo →"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0f0f1a", color: "#e8e0d0", fontFamily: "'Georgia', serif" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a0a2e 0%, #0d1a3a 50%, #0a2a1a 100%)",
          padding: "32px 24px",
          textAlign: "center",
          borderBottom: "1px solid #2a2a4a",
        }}
      >
        <div style={{ fontSize: 13, color: "#888", letterSpacing: 3, marginBottom: 8 }}>
          TRƯỜNG THPT CHUYÊN NGOẠI NGỮ • MÔN SINH HỌC 10
        </div>
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: "bold", color: "#f0e0a0", letterSpacing: 1 }}>
          📋 ĐỀ CƯƠNG ÔN TẬP HỌC KÌ 2
        </h1>
        <div style={{ color: "#aaa", fontSize: 13, marginTop: 8 }}>
          Năm học 2025 – 2026 • Tổng hợp toàn bộ kiến thức trọng tâm
        </div>
        <button
          onClick={() => setQuizMode(true)}
          style={{
            marginTop: 20,
            background: "linear-gradient(135deg, #f0c040, #e07020)",
            color: "#1a0a00",
            border: "none",
            padding: "12px 32px",
            borderRadius: 30,
            cursor: "pointer",
            fontSize: 15,
            fontWeight: "bold",
            letterSpacing: 0.5,
          }}
        >
          🎯 Bắt đầu kiểm tra trắc nghiệm ({quizData.length} câu)
        </button>
      </div>

      {/* Sections */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "24px 16px" }}>
        {sections.map((section) => (
          <div
            key={section.id}
            style={{ marginBottom: 24, borderRadius: 16, overflow: "hidden", border: `1px solid ${section.accent}40` }}
          >
            {/* Section Header */}
            <button
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              style={{
                width: "100%",
                background: `linear-gradient(135deg, ${section.color}cc, ${section.color}88)`,
                border: "none",
                color: "white",
                padding: "18px 24px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              <span style={{ fontSize: 18, fontWeight: "bold", letterSpacing: 0.5 }}>
                {section.icon} {section.title}
              </span>
              <span style={{ fontSize: 20, color: section.accent }}>
                {activeSection === section.id ? "▲" : "▼"}
              </span>
            </button>

            {activeSection === section.id && (
              <div style={{ background: "#111128", padding: "20px" }}>
                {section.content.map((block, bi) => (
                  <div key={bi} style={{ marginBottom: 28 }}>
                    <h3
                      style={{
                        color: section.accent,
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 14,
                        borderBottom: `1px solid ${section.accent}30`,
                        paddingBottom: 8,
                      }}
                    >
                      {block.subtitle}
                    </h3>

                    {block.type === "formulas" && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {block.items.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              background: "#1a1a30",
                              borderLeft: `3px solid ${section.accent}`,
                              padding: "12px 16px",
                              borderRadius: "0 8px 8px 0",
                            }}
                          >
                            <div style={{ color: "#aaa", fontSize: 13, marginBottom: 4 }}>{item.label}</div>
                            <div style={{ color: "#f0e0a0", fontSize: 16, fontWeight: "bold" }}>{item.formula}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {block.type === "table" && (
                      <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                          <thead>
                            <tr>
                              {block.headers.map((h, i) => (
                                <th
                                  key={i}
                                  style={{
                                    background: section.color,
                                    color: "white",
                                    padding: "10px 12px",
                                    textAlign: "center",
                                    border: "1px solid #333",
                                  }}
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row, ri) => (
                              <tr key={ri} style={{ background: ri % 2 === 0 ? "#151528" : "#1a1a30" }}>
                                {row.map((cell, ci) => (
                                  <td
                                    key={ci}
                                    style={{
                                      padding: "9px 12px",
                                      border: "1px solid #2a2a4a",
                                      textAlign: "center",
                                      color: ci === 0 ? "#e8d080" : "#ccc",
                                    }}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {block.type === "table2col" && (
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        {[block.gp1, block.gp2].map((gp, gi) => (
                          <div key={gi}>
                            <div
                              style={{
                                background: section.color,
                                color: "white",
                                textAlign: "center",
                                padding: "8px",
                                fontWeight: "bold",
                                borderRadius: "8px 8px 0 0",
                                fontSize: 14,
                              }}
                            >
                              {gp.label}
                            </div>
                            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                              <thead>
                                <tr>
                                  {block.headers.map((h, i) => (
                                    <th
                                      key={i}
                                      style={{
                                        background: "#1a1a40",
                                        color: "#ccc",
                                        padding: "7px 6px",
                                        textAlign: "center",
                                        border: "1px solid #333",
                                        fontSize: 11,
                                      }}
                                    >
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {gp.rows.map((row, ri) => (
                                  <tr key={ri} style={{ background: ri % 2 === 0 ? "#151528" : "#1a1a30" }}>
                                    {row.map((cell, ci) => (
                                      <td
                                        key={ci}
                                        style={{
                                          padding: "7px 6px",
                                          border: "1px solid #2a2a4a",
                                          textAlign: "center",
                                          color: ci === 0 ? "#e8d080" : "#ccc",
                                          fontSize: 12,
                                        }}
                                      >
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ))}
                      </div>
                    )}

                    {block.type === "list" && (
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                        {block.items.map((item, i) => {
                          const isWarn = item.startsWith("⚠️");
                          const li: CSSProperties = {
                            display: "flex",
                            gap: 10,
                            alignItems: "flex-start",
                            background: isWarn ? "#2a1a0a" : "#151528",
                            padding: "11px 14px",
                            borderRadius: 8,
                            fontSize: 14,
                            lineHeight: 1.6,
                            border: isWarn ? "1px solid #c0801080" : "1px solid #2a2a4a",
                          };
                          return (
                            <li key={i} style={li}>
                              <span style={{ minWidth: 18, color: isWarn ? "#f0a040" : section.accent, marginTop: 1 }}>
                                {isWarn ? "" : "•"}
                              </span>
                              <span style={{ color: isWarn ? "#f0c080" : "#ddd" }}>{item}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {block.type === "tips" && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {block.items.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              background: "#1a2a1a",
                              borderLeft: `3px solid #2ecc71`,
                              padding: "10px 14px",
                              borderRadius: "0 8px 8px 0",
                              fontSize: 13,
                              lineHeight: 1.6,
                              color: "#c8e8c8",
                            }}
                          >
                            💡 {item}
                          </div>
                        ))}
                      </div>
                    )}

                    {block.type === "nutrition" && (
                      <div>
                        <p style={{ color: "#aaa", fontSize: 13, marginBottom: 12, fontStyle: "italic" }}>
                          📌 {block.note}
                        </p>
                        <div style={{ overflowX: "auto" }}>
                          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                            <thead>
                              <tr>
                                {["Kiểu dinh dưỡng", "Nguồn năng lượng", "Nguồn carbon", "Đại diện"].map((h) => (
                                  <th
                                    key={h}
                                    style={{
                                      background: section.color,
                                      color: "white",
                                      padding: "10px",
                                      border: "1px solid #333",
                                      textAlign: "left",
                                    }}
                                  >
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {block.table.map((row, i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "#151528" : "#1a1a30" }}>
                                  <td
                                    style={{
                                      padding: "10px",
                                      border: "1px solid #2a2a4a",
                                      color: "#f0e090",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {row.kieu}
                                  </td>
                                  <td style={{ padding: "10px", border: "1px solid #2a2a4a", color: "#ccc" }}>
                                    {row.nangluong}
                                  </td>
                                  <td style={{ padding: "10px", border: "1px solid #2a2a4a", color: "#ccc" }}>
                                    {row.carbon}
                                  </td>
                                  <td
                                    style={{
                                      padding: "10px",
                                      border: "1px solid #2a2a4a",
                                      color: "#b8e0b8",
                                      fontSize: 12,
                                    }}
                                  >
                                    {row.daidien}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {block.type === "compare" && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {block.items.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              background: i === 0 ? "#1a1a30" : i === 1 ? "#1a2a3a" : "#2a1a1a",
                              borderRadius: 10,
                              padding: "14px",
                            }}
                          >
                            <div
                              style={{
                                color: i === 0 ? "#aaa" : i === 1 ? "#3498db" : "#e74c3c",
                                fontWeight: "bold",
                                marginBottom: 8,
                                fontSize: 14,
                              }}
                            >
                              {i === 0 ? "🔗 " : i === 1 ? "🔵 " : "🔴 "}
                              {item.title}
                            </div>
                            {item.points.map((p, pi) => (
                              <div
                                key={pi}
                                style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 13, color: "#ccc", lineHeight: 1.5 }}
                              >
                                <span style={{ minWidth: 16, color: section.accent }}>→</span>
                                <span>{p}</span>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {block.type === "steps" && (
                      <div style={{ position: "relative" }}>
                        {block.items.map((item, i) => (
                          <div key={i} style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                              <div
                                style={{
                                  width: 36,
                                  height: 36,
                                  borderRadius: "50%",
                                  background: section.color,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontWeight: "bold",
                                  fontSize: 15,
                                  color: "white",
                                  flexShrink: 0,
                                }}
                              >
                                {item.step}
                              </div>
                              {i < block.items.length - 1 && (
                                <div style={{ width: 2, flex: 1, background: `${section.accent}40`, margin: "4px 0" }} />
                              )}
                            </div>
                            <div
                              style={{
                                background: "#151528",
                                borderRadius: 10,
                                padding: "12px 16px",
                                flex: 1,
                                border: `1px solid ${section.accent}30`,
                              }}
                            >
                              <div style={{ color: section.accent, fontWeight: "bold", marginBottom: 6, fontSize: 14 }}>
                                {item.name}
                              </div>
                              <div style={{ color: "#ccc", fontSize: 13, lineHeight: 1.6 }}>{item.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {block.type === "tip-box" && (
                      <div
                        style={{
                          background: "#1a1a10",
                          border: "1px solid #c0a020",
                          borderRadius: 10,
                          padding: "16px",
                          fontSize: 14,
                          color: "#e8d080",
                          lineHeight: 1.7,
                        }}
                      >
                        ⚠️ <strong>Lưu ý quan trọng:</strong> {block.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Quick Reference */}
        <div
          style={{
            background: "#1a1a10",
            border: "1px solid #c0a02060",
            borderRadius: 16,
            padding: "20px",
            marginTop: 8,
          }}
        >
          <h3 style={{ color: "#f0c040", marginTop: 0, marginBottom: 16 }}>
            📌 Tóm tắt các câu hỏi ôn tập từ đề cương
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {(
              [
                ["C1", "NST kì cuối NP ở người (2n=46) = 46 NST đơn"],
                ["C2", "2n=24, NP 3 lần: MT cung cấp (2³−1)×24 = 168 NST đơn"],
                ["C3", "2n lưỡng bội NP 5 lần = 2⁵ = 32 TB con"],
                ["C4", "3 điểm kiểm soát: G₁/S, G₂/M, thoi phân bào"],
                ["C5", "2n=14, kì giữa NP: 7 NST kép (n kép)"],
                ["C6", "2n=46, sau GP: giao tử có 23 NST đơn"],
                ["C7", "2n=16, sau GP2: 8 NST đơn/TB con"],
                ["C8", "NST kì sau NP ở người: 92 NST đơn (tạm thời)"],
                ["C9", "2n=8, kì giữa NP: 8 NST kép = 16 chromatid"],
                ["C10", "2n=16, sau GP1: n kép = 8 NST kép/TB con"],
              ] as const
            ).map(([num, ans]) => (
              <div
                key={num}
                style={{
                  background: "#111",
                  borderRadius: 8,
                  padding: "10px 12px",
                  fontSize: 12,
                  display: "flex",
                  gap: 8,
                }}
              >
                <span style={{ color: "#f0c040", fontWeight: "bold", minWidth: 24 }}>{num}:</span>
                <span style={{ color: "#ccc" }}>{ans}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 24, color: "#555", fontSize: 12 }}>
          Sinh học 10 – Kết nối tri thức • Học kì 2 – 2025/2026
        </div>
      </div>
    </div>
  );
}
