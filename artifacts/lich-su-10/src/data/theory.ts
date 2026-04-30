export type TheoryBlock =
    | {
        readonly type: "list";
        readonly heading: string;
        readonly items: ReadonlyArray<{ readonly main: string; readonly detail: string }>;
      }
    | {
        readonly type: "compare";
        readonly heading: string;
        readonly items: ReadonlyArray<{
          readonly label: string;
          readonly color: string;
          readonly points: ReadonlyArray<string>;
        }>;
      }
    | {
        readonly type: "warnings";
        readonly heading: string;
        readonly items: ReadonlyArray<string>;
      };

  export interface TheorySection {
    readonly id: string;
    readonly icon: string;
    readonly title: string;
    readonly color: string;
    readonly accent: string;
    readonly sections: ReadonlyArray<TheoryBlock>;
  }

  export const theoryData: ReadonlyArray<TheorySection> = [
{
"id": "van-lang-au-lac",
"icon": "🥁",
"title": "Văn Minh Văn Lang – Âu Lạc",
"color": "#1A6B5A",
"accent": "#2ECC71",
"sections": [
{
"heading": "Cơ sở hình thành",
"type": "list",
"items": [
{ "main": "Địa lý", "detail": "Lưu vực sông Hồng, khu vực Bắc Bộ và Bắc Trung Bộ Việt Nam ngày nay. Đồng bằng phù sa màu mỡ → thuận lợi nông nghiệp lúa nước." },
{ "main": "Kinh tế", "detail": "Nông nghiệp trồng lúa nước đạt trình độ cao là cơ sở kinh tế chủ yếu. Kĩ thuật luyện kim, đúc đồng (trống đồng Đông Sơn) phát triển rực rỡ." },
{ "main": "Xã hội", "detail": "Xã hội phân hóa thành giai cấp: quý tộc, dân tự do (thành viên công xã), nô tì – nhưng chưa có mâu thuẫn gay gắt. Đây là cơ sở xã hội dẫn đến sự hình thành nhà nước." },
{ "main": "Văn hóa gốc", "detail": "Hình thành trên nền văn hóa Đông Sơn (thời đại đồng thau → sắt sớm, thế kỉ VII–III TCN)." },
]
},
{
"heading": "Nhà nước Văn Lang & Âu Lạc",
"type": "compare",
"items": [
{
"label": "Văn Lang",
"color": "#1A6B5A",
"points": [
"Ra đời khoảng thế kỉ VII TCN – nhà nước đầu tiên trong lịch sử Việt Nam.",
"Kinh đô: Phong Châu (Phú Thọ) – trung du miền núi.",
"Vua Hùng đứng đầu; giúp việc là Lạc hầu, Lạc tướng, Bồ chính.",
"Bộ máy đơn giản, sơ khai (KHÔNG có Thượng thư, Tể tướng).",
"Kinh tế: Luyện kim đúc đồng đạt đỉnh cao – Trống đồng Đông Sơn là biểu tượng.",
]
},
{
"label": "Âu Lạc",
"color": "#3498DB",
"points": [
"Kế thừa và phát triển từ Văn Lang.",
"Kinh đô: Cổ Loa (Đông Anh, Hà Nội) – đồng bằng trung tâm.",
"Bộ máy nhà nước hoàn thiện hơn.",
"Sáng chế Nỏ Liên Châu (nỏ thần) – kĩ thuật quân sự vượt bậc.",
"Xây thành Cổ Loa – công trình kiến trúc tiêu biểu.",
]
}
]
},
{
"heading": "⚠️ Lưu ý làm bài",
"type": "warnings",
"items": [
"Bộ máy Văn Lang KHÔNG có: Thượng thư, Tể tướng, Trạng nguyên, Lục bộ.",
"Cơ sở XÃ HỘI = phân hóa giai cấp; cơ sở KINH TẾ = nông nghiệp lúa nước.",
"Nhà nước Văn Lang: sơ khai, chưa hoàn chỉnh (KHÔNG phải quan liêu tập quyền).",
"Chế độ công xã nguyên thủy đạt cực thịnh KHÔNG phải lý do ra đời nhà nước (câu 9 đáp án A).",
"Văn minh Văn Lang – Âu Lạc: biểu tượng là Trống đồng Đông Sơn (không phải tượng Phật, phù điêu Chăm).",
"Hai nhà nước đều dựa trên văn hóa Đông Sơn, nhưng KHÔNG phải đều thành lập sau kháng chiến (câu đúng/sai c – SAI).",
]
},
{
"heading": "Đời sống tinh thần",
"type": "list",
"items": [
{ "main": "Tín ngưỡng", "detail": "Thờ cúng tổ tiên, sùng bái tự nhiên (thần Mặt Trời, thần Nước…), tín ngưỡng phồn thực. CHƯA tiếp thu đạo Phật / Hinđu như Chăm Pa." },
{ "main": "Nghệ thuật", "detail": "Âm nhạc, ca múa quan trọng; điêu khắc đạt trình độ thẩm mĩ cao. Trống đồng là đỉnh cao nghệ thuật đúc đồng." },
]
}
]
},
{
"id": "cham-pa",
"icon": "🕌",
"title": "Văn Minh Chăm Pa",
"color": "#0E4D5C",
"accent": "#3498DB",
"sections": [
{
"heading": "Cơ sở hình thành",
"type": "list",
"items": [
{ "main": "Địa lý", "detail": "Duyên hải và một phần cao nguyên miền Trung Việt Nam. Lưu vực sông Thu Bồn – đồng bằng ven sông màu mỡ → nông nghiệp." },
{ "main": "Ra đời", "detail": "Khoảng thế kỉ II (sau Công nguyên) – trễ hơn Văn Lang." },
{ "main": "Điểm khác biệt so với Văn Lang–Âu Lạc", "detail": "Chịu ảnh hưởng sâu sắc của văn minh ẤN ĐỘ (tôn giáo, chữ viết, kiến trúc) – đây là điểm khác biệt cốt lõi." },
{ "main": "Thể chế", "detail": "Quân chủ chuyên chế (vua có toàn quyền). Vương hiệu Ấn Độ: Varman. Hai đại thần: Senapati (dân sự) & Tapatica (quân sự). Chưa có luật thành văn." },
]
},
{
"heading": "Kinh tế & Văn hóa",
"type": "list",
"items": [
{ "main": "Kinh tế", "detail": "Nông nghiệp lúa nước + thủ công nghiệp (kĩ thuật làm gốm, xây đền tháp đạt trình độ cao)." },
{ "main": "Tôn giáo", "detail": "Tiếp thu Hinđu giáo và Phật giáo từ Ấn Độ." },
{ "main": "Chữ viết", "detail": "Sáng tạo chữ Chăm cổ trên cơ sở chữ Phạn (Sanskrit) của Ấn Độ." },
{ "main": "Kiến trúc", "detail": "Thánh địa Mĩ Sơn – Di sản văn hóa thế giới UNESCO. Nghệ thuật điêu khắc đề tài thần thoại Ấn Độ (Shiva, Brahma, Vishnu, Garuda…)." },
]
},
{
"heading": "⚠️ Lưu ý làm bài",
"type": "warnings",
"items": [
"Điểm KHÁC BIỆT cơ sở hình thành Chăm Pa so với Văn Lang–Âu Lạc = ảnh hưởng văn minh Ấn Độ (không phải Trung Hoa).",
"Nhà nước Chăm Pa: quân chủ chuyên chế (không phải dân chủ).",
"Quan lại Chăm Pa KHÔNG có lương, không được cấp ruộng – sống nhờ cống nạp của dân.",
"Nghệ thuật điêu khắc Chăm Pa: đề tài chủ yếu là thần thoại Ấn Độ (không phải thần thoại Trung Hoa).",
"Công trình tiêu biểu: Thánh địa Mĩ Sơn (không phải chùa Một Cột, thành Cổ Loa, tháp Phổ Minh).",
"Đoạn tư liệu câu 1 phần II Chăm Pa: nói nghệ thuật Chăm Pa ở Thừa Thiên Huế – KHÔNG phải chỉ riêng Thừa Thiên Huế mới chịu ảnh hưởng Ấn Độ (đáp án b – SAI).",
"Si-va, Brahma, Vishnu là thần Hinđu giáo (không phải Phật giáo) → câu d – SAI.",
]
},
{
"heading": "Vai trò",
"type": "list",
"items": [
{ "main": "Đối với Việt Nam", "detail": "Là một bộ phận hình thành bản sắc văn hóa Việt Nam (không phải cơ sở chủ yếu của văn minh Đại Việt)." },
]
}
]
},
{
"id": "phu-nam",
"icon": "⛵",
"title": "Văn Minh Phù Nam",
"color": "#7A1F1F",
"accent": "#E74C3C",
"sections": [
{
"heading": "Cơ sở hình thành",
"type": "list",
"items": [
{ "main": "Địa lý", "detail": "Nam Bộ Việt Nam – lưu vực sông Cửu Long (sông Mê Công). Đồng bằng màu mỡ, nguồn nước dồi dào." },
{ "main": "Văn hóa gốc", "detail": "Văn hóa Óc Eo (KHÔNG phải Sa Huỳnh hay Đông Sơn)." },
{ "main": "Điểm nổi bật", "detail": "Văn minh biển và thương mại – Phù Nam giàu mạnh nhờ kinh tế biển. Giao lưu rộng với Đông Á, Nam Á, cả Tây Á và La Mã." },
{ "main": "Tôn giáo", "detail": "Chịu ảnh hưởng sâu sắc của văn minh Ấn Độ (Bà La Môn, Hinđu giáo). Có vua người Ấn Độ: Thiên Trúc Chiên Đàn, Kiều Trấn Như." },
{ "main": "Thể chế", "detail": "Quân chủ chuyên chế (giống Chăm Pa)." },
]
},
{
"heading": "Kinh tế đặc trưng",
"type": "list",
"items": [
{ "main": "Thương nghiệp biển", "detail": "Ngành kinh tế mạnh nhất, tạo nên sự giàu mạnh của Phù Nam. Đây là điểm KHÁC BIỆT với Văn Lang–Âu Lạc (chủ yếu nông nghiệp)." },
{ "main": "Nông nghiệp", "detail": "Lúa nước vùng đầm lầy – cung cấp lương thực (vai trò phụ hơn thương nghiệp)." },
{ "main": "Lâm thổ sản", "detail": "Vùng núi phía đông bắc cung cấp; sản phẩm không chỉ phục vụ nội địa mà còn buôn bán ra ngoài." },
]
},
{
"heading": "Đời sống",
"type": "list",
"items": [
{ "main": "Nhà ở", "detail": "Nhà sàn dựng bằng gỗ, mái lợp bằng lá (nhà gác nhiều tầng)." },
{ "main": "Trang phục", "detail": "Dùng vải may quần áo; có sự phân biệt theo tầng lớp xã hội (nhà giàu cắt gấm, người nghèo dùng vải)." },
{ "main": "Đồ dùng", "detail": "Dùng vàng bạc nạm khảm bát đĩa; xây thành bằng gỗ ken." },
]
},
{
"heading": "⚠️ Lưu ý làm bài",
"type": "warnings",
"items": [
"Văn hóa nền tảng của Phù Nam = Óc Eo (KHÔNG phải Sa Huỳnh).",
"Cơ sở kinh tế Phù Nam = thương nghiệp đường biển (KHÔNG phải nhu cầu trị thủy/chống xâm lược).",
"Điểm khác biệt kinh tế Phù Nam so với Văn Lang–Âu Lạc = thương nghiệp đường biển phát triển.",
"Sản phẩm lâm thổ sản Phù Nam có buôn bán ra ngoài (câu d Đoạn 4 phần II Phù Nam – SAI khi nói 'chỉ phục vụ nội địa').",
"Ba nền văn minh đều hình thành ở lưu vực các con sông – đây là điểm CHUNG.",
"Chăm Pa và Phù Nam đều chịu ảnh hưởng văn minh Ấn Độ; Văn Lang–Âu Lạc chịu ít ảnh hưởng hơn.",
]
}
]
}
];
  