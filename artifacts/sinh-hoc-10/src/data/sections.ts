import type { Section } from "../types";

export const sections: Section[] = [
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
          {
            label: "Số TB con từ 1 TB nguyên phân k lần liên tiếp",
            formula: "2ᵏ tế bào con (bộ NST 2n)",
          },
          {
            label: "Số NST đơn tương đương môi trường cung cấp cho TB",
            formula: "(2ᵏ − 1) × 2n",
          },
          {
            label: "Số tâm động ở kì giữa nguyên phân của 1 tế bào",
            formula: "2n (mỗi NST kép có 1 tâm động)",
          },
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
          "Điểm kiểm soát thoi phân bào (kì giữa → kì sau): Kiểm tra các NST đã gắn đúng vào thoi phân bào chưa.",
          "⚠️ Tế bào ung thư là tế bào mất khả năng kiểm soát chu kì → phân chia liên tục, mất tiếp xúc, di căn sang nơi khác.",
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
          "1 TB sinh tinh → 4 tinh trùng; 1 TB sinh trứng → 1 trứng + 3 thể định hướng.",
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
          "Đặc điểm chung của VSV: (1) Kích thước nhỏ bé; (2) Phân bố rộng trong tất cả các môi trường; (3) Hấp thu và chuyển hóa vật chất nhanh; (4) Sinh trưởng và sinh sản nhanh.",
          "⚠️ Kích thước nhỏ → tỉ lệ S/V (diện tích/thể tích) lớn → hấp thu và trao đổi chất nhanh → sinh trưởng và sinh sản nhanh.",
          "Đặc điểm “sinh trưởng và sinh sản nhanh” chính là thế mạnh được công nghệ sinh học khai thác.",
          "VSV thuộc 3 giới: Khởi sinh (vi khuẩn, vi khuẩn cổ), Nguyên sinh (tảo đơn bào, trùng biến hình, trùng roi, trùng giày), Nấm (nấm men, nấm mốc).",
          "Nấm rơm, cây rêu, giun đất KHÔNG phải VSV (đa bào, nhìn thấy bằng mắt thường).",
        ],
      },
      {
        subtitle: "B. Các kiểu dinh dưỡng ở vi sinh vật",
        type: "nutrition",
        note: "Phân loại dựa vào: nguồn năng lượng (ánh sáng / hóa học) và nguồn carbon (CO₂ / chất hữu cơ)",
        table: [
          {
            kieu: "Quang tự dưỡng",
            nangluong: "Ánh sáng",
            carbon: "CO₂",
            daidien: "Vi khuẩn lam, vi tảo, tảo Zooxanthellae, vi khuẩn lưu huỳnh màu tía & lục",
          },
          {
            kieu: "Quang dị dưỡng",
            nangluong: "Ánh sáng",
            carbon: "Chất hữu cơ",
            daidien: "Vi khuẩn không chứa lưu huỳnh màu tía & lục",
          },
          {
            kieu: "Hóa tự dưỡng",
            nangluong: "Hóa học (oxy hóa chất vô cơ)",
            carbon: "CO₂",
            daidien: "Vi khuẩn nitrate hóa, oxy hóa hydrogen, lưu huỳnh, sắt",
          },
          {
            kieu: "Hóa dị dưỡng",
            nangluong: "Hóa học (chất hữu cơ)",
            carbon: "Chất hữu cơ",
            daidien: "Nấm men, nấm mốc, vi khuẩn lactic, đa số vi khuẩn, ĐVNS",
          },
        ],
      },
      {
        subtitle: "C. Đường cong sinh trưởng – Nuôi cấy KHÔNG liên tục (theo mẻ, hệ kín)",
        type: "steps",
        items: [
          {
            step: "1",
            name: "Pha tiềm phát (lag)",
            desc: "VSV thích nghi với môi trường, tổng hợp các enzyme trao đổi chất, CHƯA phân chia → mật độ tế bào gần như không đổi. Dinh dưỡng còn dư thừa, chất độc chưa tích lũy.",
          },
          {
            step: "2",
            name: "Pha lũy thừa (log)",
            desc: "VSV phân chia mạnh nhất, số lượng tăng theo cấp số nhân 2ⁿ. Tốc độ sinh trưởng đạt cực đại và không đổi. Đây là pha thường được nghiên cứu trong CNSH.",
          },
          {
            step: "3",
            name: "Pha cân bằng",
            desc: "Số tế bào sinh ra = số tế bào chết đi → mật độ ổn định. Chất dinh dưỡng bắt đầu thiếu hụt, chất độc tích lũy. Sinh khối đạt cực đại ở ĐẦU pha cân bằng → là thời điểm thu hoạch tối ưu.",
          },
          {
            step: "4",
            name: "Pha suy vong",
            desc: "Số tế bào chết > số sinh ra do dinh dưỡng cạn kiệt và độc tố tích lũy nhiều nhất. Cuối pha suy vong là lúc chất ức chế tích lũy cao nhất.",
          },
        ],
      },
      {
        subtitle: "D. Nuôi cấy LIÊN TỤC vs KHÔNG liên tục",
        type: "compare",
        items: [
          {
            title: "Nuôi cấy không liên tục (theo mẻ, hệ kín)",
            points: [
              "KHÔNG bổ sung dinh dưỡng và KHÔNG rút bớt sản phẩm trong quá trình nuôi.",
              "Quần thể trải qua đủ 4 pha: tiềm phát → lũy thừa → cân bằng → suy vong.",
              "Để thu sinh khối tối đa: thu hoạch ở ĐẦU pha cân bằng.",
              "Để khắc phục mật độ không tăng ở pha cân bằng → bổ sung thêm chất dinh dưỡng.",
            ],
          },
          {
            title: "Nuôi cấy liên tục (hệ mở)",
            points: [
              "LIÊN TỤC bổ sung dinh dưỡng mới và rút bớt sản phẩm + chất thải.",
              "Duy trì quần thể ở pha lũy thừa lâu dài, không có pha suy vong.",
              "Mục đích: thu được nhiều sản phẩm và sinh khối tế bào VSV.",
              "Ứng dụng: sản xuất kháng sinh, enzyme, amino acid công nghiệp.",
            ],
          },
        ],
      },
      {
        subtitle: "E. Thời gian thế hệ (g)",
        type: "list",
        items: [
          "Thời gian thế hệ (g) = khoảng thời gian cần thiết để số tế bào trong quần thể tăng GẤP ĐÔI.",
          "Sau n thế hệ: Nₜ = N₀ × 2ⁿ (N₀: số tế bào ban đầu; Nₜ: số tế bào sau n thế hệ).",
          "Số thế hệ: n = t / g (t: thời gian nuôi).",
          "Ví dụ: E. coli ở 37°C có g ≈ 20 phút → trong 1h tạo 3 thế hệ → số tế bào tăng 2³ = 8 lần.",
        ],
      },
      {
        subtitle: "F. Chất KHÁNG SINH vs Chất DIỆT KHUẨN",
        type: "compare",
        items: [
          {
            title: "Chất diệt khuẩn (phenol, alcohol, kim loại nặng, formaldehyde…)",
            points: [
              "Cơ chế: gây biến tính và làm bất hoạt protein, phá hủy cấu trúc màng sinh chất của VSV.",
              "KHÔNG chọn lọc → tiêu diệt cả VSV có lợi lẫn có hại, có thể gây hại cho mô sống.",
              "Dùng để khử trùng dụng cụ, bề mặt, môi trường, KHÔNG dùng trong cơ thể người.",
            ],
          },
          {
            title: "Chất kháng sinh (penicillin, streptomycin, tetracycline…)",
            points: [
              "Có khả năng tiêu diệt hoặc ức chế VSV một cách CHỌN LỌC (chỉ tác động lên một hoặc một vài nhóm VSV nhất định).",
              "An toàn hơn cho cơ thể người, dùng được để điều trị bệnh nhiễm trùng ở người, động vật, thực vật.",
              "Sản xuất chủ yếu bởi: XẠ KHUẨN (chi Streptomyces) và NẤM (chi Penicillium); một phần bởi vi khuẩn (Bacillus).",
              "⚠️ Lạm dụng kháng sinh → vi khuẩn nhờn thuốc (kháng kháng sinh) → khó điều trị.",
              "Dung dịch cồn-iodine có khả năng diệt khuẩn nhưng KHÔNG được coi là chất kháng sinh.",
            ],
          },
        ],
      },
      {
        subtitle: "G. Ứng dụng VSV trong thực tiễn",
        type: "list",
        items: [
          "Cơ sở khoa học: VSV phân giải chất hữu cơ – chuyển hóa vô cơ → tạo nhiều sản phẩm hữu ích; sinh trưởng nhanh; sống được trong môi trường khắc nghiệt.",
          "Sản xuất thực phẩm lên men: vi khuẩn lactic làm sữa chua, dưa muối, kim chi; nấm men làm bánh mì, bia, rượu vang.",
          "Sản xuất thuốc điều trị: nhiều VSV tổng hợp được kháng sinh, enzyme, vitamin, hormone.",
          "Xử lý môi trường: chế phẩm EMZEO chứa VSV phân giải protein, lipid, cellulose để xử lý phân chuồng, rác hữu cơ, lá cây, rơm rạ.",
          "Bảo quản thực phẩm: muối đặc, đường đặc, nhiệt độ thấp (tủ lạnh) → KÌM HÃM sự sinh trưởng của VSV gây hư hỏng (không phải tiêu diệt hết).",
          "Sản xuất sinh khối VSV làm thức ăn chăn nuôi, phân bón sinh học, thuốc trừ sâu sinh học.",
        ],
      },
      {
        subtitle: "H. Lưu ý quan trọng – các bẫy thường gặp",
        type: "tip-box",
        content:
          "Nấm men sinh trưởng nhờ tinh bột → tạo ethanol = HÓA DỊ DƯỠNG (KHÔNG phải hóa tự dưỡng). Tảo Zooxanthellae quang hợp = QUANG TỰ DƯỠNG. VSV trong chế phẩm EMZEO phân giải chất hữu cơ = HÓA DỊ DƯỠNG (KHÔNG phải quang tự dưỡng). Nhiệt độ thấp trong tủ lạnh KÌM HÃM (không tiêu diệt) sự sinh trưởng của VSV.",
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
          "Virus: dạng sống KHÔNG có cấu tạo tế bào, kích thước rất nhỏ (nm), sống KÍ SINH NỘI BÀO BẮT BUỘC trong tế bào sinh vật.",
          "Vì không có cấu tạo tế bào → virus phải sử dụng vật chất và bộ máy có sẵn trong tế bào chủ để nhân lên.",
          "Vật chất di truyền chỉ là MỘT loại nucleic acid (DNA HOẶC RNA), không có cả hai cùng lúc.",
          "Mỗi loại virus chỉ xâm nhập được một số tế bào vật chủ NHẤT ĐỊNH do thụ thể của virus chỉ KHỚP ĐẶC HIỆU với phân tử bề mặt của tế bào chủ tương ứng.",
          "Sự nhân lên của virus KHÔNG được gọi là sinh sản vì hoàn toàn phụ thuộc vào tế bào chủ (không tự thực hiện được).",
        ],
      },
      {
        subtitle: "B. Cấu tạo virus & các thành phần",
        type: "table",
        headers: ["Thành phần", "Đặc điểm / chức năng"],
        rows: [
          ["Lõi nucleic acid", "Mang thông tin di truyền của virus, có thể là mạch đơn hoặc kép, DNA hoặc RNA."],
          ["Vỏ capsid", "Vỏ protein bao bọc bên ngoài bảo vệ nucleic acid. Ở virus trần, capsid đóng vai trò là thụ thể bám vào tế bào chủ."],
          ["Nucleocapsid", "Phức hợp gồm nucleic acid + vỏ capsid."],
          ["Màng bọc (envelope)", "Lớp phospholipid kép bao bọc bên ngoài vỏ capsid. CHỈ có ở virus có màng bọc, KHÔNG có ở virus trần."],
          ["Gai glycoprotein", "Nằm trên màng bọc, đóng vai trò THỤ THỂ giúp virus có màng bọc bám vào tế bào chủ."],
        ],
      },
      {
        subtitle: "C. Phân loại virus",
        type: "list",
        items: [
          "Dựa vào có hay không có màng phospholipid kép → 2 loại: VIRUS TRẦN và VIRUS CÓ MÀNG BỌC.",
          "Dựa vào loại nucleic acid → virus DNA và virus RNA.",
          "Dựa vào vật chủ → virus ở thực vật, virus ở động vật, virus ở vi sinh vật (phage).",
          "Virus trần (Adenovirus, Phage T4 dạng đơn giản…): chỉ gồm lõi nucleic acid + vỏ capsid; thụ thể là protein của vỏ capsid.",
          "Virus có màng bọc (HIV, virus cúm, SARS-CoV-2): có thêm màng phospholipid kép với gai glycoprotein.",
        ],
      },
      {
        subtitle: "D. Chu trình nhân lên của virus (5 GIAI ĐOẠN)",
        type: "steps",
        items: [
          {
            step: "1",
            name: "Hấp phụ",
            desc: "Virus cố định trên bề mặt tế bào chủ nhờ liên kết ĐẶC HIỆU giữa thụ thể của virus (gai glycoprotein hoặc protein vỏ capsid) với thụ thể của tế bào chủ.",
          },
          {
            step: "2",
            name: "Xâm nhập",
            desc: "Virus trần: đưa trực tiếp vật chất di truyền vào tế bào chủ (Phage T4 bơm DNA, để lại vỏ capsid bên ngoài) hoặc xâm nhập bằng cơ chế thực bào. Virus có màng bọc: dung hợp màng bọc với màng sinh chất → đưa nucleocapsid (hoặc cả virus) vào trong, sau đó cởi áo (uncoating).",
          },
          {
            step: "3",
            name: "Sinh tổng hợp",
            desc: "Vật chất di truyền của virus điều khiển bộ máy của tế bào chủ tổng hợp DNA/RNA và protein của virus mới.",
          },
          {
            step: "4",
            name: "Lắp ráp",
            desc: "Các thành phần (nucleic acid, vỏ capsid, gai…) được lắp ráp thành các hạt virus hoàn chỉnh.",
          },
          {
            step: "5",
            name: "Phóng thích (giải phóng)",
            desc: "Virus phá hủy tế bào chủ giải phóng đồng loạt (ly giải – virus trần như Phage T4 dùng lysozyme phá thành tế bào) HOẶC chui từ từ ra ngoài qua xuất bào, kéo theo màng tế bào tạo thành vỏ ngoài (virus có màng bọc) → tế bào chủ chết dần.",
          },
        ],
      },
      {
        subtitle: "E. So sánh Virus TRẦN và Virus CÓ MÀNG BỌC",
        type: "compare",
        items: [
          {
            title: "Giống nhau",
            points: [
              "Đều có lõi nucleic acid (DNA hoặc RNA) – mang thông tin di truyền.",
              "Đều có vỏ capsid (protein) bao bọc bảo vệ nucleic acid.",
              "Đều phải kí sinh nội bào bắt buộc, đều trải qua chu trình nhân lên 5 giai đoạn.",
            ],
          },
          {
            title: "Virus TRẦN",
            points: [
              "KHÔNG có màng bọc.",
              "Thụ thể là PROTEIN CỦA VỎ CAPSID.",
              "Xâm nhập: đưa TRỰC TIẾP vật chất di truyền vào tế bào chủ (Phage T4) hoặc xâm nhập nhờ cơ chế thực bào.",
              "Phóng thích: phá vỡ tế bào chủ → giải phóng đồng loạt nhiều virus (ly giải).",
            ],
          },
          {
            title: "Virus CÓ MÀNG BỌC",
            points: [
              "Có màng phospholipid kép bao bọc bên ngoài vỏ capsid.",
              "Trên màng bọc có GAI GLYCOPROTEIN đóng vai trò là thụ thể.",
              "Xâm nhập: dung hợp màng bọc với màng sinh chất, đưa cả nucleocapsid (hoặc cả virus) vào trong rồi mới cởi áo.",
              "Phóng thích: chui từ từ ra ngoài bằng XUẤT BÀO, kéo theo màng sinh chất tạo thành vỏ ngoài → tế bào chủ chết dần.",
              "Ví dụ: HIV, virus cúm, virus dengue, SARS-CoV-2.",
            ],
          },
        ],
      },
      {
        subtitle: "F. Tính ĐẶC HIỆU vật chủ",
        type: "tip-box",
        content:
          "Mỗi loại virus chỉ xâm nhập được vào MỘT SỐ tế bào vật chủ nhất định vì virus chỉ vào được tế bào khi có sự khớp ĐẶC HIỆU giữa thụ thể của VIRUS (gai glycoprotein hoặc protein vỏ capsid) và phân tử bề mặt (thụ thể) của TẾ BÀO CHỦ. Ví dụ: HIV có gai gp120 chỉ liên kết với thụ thể CD4 trên tế bào lympho T (T4) → phá hủy tế bào miễn dịch chủ chốt → AIDS.",
      },
      {
        subtitle: "G. HIV/AIDS – Cơ chế gây suy giảm miễn dịch",
        type: "list",
        items: [
          "HIV là virus RNA có màng bọc, gai glycoprotein gp120.",
          "gp120 liên kết đặc hiệu với thụ thể CD4 trên bề mặt tế bào lympho T (T4) – tế bào chủ chốt của hệ miễn dịch.",
          "HIV nhân lên trong T4, phá hủy T4 → suy giảm miễn dịch.",
          "Khi T4 giảm mạnh, cơ thể mất khả năng chống lại các mầm bệnh cơ hội → người bệnh dễ mắc loét da, tiêu chảy, lao, viêm phổi… → AIDS.",
        ],
      },
    ],
  },
];
