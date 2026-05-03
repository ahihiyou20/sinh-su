import type { Quiz } from "./types";

export const quizData: Quiz[] = [
  // ========== Câu 1-9 (Image 1) ==========
  {
    q: "Câu 1. Cho 4 phát biểu về kiểu dinh dưỡng của vi sinh vật:\n(1) Nấm men chuyển hóa tinh bột trong cơm gạo nếp tạo ethanol → nấm men có kiểu dinh dưỡng là HÓA TỰ DƯỠNG.\n(2) Khi muối chua rau củ, cần bổ sung đường làm nguồn năng lượng và carbon cho vi khuẩn lactic sinh trưởng nhanh.\n(3) Tảo Zooxanthellae cộng sinh với san hô, cung cấp carbohydrate qua phản ứng 6CO₂ + 6H₂O + Ánh sáng → C₆H₁₂O₆ + 6O₂ → có kiểu dinh dưỡng QUANG TỰ DƯỠNG.\n(4) Chế phẩm EMZEO chứa các vi sinh vật phân giải protein, lipid, cellulose trong rác hữu cơ → các VSV này có kiểu dinh dưỡng QUANG TỰ DƯỠNG.\nSố phát biểu ĐÚNG là?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explain:
      "Đúng (2) và (3). (1) SAI vì nấm men dùng chất hữu cơ (tinh bột) làm cả nguồn năng lượng và carbon → HÓA DỊ DƯỠNG. (4) SAI vì các VSV phân giải chất hữu cơ trong EMZEO dùng chính chất hữu cơ làm nguồn năng lượng và carbon → HÓA DỊ DƯỠNG (không phải quang tự dưỡng).",
    difficulty: "hard",
  },
  {
    q: "Câu 2. Loại vi sinh vật nào sau đây cần có trong quá trình sản xuất sữa chua?",
    options: ["Vi khuẩn lactic", "Nấm men", "Nấm sợi", "Vi khuẩn axetic"],
    answer: 0,
    explain:
      "Vi khuẩn lactic lên men đường lactose trong sữa thành acid lactic → sữa đông và có vị chua đặc trưng của sữa chua.",
    difficulty: "easy",
  },
  {
    q: "Câu 3. Loài nào sau đây KHÔNG PHẢI vi sinh vật?",
    options: ["Vi khuẩn lam", "Tảo đơn bào", "Trùng biến hình", "Nấm rơm"],
    answer: 3,
    explain:
      "Nấm rơm là sinh vật ĐA BÀO, có thể quan sát bằng mắt thường → không phải vi sinh vật. Vi khuẩn lam, tảo đơn bào, trùng biến hình đều là VSV.",
    difficulty: "easy",
  },
  {
    q: "Câu 4. Vi sinh vật thuộc những giới nào trong hệ thống phân loại 5 giới?",
    options: [
      "Giới Khởi sinh, giới Nấm, giới Thực vật",
      "Giới Khởi sinh, giới Nguyên sinh, giới Nấm",
      "Giới Nấm, giới Thực vật, giới Động vật",
      "Giới Khởi sinh, giới Thực vật, giới Động vật",
    ],
    answer: 1,
    explain:
      "VSV gồm các sinh vật nhỏ thuộc 3 giới: Khởi sinh (vi khuẩn, vi khuẩn cổ), Nguyên sinh (tảo đơn bào, ĐVNS), Nấm (nấm men, nấm mốc).",
    difficulty: "medium",
  },
  {
    q: "Câu 5. Cho các sinh vật sau: vi khuẩn lactic, nấm men, trùng roi, trùng giày, tảo silic, cây rêu, giun đất. Số vi sinh vật trong danh sách là?",
    options: ["4", "5", "6", "7"],
    answer: 1,
    explain:
      "Có 5 vi sinh vật: vi khuẩn lactic, nấm men, trùng roi, trùng giày, tảo silic. Cây rêu (thực vật đa bào) và giun đất (động vật đa bào) KHÔNG phải VSV.",
    difficulty: "medium",
  },
  {
    q: "Câu 6. Cho các đặc điểm: (1) Kích thước nhỏ bé, thường không nhìn thấy bằng mắt thường; (2) Khả năng phân bố rộng trong mọi môi trường; (3) Hấp thu và chuyển hóa vật chất nhanh; (4) Sinh trưởng và sinh sản nhanh. Số đặc điểm chung của vi sinh vật là?",
    options: ["1", "2", "3", "4"],
    answer: 3,
    explain:
      "Cả 4 đặc điểm đều là đặc điểm chung của vi sinh vật. Trong đó kích thước nhỏ là nguyên nhân dẫn đến tỉ lệ S/V lớn → trao đổi chất, sinh trưởng và sinh sản đều nhanh.",
    difficulty: "medium",
  },
  {
    q: "Câu 7. Kích thước vi sinh vật càng nhỏ thì?",
    options: [
      "Tốc độ trao đổi chất càng cao, sinh trưởng và sinh sản càng nhanh",
      "Tốc độ trao đổi chất càng cao, sinh trưởng và sinh sản càng chậm",
      "Tốc độ trao đổi chất càng thấp, sinh trưởng và sinh sản càng nhanh",
      "Tốc độ trao đổi chất càng thấp, sinh trưởng và sinh sản càng chậm",
    ],
    answer: 0,
    explain:
      "Kích thước nhỏ → tỉ lệ diện tích/thể tích (S/V) lớn → hấp thu, trao đổi chất nhanh → sinh trưởng và sinh sản nhanh.",
    difficulty: "easy",
  },
  {
    q: "Câu 8. Đặc điểm nào của vi sinh vật đã trở thành thế mạnh mà công nghệ sinh học đang tập trung khai thác?",
    options: [
      "Có kích thước rất nhỏ",
      "Có khả năng gây bệnh cho nhiều loài",
      "Có khả năng sinh trưởng và sinh sản nhanh",
      "Có khả năng phân bố rộng trong tất cả các môi trường",
    ],
    answer: 2,
    explain:
      "CNSH khai thác đặc điểm sinh trưởng – sinh sản nhanh của VSV để sản xuất nhanh và nhiều sản phẩm (kháng sinh, enzyme, sinh khối, thực phẩm lên men…).",
    difficulty: "medium",
  },
  {
    q: "Câu 9. Căn cứ để phân loại các kiểu dinh dưỡng ở vi sinh vật là?",
    options: [
      "Dựa vào nguồn carbon và nguồn cung cấp vật chất",
      "Dựa vào nguồn oxygen và nguồn cung cấp năng lượng",
      "Dựa vào nguồn oxygen và nguồn cung cấp vật chất",
      "Dựa vào nguồn carbon và nguồn cung cấp năng lượng",
    ],
    answer: 3,
    explain:
      "Phân loại kiểu dinh dưỡng VSV dựa vào 2 yếu tố: nguồn năng lượng (ánh sáng/hóa học) và nguồn carbon (CO₂/chất hữu cơ) → 4 kiểu: quang tự dưỡng, quang dị dưỡng, hóa tự dưỡng, hóa dị dưỡng.",
    difficulty: "hard",
  },

  // ========== Câu 10-20 (Image 2) ==========
  {
    q: "Câu 10. Căn cứ vào nguồn năng lượng, các kiểu dinh dưỡng ở vi sinh vật gồm?",
    options: [
      "Tự dưỡng và dị dưỡng",
      "Quang dưỡng và hóa dưỡng",
      "Quang dưỡng và tự dưỡng",
      "Hóa dưỡng và tự dưỡng",
    ],
    answer: 1,
    explain:
      "Theo nguồn năng lượng: ánh sáng → QUANG dưỡng; hóa học → HÓA dưỡng. (Theo nguồn carbon mới chia tự dưỡng – dị dưỡng.)",
  },
  {
    q: "Câu 11. Vi sinh vật sử dụng nguồn năng lượng là ánh sáng và nguồn carbon là CO₂ thì có kiểu dinh dưỡng là?",
    options: ["Quang dị dưỡng", "Hóa dị dưỡng", "Quang tự dưỡng", "Hóa tự dưỡng"],
    answer: 2,
    explain: "Năng lượng = ánh sáng → QUANG; carbon = CO₂ → TỰ DƯỠNG → quang tự dưỡng (ví dụ: vi khuẩn lam, tảo).",
  },
  {
    q: "Câu 12. Tảo, vi khuẩn lam có kiểu dinh dưỡng là?",
    options: ["Quang dị dưỡng", "Hóa dị dưỡng", "Quang tự dưỡng", "Hóa tự dưỡng"],
    answer: 2,
    explain:
      "Tảo và vi khuẩn lam quang hợp được: dùng năng lượng ánh sáng và CO₂ làm nguồn carbon → QUANG TỰ DƯỠNG.",
  },
  {
    q: "Câu 13. Sinh trưởng của vi sinh vật là?",
    options: [
      "Sự tăng lên về số lượng tế bào của QUẦN THỂ vi sinh vật thông qua sinh sản",
      "Sự tăng lên về số lượng tế bào của QUẦN THỂ vi sinh vật thông qua nguyên phân",
      "Sự tăng lên về số lượng tế bào của CƠ THỂ vi sinh vật thông qua sinh sản",
      "Sự tăng lên về số lượng tế bào của CƠ THỂ vi sinh vật thông qua nguyên phân",
    ],
    answer: 0,
    explain:
      "Sinh trưởng VSV được nghiên cứu ở mức QUẦN THỂ (không nghiên cứu cá thể vì kích thước quá nhỏ) – là sự tăng số lượng tế bào quần thể qua quá trình sinh sản.",
  },
  {
    q: "Câu 14. Sự sinh trưởng của quần thể vi khuẩn được nuôi trong môi trường KHÔNG được bổ sung dinh dưỡng và không rút sản phẩm/chất thải, diễn ra theo bao nhiêu pha?",
    options: ["4 pha", "2 pha", "3 pha", "1 pha"],
    answer: 0,
    explain: "Đó là nuôi cấy KHÔNG LIÊN TỤC (theo mẻ) → có 4 pha: tiềm phát → lũy thừa → cân bằng → suy vong.",
  },
  {
    q: "Câu 15. Trình tự các pha sinh trưởng của quần thể vi khuẩn trong môi trường nuôi cấy không liên tục là?",
    options: [
      "Pha tiềm phát → pha lũy thừa → pha cân bằng → pha suy vong",
      "Pha tiềm phát → pha cân bằng → pha lũy thừa → pha suy vong",
      "Pha lũy thừa → pha tiềm phát → pha suy vong → pha cân bằng",
      "Pha lũy thừa → pha tiềm phát → pha cân bằng → pha suy vong",
    ],
    answer: 0,
    explain:
      "Thứ tự đúng: Tiềm phát (thích nghi) → Lũy thừa (phân chia mạnh) → Cân bằng (sinh = chết) → Suy vong (chết > sinh).",
  },
  {
    q: "Câu 16. Pha tiềm phát KHÔNG có đặc điểm nào sau đây?",
    options: [
      "Dinh dưỡng đầy đủ cho sự sinh trưởng của vi khuẩn",
      "Vi khuẩn thích ứng dần với môi trường và tổng hợp các enzyme trao đổi chất",
      "Các chất độc hại cho sự sinh trưởng của quần thể vi khuẩn tích lũy nhiều",
      "Mật độ tế bào vi khuẩn trong quần thể chưa tăng (gần như không thay đổi)",
    ],
    answer: 2,
    explain:
      "Ở pha tiềm phát, dinh dưỡng còn dư thừa và VSV chưa hoạt động mạnh → chất độc CHƯA tích lũy nhiều. Việc chất độc tích lũy nhiều xảy ra ở pha cân bằng – suy vong.",
  },
  {
    q: "Câu 17. Trong nuôi cấy không liên tục, để thu được lượng sinh khối vi khuẩn TỐI ĐA nên thu hoạch vào thời điểm nào?",
    options: ["Đầu pha lũy thừa", "Giữa pha lũy thừa", "Cuối pha cân bằng", "Đầu pha cân bằng"],
    answer: 3,
    explain:
      "Sinh khối đạt cực đại ở ĐẦU pha cân bằng (khi quần thể vừa kết thúc tăng theo cấp số nhân và chưa bị chết nhiều) → đây là thời điểm thu hoạch tối ưu.",
  },
  {
    q: "Câu 18. Để khắc phục hiện tượng mật độ tế bào vi khuẩn KHÔNG tăng ở pha cân bằng, có thể thực hiện biện pháp nào?",
    options: [
      "Bổ sung thêm một lượng vi sinh vật giống thích hợp",
      "Bổ sung thêm nguồn chất dinh dưỡng vào môi trường",
      "Bổ sung thêm khí oxygen với nồng độ thích hợp",
      "Bổ sung thêm khí nitrogen với nồng độ thích hợp",
    ],
    answer: 1,
    explain:
      "Pha cân bằng xảy ra do dinh dưỡng bắt đầu cạn kiệt → bổ sung thêm chất dinh dưỡng sẽ giúp quần thể tiếp tục sinh trưởng (chuyển sang nuôi cấy liên tục).",
  },
  {
    q: "Câu 19. Sự sinh trưởng của quần thể vi sinh vật được đánh giá thông qua?",
    options: [
      "Sự tăng lên về số lượng tế bào của quần thể",
      "Sự tăng lên về kích thước của từng tế bào trong quần thể",
      "Sự tăng lên về khối lượng của từng tế bào trong quần thể",
      "Sự tăng lên về cả kích thước và khối lượng của từng tế bào trong quần thể",
    ],
    answer: 0,
    explain:
      "Vì kích thước cá thể VSV quá nhỏ → đánh giá sinh trưởng quần thể VSV bằng sự thay đổi SỐ LƯỢNG tế bào của quần thể.",
  },
  {
    q: "Câu 20. Định nghĩa đúng nhất về thời gian thế hệ ở vi khuẩn là?",
    options: [
      "Khoảng thời gian cần thiết để tế bào vi khuẩn bắt đầu phân chia",
      "Khoảng thời gian cần thiết để tế bào trong quần thể tăng GẤP ĐÔI",
      "Thời gian cần thiết để quần thể vi khuẩn đạt đến giai đoạn cân bằng",
      "Khoảng thời gian của quần thể vi khuẩn có tốc độ sinh trưởng tối đa",
    ],
    answer: 1,
    explain:
      "Thời gian thế hệ (g) = khoảng thời gian từ khi sinh ra một tế bào cho đến khi tế bào đó phân chia (= thời gian quần thể tăng gấp đôi). Ví dụ: E. coli có g ≈ 20 phút.",
  },

  // ========== Câu 21-23: Bối cảnh E.coli + glucose ==========
  {
    q: "Câu 21. (Bối cảnh: E. coli được nuôi cấy theo mẻ với glucose. Khi đến pha cân bằng và glucose < 2 g/L, người ta bổ sung glucose để duy trì 5 g/L thêm 3 giờ.) Sau khi BỔ SUNG dinh dưỡng, sinh trưởng quần thể E. coli chuyển sang pha nào?",
    options: ["Pha tiềm phát", "Pha lũy thừa", "Pha cân bằng", "Pha suy vong"],
    answer: 1,
    explain:
      "Khi dinh dưỡng được bổ sung, vi khuẩn ngay lập tức quay lại phân chia mạnh → chuyển sang PHA LŨY THỪA.",
    scenarioId: "ecoli-glucose-21-23",
    scenarioTitle: "Bối cảnh E. coli + glucose",
  },
  {
    q: "Câu 22. (Tiếp Câu 21) Sau 3 giờ bổ sung glucose, sinh trưởng quần thể E. coli sẽ chuyển sang pha nào?",
    options: [
      "Pha cân bằng",
      "Pha lũy thừa và cân bằng",
      "Pha cân bằng và suy vong",
      "Pha suy vong",
    ],
    answer: 2,
    explain:
      "Sau 3h, ngừng bổ sung glucose → glucose dần cạn kiệt và độc tố tích lũy → quần thể lần lượt chuyển sang PHA CÂN BẰNG rồi PHA SUY VONG.",
    scenarioId: "ecoli-glucose-21-23",
    scenarioTitle: "Bối cảnh E. coli + glucose",
  },
  {
    q: "Câu 23. Chất ức chế sinh trưởng đối với quần thể E. coli tích lũy NHIỀU NHẤT khi nào?",
    options: [
      "Trước khi bổ sung glucose",
      "Trong 3h bổ sung glucose",
      "Ngay khi dừng bổ sung glucose",
      "Kết thúc nuôi cấy",
    ],
    answer: 3,
    explain:
      "Trong nuôi cấy không liên tục, chất độc/chất ức chế tích lũy trong suốt quá trình nuôi và đạt cực đại ở thời điểm KẾT THÚC NUÔI CẤY (cuối pha suy vong).",
    difficulty: "medium",
  },
  {
    q: "Câu 24. Khi nói về pha cân bằng trong nuôi cấy không liên tục, có bao nhiêu phát biểu sau ĐÚNG?\nI. Dinh dưỡng bắt đầu thiếu hụt cho sinh trưởng của quần thể.\nII. Một số tế bào bị chết và một số khác tiếp tục phân chia.\nIII. Không có tế bào phân chia cũng như không có tế bào chết đi.\nIV. Số lượng tế bào sinh ra nhỏ hơn số lượng tế bào chết đi.",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explain:
      "Đúng I và II. Sai III (vẫn có tế bào phân chia và chết – chỉ là sinh = chết → mật độ ổn định) và IV (sinh ra nhỏ hơn chết là đặc điểm pha SUY VONG, không phải cân bằng).",
    difficulty: "hard",
  },
  {
    q: "Câu 25. Trong công nghệ sinh học, người ta sử dụng phương pháp nuôi cấy LIÊN TỤC nhằm mục đích nào?",
    options: [
      "Làm tăng tốc độ sinh trưởng của vi sinh vật",
      "Khảo sát đường cong sinh trưởng của vi sinh vật",
      "Duy trì quần thể vi sinh vật ở trạng thái cân bằng",
      "Thu được nhiều sản phẩm và sinh khối tế bào vi sinh vật",
    ],
    answer: 3,
    explain:
      "Nuôi cấy liên tục liên tục bổ sung dinh dưỡng – rút bớt sản phẩm → duy trì quần thể ở pha lũy thừa lâu dài → thu được nhiều sản phẩm (kháng sinh, enzyme…) và sinh khối VSV.",
    difficulty: "medium",
  },
  {
    q: "Câu 26. Một chủng vi khuẩn lactic Lactobacillus có thể dùng cả glucose và sorbitol. Khi nuôi trong môi trường chứa CẢ HAI nguồn carbon này, đường cong sinh trưởng có các pha theo trình tự nào? (Hiện tượng diauxie – ưu tiên dùng glucose trước)",
    options: [
      "Pha tiềm phát (glucose) → Pha lũy thừa (glucose) → Pha cân bằng (sorbitol) → Pha suy vong",
      "Pha tiềm phát (glucose) → Pha lũy thừa (glucose) → Pha tiềm phát (sorbitol) → Pha lũy thừa (sorbitol) → Pha cân bằng → Pha suy vong",
      "Pha tiềm phát (sorbitol) → Pha lũy thừa (sorbitol) → Pha tiềm phát (glucose) → Pha lũy thừa (glucose) → Pha cân bằng → Pha suy vong",
      "Pha tiềm phát (glucose) → Pha cân bằng (glucose) → Pha cân bằng (sorbitol) → Pha suy vong",
    ],
    answer: 1,
    explain:
      "Đây là hiện tượng diauxie cổ điển: VSV ưu tiên dùng đường ưa thích trước (glucose). Khi glucose cạn, VSV cần thời gian thích nghi và tổng hợp enzyme mới để dùng sorbitol → bắt đầu lại bằng pha tiềm phát (sorbitol), rồi lũy thừa (sorbitol), cuối cùng là cân bằng và suy vong.",
    difficulty: "hard",
  },
  {
    q: "Câu 27. Hầu hết các kháng sinh đã biết được sản xuất bởi loại vi sinh vật nào?",
    options: ["Nấm", "Vi khuẩn Gram dương", "Xạ khuẩn", "Vi khuẩn Gram âm"],
    answer: 2,
    explain:
      "Hơn 70% kháng sinh đã biết được sản xuất bởi XẠ KHUẨN (đặc biệt chi Streptomyces) – như streptomycin, tetracycline, erythromycin, vancomycin…",
  },
  {
    q: "Câu 28. Vì sao một số chất hoá học như phenol, kim loại nặng, alcohol thường được dùng làm chất diệt khuẩn?",
    options: [
      "Vì các chất này có thể gây biến tính và làm bất hoạt protein, phá hủy cấu trúc màng sinh chất",
      "Vì các chất này có thể tiêu diệt hoặc ức chế đặc hiệu sự sinh trưởng của một hoặc một vài nhóm vi sinh vật",
      "Vì các chất này có thể gây biến đổi vật chất di truyền làm giảm khả năng thích nghi của vi sinh vật",
      "Vì các chất này có thể ngăn cản sự hấp thụ nước khiến vi sinh vật bị chết do thiếu nước",
    ],
    answer: 0,
    explain:
      "Chất diệt khuẩn hoạt động không chọn lọc – gây biến tính protein (phenol, alcohol) hoặc liên kết với nhóm -SH của enzyme (kim loại nặng) và phá hủy màng sinh chất.",
  },
  {
    q: "Câu 29. Chất kháng sinh KHÁC chất diệt khuẩn ở đặc điểm là?",
    options: [
      "Có khả năng tiêu diệt hoặc ức chế vi sinh vật một cách CHỌN LỌC",
      "Không làm tổn thương đến da và mô sống của cơ thể người",
      "Có khả năng làm biến tính các protein, các loại màng tế bào",
      "Có khả năng sinh oxygen nguyên tử có tác dụng oxi hóa mạnh",
    ],
    answer: 0,
    explain:
      "Đặc điểm cốt lõi của kháng sinh là tính CHỌN LỌC – chỉ tiêu diệt/ức chế một số nhóm VSV nhất định, ít gây hại cho tế bào người. Chất diệt khuẩn thì không chọn lọc.",
  },
  {
    q: "Câu 30. Cho 4 phát biểu về thuốc kháng sinh:\n(1) Thuốc kháng sinh là chế phẩm có khả năng tiêu diệt hoặc ức chế đặc hiệu sự sinh trưởng của một hoặc một vài nhóm vi sinh vật.\n(2) Thuốc kháng sinh được dùng để điều trị các bệnh nhiễm trùng ở người, động vật và thực vật.\n(3) Việc lạm dụng thuốc kháng sinh gây hiện tượng nhờn thuốc (kháng kháng sinh) nhanh chóng ở nhiều VSV gây bệnh.\n(4) Dung dịch cồn-iodine có khả năng ức chế và tiêu diệt VSV nhưng KHÔNG được coi là chất kháng sinh.\nSố phát biểu ĐÚNG là?",
    options: ["1", "2", "3", "4"],
    answer: 3,
    explain:
      "Cả 4 phát biểu đều ĐÚNG. Cồn-iodine là chất sát khuẩn/diệt khuẩn (tác dụng không chọn lọc, dùng ngoài da), không phải kháng sinh.",
  },
  {
    q: "Câu 31. Có thể giữ thức ăn tương đối lâu trong tủ lạnh vì?",
    options: [
      "Nhiệt độ thấp KÌM HÃM sự sinh trưởng của vi sinh vật gây hư hỏng thức ăn",
      "Nhiệt độ thấp tiêu diệt hết tất cả vi sinh vật gây hư hỏng thức ăn",
      "Nhiệt độ thấp làm biến tính acid nucleic của vi sinh vật gây hư hỏng thức ăn",
      "Nhiệt độ thấp gây co nguyên sinh chất của vi sinh vật gây hư hỏng thức ăn",
    ],
    answer: 0,
    explain:
      "Nhiệt độ thấp chỉ KÌM HÃM (làm chậm) các phản ứng trao đổi chất, ức chế sự sinh trưởng của VSV gây hư hỏng – KHÔNG tiêu diệt hết VSV. Khi đưa thức ăn ra ngoài lâu, VSV sẽ phát triển trở lại.",
  },
  {
    q: "Câu 32. Cho 4 đặc điểm:\n(1) VSV có vai trò quan trọng trong phân giải hữu cơ, chuyển hoá vô cơ → tạo nhiều sản phẩm hữu ích.\n(2) Nhiều VSV sinh trưởng nhanh hoặc sống được trong môi trường cực khắc nghiệt.\n(3) VSV có khả năng phân hủy gây hư hỏng lương thực, đồ gỗ, nhà cửa.\n(4) Nhiều VSV sinh độc tố lây nhiễm vào nguyên liệu sản xuất, gây thiệt hại lớn.\nSố đặc điểm là CƠ SỞ KHOA HỌC của việc ỨNG DỤNG vi sinh vật trong thực tiễn là?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explain:
      "Đúng (1) và (2) – đây là các đặc điểm có lợi → cơ sở để ứng dụng VSV. (3) và (4) là tác hại của VSV → cơ sở để phòng chống chứ không phải để ứng dụng.",
  },
  {
    q: "Câu 33. Cơ sở khoa học của việc ứng dụng vi sinh vật trong sản xuất THUỐC điều trị bệnh cho con người là?",
    options: [
      "Nhiều VSV có khả năng tổng hợp nhiều chất có hoạt tính sinh học như kháng sinh, enzyme,…",
      "Nhiều VSV chỉ có khả năng sinh trưởng trong những giới hạn nhất định của các yếu tố môi trường",
      "Nhiều VSV có khả năng tổng hợp nên các chất độc hại, các chất ức chế sinh trưởng cho côn trùng",
      "Nhiều VSV có khả năng tổng hợp các chất hữu cơ từ chất vô cơ nhờ năng lượng ánh sáng Mặt Trời",
    ],
    answer: 0,
    explain:
      "Cơ sở để sản xuất thuốc là khả năng tổng hợp các chất có hoạt tính sinh học (kháng sinh, enzyme, vitamin, hormone…) của VSV.",
  },
  {
    q: "Câu 34. Để sản xuất chất kháng sinh, người ta thường sử dụng chủ yếu những nhóm vi sinh vật nào sau đây?\n(1) Xạ khuẩn (chi Streptomyces); (2) Vi khuẩn (chi Bacillus); (3) Động vật nguyên sinh; (4) Nấm (chi Penicillium).",
    options: ["(1), (2), (3)", "(1), (2), (4)", "(2), (3)", "(1), (4)"],
    answer: 1,
    explain:
      "Sản xuất kháng sinh chủ yếu dùng: Xạ khuẩn Streptomyces (streptomycin), vi khuẩn Bacillus (bacitracin), nấm Penicillium (penicillin). Động vật nguyên sinh KHÔNG sản xuất kháng sinh.",
    difficulty: "medium",
  },
  {
    q: "Câu 35. Nhóm vi sinh vật được sử dụng để sản xuất kháng sinh tự nhiên CHỦ YẾU là?",
    options: [
      "Xạ khuẩn và vi khuẩn",
      "Xạ khuẩn và vi tảo",
      "Vi khuẩn và nấm",
      "Xạ khuẩn và nấm",
    ],
    answer: 3,
    explain:
      "Hai nhóm chủ yếu sản xuất kháng sinh tự nhiên là XẠ KHUẨN (Streptomyces) và NẤM (Penicillium, Cephalosporium).",
    difficulty: "easy",
  },
  {
    q: "Câu 36. (Nối cột) Phát biểu nào sau đây đúng về thành phần cấu tạo virus?",
    options: [
      "Gai glycoprotein là phức hợp gồm acid nucleic và capsid",
      "Màng bọc là lớp phospholipid kép bao bọc bên ngoài vỏ capsid, không có ở virus trần",
      "Vỏ capsid nằm ở màng bọc, là thụ thể của virus",
      "Nucleic acid là vỏ bao bọc bên ngoài bảo vệ virus",
    ],
    answer: 1,
    explain:
      "Đáp án B đúng. Các đáp án khác đều sai mô tả: (A) đúng cho NUCLEOCAPSID; (C) đúng cho GAI GLYCOPROTEIN; (D) đúng cho VỎ CAPSID.",
    difficulty: "hard",
  },
  {
    q: "Câu 37. Vì sao một số virus có vỏ ngoài có thể xâm nhập vào tế bào chủ bằng cách DUNG HỢP MÀNG?",
    options: [
      "Vì vỏ ngoài virus có cấu tạo là lớp kép phospholipid",
      "Vì vỏ ngoài của virus và màng tế bào có cấu tạo hoàn toàn giống nhau",
      "Vì vỏ ngoài có chứa các protein đặc hiệu xúc tác cho phản ứng dung hợp",
      "Vì vỏ ngoài virus có khả năng tiết enzyme làm tan màng tế bào vật chủ",
    ],
    answer: 0,
    explain:
      "Vỏ ngoài của virus có màng bọc và màng sinh chất tế bào chủ đều có cấu tạo từ lớp KÉP PHOSPHOLIPID → có thể dung hợp với nhau để đưa nucleocapsid vào trong tế bào.",
    difficulty: "medium",
  },
  {
    q: "Câu 38. Virus TRẦN xâm nhập vào tế bào chủ bằng cách nào?",
    options: [
      "Xâm nhập vào tế bào chủ nhờ cơ chế thực bào",
      "Tiết enzyme lyzozyme làm tan màng tế bào vật chủ để chui vào trong",
      "Cởi bỏ vỏ capsid sau đó vận chuyển chủ động lõi nucleic acid vào trong tế bào",
      "Dung hợp vỏ ngoài với màng sinh chất của tế bào chủ để đưa nucleocapsid vào trong",
    ],
    answer: 0,
    explain:
      "Virus trần (không có màng bọc) xâm nhập vào tế bào động vật bằng cơ chế THỰC BÀO – tế bào chủ nuốt cả virus vào, sau đó cởi áo (giải phóng vật chất di truyền) trong tế bào.",
    difficulty: "medium",
  },
  {
    q: "Câu 39. Virus là?",
    options: [
      "Dạng sống KHÔNG có cấu tạo tế bào, kích thước rất nhỏ, sống KÍ SINH BẮT BUỘC trong tế bào của sinh vật",
      "Dạng sống ĐƠN BÀO, kích thước rất nhỏ, sống kí sinh bắt buộc trong tế bào của sinh vật",
      "Dạng sống không có cấu tạo tế bào, kích thước rất nhỏ, sống kí sinh ngoại bào hoặc nội bào",
      "Dạng sống có cấu tạo ĐA BÀO, kích thước rất nhỏ, sống kí sinh ngoại bào hoặc nội bào",
    ],
    answer: 0,
    explain:
      "Virus là dạng sống đặc biệt: KHÔNG có cấu tạo tế bào, KÍCH THƯỚC NHỎ (nm), sống KÍ SINH NỘI BÀO BẮT BUỘC (phải vào tế bào sinh vật mới nhân lên được).",
    difficulty: "easy",
  },
  {
    q: "Câu 40. Vì sao virus phải sống kí sinh nội bào BẮT BUỘC?",
    options: [
      "Vì virus không có cấu tạo tế bào nên phải kí sinh nội bào để sử dụng vật chất có sẵn trong tế bào chủ khi nhân lên",
      "Vì virus có kích thước rất nhỏ nên phải kí sinh nội bào để được bảo vệ trước tác động của ngoại cảnh",
      "Vì virus có quá trình trao đổi chất mạnh nên cần kí sinh nội bào để lấy nguồn dinh dưỡng dồi dào",
      "Vì virus rất mẫn cảm với chất kháng sinh nên cần kí sinh nội bào để được bảo vệ khỏi chất kháng sinh",
    ],
    answer: 0,
    explain:
      "Vì virus KHÔNG có cấu tạo tế bào, không có bộ máy enzyme và ribosome riêng → phải dùng nguyên liệu, năng lượng và bộ máy của tế bào chủ để tổng hợp các thành phần và nhân lên.",
    difficulty: "medium",
  },
  {
    q: "Câu 41. Thành phần CẤU TẠO CHÍNH của virus là?",
    options: [
      "Màng bọc và vỏ capsid",
      "Vỏ capsid và gai glycoprotein",
      "Màng bọc và gai glycoprotein",
      "Lõi nucleic acid và vỏ capsid",
    ],
    answer: 3,
    explain:
      "Cấu tạo CHÍNH (luôn có ở mọi virus) gồm 2 phần: LÕI NUCLEIC ACID (DNA hoặc RNA) và VỎ CAPSID (protein). Màng bọc và gai glycoprotein chỉ có ở virus có màng bọc.",
    difficulty: "easy",
  },
  {
    q: "Câu 42. Dựa vào đặc điểm có hay không có màng phospholipid kép, virus được chia làm 2 loại là?",
    options: [
      "Virus trần và virus có màng bọc",
      "Virus DNA và virus RNA",
      "Virus ở thực vật và virus ở động vật",
      "Virus trần và virus DNA",
    ],
    answer: 0,
    explain:
      "Theo có/không có màng bọc: VIRUS TRẦN (không có) và VIRUS CÓ MÀNG BỌC (có lớp phospholipid kép bên ngoài).",
    difficulty: "easy",
  },
  {
    q: "Câu 43. Virus TRẦN khác virus có màng bọc ở điểm là?",
    options: [
      "Có màng phospholipid kép bao bọc bên ngoài vỏ capsid",
      "Chỉ có vật chất di truyền là DNA mạch thẳng, dạng kép",
      "Chỉ có vật chất di truyền là RNA mạch vòng, dạng đơn",
      "Có thụ thể là protein của vỏ capsid",
    ],
    answer: 3,
    explain:
      "Khác biệt cốt lõi: virus trần dùng PROTEIN CỦA VỎ CAPSID làm thụ thể bám vào tế bào chủ; còn virus có màng bọc dùng GAI GLYCOPROTEIN trên màng bọc làm thụ thể.",
    difficulty: "medium",
  },
  {
    q: "Câu 44. Chu trình nhân lên của virus gồm?",
    options: ["2 giai đoạn", "3 giai đoạn", "4 giai đoạn", "5 giai đoạn"],
    answer: 3,
    explain:
      "Chu trình nhân lên của virus gồm 5 giai đoạn: HẤP PHỤ → XÂM NHẬP → SINH TỔNG HỢP → LẮP RÁP → PHÓNG THÍCH.",
    difficulty: "easy",
  },
  {
    q: "Câu 45. Virus cố định trên bề mặt tế bào chủ nhờ mối liên kết đặc hiệu giữa thụ thể của virus và thụ thể của tế bào chủ là giai đoạn nào?",
    options: ["Hấp phụ", "Xâm nhập", "Sinh tổng hợp", "Lắp ráp"],
    answer: 0,
    explain:
      "Đây là giai đoạn HẤP PHỤ – giai đoạn 1 của chu trình. Sự liên kết đặc hiệu giữa thụ thể của virus và thụ thể tế bào chủ là cơ sở của tính đặc hiệu vật chủ.",
    difficulty: "easy",
  },
  {
    q: "Câu 46. Phát biểu nào sau đây ĐÚNG về sự khác nhau trong giai đoạn xâm nhập của virus trần và virus có màng bọc?",
    options: [
      "Virus trần đưa TRỰC TIẾP vật chất di truyền vào trong tế bào chủ. Còn virus có màng bọc thì đưa cấu trúc nucleocapsid hoặc cả virus vào trong tế bào chủ rồi mới phá bỏ các cấu trúc bao quanh (cởi áo) để giải phóng vật chất di truyền.",
      "Virus trần đưa cấu trúc nucleocapsid hoặc cả virus vào trong tế bào chủ rồi mới cởi áo. Còn virus có màng bọc thì đưa trực tiếp vật chất di truyền vào tế bào chủ.",
      "Virus trần đưa trực tiếp vỏ capsid vào tế bào chủ. Còn virus có màng bọc đưa nucleocapsid vào rồi cởi áo.",
      "Virus trần đưa nucleocapsid hoặc cả virus vào rồi cởi áo. Còn virus có màng bọc đưa trực tiếp vỏ capsid vào tế bào chủ.",
    ],
    answer: 0,
    explain:
      "Virus trần (như Phage T4) bơm trực tiếp DNA vào tế bào chủ, vỏ capsid để lại bên ngoài. Virus có màng bọc đưa cả nucleocapsid (hoặc cả virus) vào trong rồi mới cởi áo trong tế bào chủ.",
    difficulty: "hard",
  },
  {
    q: "Câu 47. Điều nào sau đây là KHÔNG đúng khi nói về sự phóng thích của virus có MÀNG BỌC ra khỏi tế bào vật chủ?",
    options: [
      "Tổng hợp các đoạn màng có gắn glycoprotein và hợp với màng sinh chất",
      "Tổ hợp vỏ capsid và hệ gene đi ra ngoài theo kiểu xuất bào",
      "Tiết enzyme làm tan màng tế bào vật chủ để chui ra ngoài",
      "Kéo theo màng sinh chất của tế bào chủ và tạo thành vỏ ngoài của virus",
    ],
    answer: 2,
    explain:
      "Việc tiết enzyme phá vỡ màng tế bào để giải phóng đồng loạt là cách phóng thích của VIRUS TRẦN (ví dụ Phage T4 dùng lysozyme), KHÔNG phải của virus có màng bọc. Virus có màng bọc chui ra theo kiểu xuất bào, kéo theo màng sinh chất tạo thành vỏ ngoài.",
    difficulty: "hard",
  },
  {
    q: "Câu 48. Virus có thể phá hủy tế bào vật chủ để giải phóng đồng thời các hạt virus, hoặc chui từ từ ra ngoài và làm tế bào chủ chết dần là đặc điểm của giai đoạn?",
    options: ["Giải phóng (phóng thích)", "Hấp phụ", "Lắp ráp", "Sinh tổng hợp"],
    answer: 0,
    explain:
      "Đây là mô tả giai đoạn 5 – PHÓNG THÍCH. Có 2 kiểu phóng thích: (1) Ly giải đồng loạt (virus trần) và (2) Xuất bào từ từ (virus có màng bọc) → tế bào chủ chết dần.",
    difficulty: "medium",
  },
  {
    q: "Câu 49. Vì sao sự nhân lên của virus KHÔNG được gọi là quá trình sinh sản?",
    options: [
      "Vì từ một virus ban đầu có thể tạo ra vô số virus mới",
      "Vì từ một virus ban đầu chỉ có thể tạo ra hai virus mới",
      "Vì sự nhân lên của virus hoàn toàn PHỤ THUỘC vào tế bào chủ",
      "Vì sự nhân lên của virus không có sự kết hợp của giao tử đực và giao tử cái",
    ],
    answer: 2,
    explain:
      "Sinh sản đòi hỏi sinh vật tự thực hiện được. Virus KHÔNG tự nhân lên được – hoàn toàn phải dựa vào nguyên liệu, enzyme, ribosome và năng lượng của tế bào chủ → gọi là 'nhân lên' chứ không gọi là sinh sản.",
    difficulty: "medium",
  },
  {
    q: "Câu 50. Vì sao mỗi loại virus chỉ xâm nhập vào một số tế bào vật chủ NHẤT ĐỊNH?",
    options: [
      "Vì bề mặt của tế bào vật chủ được bảo vệ bởi một lớp protein chống lại sự xâm nhập của virus",
      "Vì bề mặt của virus có lớp vỏ ngoài hoặc vỏ capsid trợ với các thụ thể của tế bào vật chủ",
      "Vì virus chỉ xâm nhập được vào tế bào vật chủ khi có sự khớp đặc hiệu giữa phân tử bề mặt của virus và thụ thể bề mặt tế bào",
      "Vì virus chỉ xâm nhập được vào tế bào vật chủ khi có sự khớp đặc hiệu giữa thụ thể của virus và phân tử bề mặt tế bào",
    ],
    answer: 3,
    explain:
      "Tính đặc hiệu vật chủ: virus chỉ vào được tế bào khi THỤ THỂ của virus (gai glycoprotein hoặc protein vỏ capsid) khớp đặc hiệu với phân tử bề mặt tế bào chủ. Ví dụ: HIV chỉ tấn công tế bào có thụ thể CD4 (lympho T).",
    difficulty: "hard",
  },

  // ========== Bonus: 6 câu Nguyên phân – Giảm phân ==========
  {
    q: "Câu 51 (Nguyên phân). Một tế bào có 2n = 24 nguyên phân liên tiếp 3 lần. Số NST đơn tương đương mà môi trường cần cung cấp là?",
    options: ["144", "168", "192", "96"],
    answer: 1,
    explain: "Công thức: (2ᵏ − 1) × 2n = (2³ − 1) × 24 = 7 × 24 = 168 NST đơn.",
  },
  {
    q: "Câu 52 (Nguyên phân). Số NST trong một tế bào ở KÌ CUỐI nguyên phân ở người (2n = 46) là?",
    options: ["46 NST đơn", "92 NST đơn", "23 NST kép", "46 NST kép"],
    answer: 0,
    explain:
      "Kì cuối nguyên phân: tế bào đã phân chia → mỗi tế bào con có 2n = 46 NST ĐƠN (bằng tế bào mẹ ban đầu).",
  },
  {
    q: "Câu 53 (Giảm phân). Ở người, tế bào sinh tinh có 2n = 46 NST. Số NST trong giao tử tạo ra sau giảm phân là?",
    options: ["46 NST đơn", "23 NST kép", "23 NST đơn", "92 NST đơn"],
    answer: 2,
    explain: "Sau giảm phân: tạo 4 giao tử đơn bội, mỗi giao tử có n = 23 NST ĐƠN.",
  },
  {
    q: "Câu 54 (Giảm phân). Một loài có 2n = 16. Sau GIẢM PHÂN II, số NST trong mỗi tế bào con là?",
    options: ["8 NST đơn", "16 NST đơn", "8 NST kép", "4 NST đơn"],
    answer: 0,
    explain: "Sau GP II: 4 tế bào con đơn bội, mỗi tế bào có n = 8 NST ĐƠN.",
  },
  {
    q: "Câu 55 (Nguyên phân). Từ 1 tế bào lưỡng bội (2n) trải qua 5 lần nguyên phân liên tiếp sẽ tạo ra bao nhiêu tế bào con?",
    options: ["10", "16", "32", "64"],
    answer: 2,
    explain: "Số tế bào con = 2ᵏ = 2⁵ = 32 tế bào.",
  },
  {
    q: "Câu 56 (Nguyên phân). Trong nguyên phân, tế bào có 2n = 8. Số NST ở KÌ GIỮA là bao nhiêu?",
    options: ["8 NST đơn", "8 NST kép", "16 NST đơn", "4 NST kép"],
    answer: 1,
    explain:
      "Kì giữa nguyên phân: NST đã nhân đôi, chưa tách → có 2n = 8 NST KÉP (tương đương 16 chromatid).",
  },
];
