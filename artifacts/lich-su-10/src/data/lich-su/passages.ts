import type { SubjectQuestion } from "@/subjects/types";

// =============================================================================
// READING COMPREHENSION + TRUE/FALSE QUESTIONS — Lịch sử 10
// -----------------------------------------------------------------------------
// Each question has a `passage` (đoạn tư liệu) and two options: "Đúng" / "Sai".
// These come from the "Câu trắc nghiệm đúng sai" section of exam papers.
// =============================================================================

const PASSAGE_VL1 =
  `Kinh tế, chính trị, văn hóa, xã hội thời Âu Lạc đều tiếp tục phát triển trên cơ sở những thành tựu đã đạt được của nước Văn Lang trước đây. Văn hóa Đông Sơn vẫn là cơ sở văn hóa chung của nước Văn Lang và Âu Lạc. Do yêu cầu bức thiết của cuộc chiến đấu chống ngoại xâm, trong thời Âu Lạc, kĩ thuật quân sự có những tiến bộ vượt bậc. Đó là việc sáng chế ra nỏ Liên Châu bắn một lần nhiều phát tên, được coi là loại vũ khí mới, lợi hại (mà dân gian gọi là "Nỏ thần") và việc xây dựng kinh đô Cổ Loa (Đông Anh, Hà Nội), hình ảnh tập trung sự phát triển nhiều mặt của nước Âu Lạc.\n(Nguyễn Quang Ngọc, Tiến trình lịch sử Việt Nam, NXB Giáo dục, 2007)`;

const PASSAGE_VL2 =
  "Qua kết quả nghiên cứu xã hội và nhà nước Văn Lang đời Hùng Vương có thể ghi nhận đây là một hình thái xã hội đã có sự phân hóa sâu sắc nhưng chưa hình thành giai cấp đối kháng gay gắt, mà là những giai tầng xã hội với sự cách biệt đáng kể về của cải và xã hội, đó là tầng lớp quý tộc, tầng lớp nô tì tức nô lệ gia trưởng và tầng lớp dân tự do tức thành viên công xã nông thôn kiểu Á châu… Trên cơ sở phân hóa xã hội đó, kết hợp với yêu cầu phát triển nông nghiệp lúa nước gắn liền với yêu cầu thủy lợi và cả yêu cầu tự vệ, một nhà nước sơ khai đã ra đời. Đó là một hình thái nhà nước cổ đại ra đời đầu tiên trong lịch sử Việt Nam và cũng vào loại sớm nhất ở vùng Đông Nam Á.\n(Phan Huy Lê, Lịch sử và văn hóa Việt Nam tiếp cận bộ phận, NXB Giáo dục, 2007)";

const PASSAGE_VL3 =
  `…sự ra đời của nước Văn Lang trên cơ sở nền văn hóa Đông Sơn rực rỡ – thời đại đồng thau phát triển đến đỉnh cao và bước sang thời đại sắt sớm tồn tại vào khoảng thế kỉ thứ VII đến thế kỉ thứ III TCN. Nước Văn Lang còn là biểu hiện của sự liên kết các cộng đồng bộ lạc giữa khu vực đồng bằng sông Hồng với các khu vực đồng bằng sông Mã, sông Cả vùng Thanh – Nghệ trên nền tảng một nền văn hóa chung đa sắc thái. Văn hóa Đông Sơn, nhà nước Văn Lang tuy còn sơ khai, chất phác nhưng cũng đánh dấu sự trưởng thành, phát triển vượt bậc của các cộng đồng dân cư bản địa, một bước chuyển "cách mạng" từ thời đại hoang sơ nguyên thủy sang thời đại văn minh hơn. Có thể coi nhà nước Văn Lang là nhà nước đầu tiên trong lịch sử của dân tộc Việt Nam.\n(Vũ Duy Mền, Lịch sử Việt Nam, Tập 1, NXB Khoa học xã hội, 2017)`;

const PASSAGE_CP1 =
  "Chăm – pa là một trong những nền văn hóa chịu ảnh hưởng mạnh mẽ của văn hóa Ấn Độ trên hầu hết các lĩnh vực chính trị, tôn giáo và văn hóa – nghệ thuật. Nghệ thuật kiến trúc đền tháp cũng như các tác phẩm điêu khắc Chăm – pa ở Thừa Thiên Huế đều nằm trong truyền thống chung của nghệ thuật Chăm – pa ở miền Trung…; đề tài thể hiện trên các tác phẩm điêu khắc Chăm – pa ở khu vực phản ánh một cách đậm nét nội dung tư tưởng trong thần thoại Ấn Độ. Đó là hệ thống thần linh trong Hin – đu giáo như Si – va, Bra – ma, Vít – xnu, Pa – va – ti, các vị thần tám phương bốn hướng, Ra – va – na hay các con vật huyền thoại như bò thần Nan – đin, chim thần Ga – ru – đa, thủy quái Ma – ka – ra.\n(Nguyễn Văn Quảng, Những vấn đề lịch sử và văn hóa Chăm – pa, NXB Thế giới, 2021)";

const PASSAGE_CP2 =
  "Thể chế nhà nước (Chăm – pa) là quân chủ chuyên chế, vua có toàn quyền đối với đất nước và cư dân; thường dùng vương hiệu Ấn: Varman. Giúp vua trị nước có hai tôn quan (Đại thần): Senapati (Tây na bà đế) phụ trách dân sự và Tapatica (Tát bà địa ca) phụ trách quân sự. Bên dưới là hệ thống thuộc quan và ngoại quan. Quan lại nói chung không có lương, cũng không được cấp ruộng đất. Họ sống chủ yếu bằng cung cấp của dân vùng mình cai quản. Chăm pa chưa có luật thành văn. Những người có tội chịu hình phạt nặng nề như voi giày, gậy nhọn đâm vào đầu, bị bắt làm nô lệ.";

const PASSAGE_PN3 =
  "Người Phù Nam khôn khéo kiệt hiệt, đánh chiếm các nước láng giềng không thần phục, bắt dân họ làm nô tì, đổi chác vàng bạc, lụa bạch. Con trai nhà giầu sang thì cắt gấm làm quần, con gái thì quấn tóc, người nghèo thì lấy vải mà che. Họ dùng vàng bạc để nạm khảm bát đĩa. Họ biết đẵn gỗ làm nhà. Vua họ ở gác nhiều tầng. Họ lấy gỗ ken làm thành. Bờ bể nước họ có một loại cây gọi là đại nhược, lá dài tới 8 – 9 thước. Người ta bện lại để lợp nhà. Dân thường cũng làm nhà gác để ở.\n(Vũ Duy Mền, Lịch sử Việt Nam, Tập 1, NXB Khoa học xã hội, 2017)";

const PASSAGE_PN4 =
  "Văn hóa Óc Eo chứng tỏ Phù Nam đã có quan hệ giao lưu rộng rãi với thế giới Đông Á, Nam Á và cả Tây Á, La Mã, trong đó ảnh hưởng văn hóa Ấn Độ sâu đậm nhất. Trong phổ hệ vua Phù Nam, ngoài Hỗn Điền trong thời hình thành nhà nước sơ khai, còn có hai vua người Ấn Độ theo Bà La Môn là Thiên Trúc Chiên Đàn và Kiều Trấn Như…. Văn hóa Phù Nam nổi bật lên tính cách của một nền văn hóa biển và văn hóa thương mại. Nông nghiệp trồng lúa nước vùng đầm lầy giữ vai trò cung cấp lương thực cho cộng đồng cư dân, vùng núi phía đông bắc cung cấp lâm thổ sản, nhưng Phù Nam trở nên giàu mạnh là từ kinh tế biển và thương mại.\n(Phan Huy Lê, Lịch sử và văn hóa Việt Nam tiếp cận bộ phận, NXB Giáo dục, 2007)";

export const passageQuestions: readonly SubjectQuestion[] = [
  // ── Văn Lang – Âu Lạc: Câu 1 ──────────────────────────────────────────────
  {
    id: "ls-tf-vl1-a",
    passage: PASSAGE_VL1,
    scenarioId: "vl1",
    scenarioTitle: "Bối cảnh: Nước Âu Lạc tiếp nối Văn Lang",
    scenarioLead: "Đọc tư liệu chung dưới đây, rồi xác định các nhận định đúng/sai.",
    q: "Nhà nước Âu Lạc phát triển hơn về nhiều mặt so với nhà nước Văn Lang và độc lập hoàn toàn so với nhà nước Văn Lang.",
    opts: ["Đúng", "Sai"],
    ans: 1,
    explain: "SAI. Âu Lạc TIẾP NỐI và phát triển từ Văn Lang chứ không độc lập hoàn toàn; cơ sở kinh tế – văn hóa Đông Sơn là chung của cả hai.",
    tag: "Văn Lang – Âu Lạc",
    difficulty: "easy",
  },
  {
    id: "ls-tf-vl1-b",
    passage: PASSAGE_VL1,
    scenarioId: "vl1",
    scenarioTitle: "Bối cảnh: Nước Âu Lạc tiếp nối Văn Lang",
    scenarioLead: "Đọc tư liệu chung dưới đây, rồi xác định các nhận định đúng/sai.",
    q: "Nếu như kinh đô của nhà nước Văn Lang đặt tại trung du, miền núi thì kinh đô của nhà nước Âu Lạc đã di chuyển xuống khu vực trung tâm đồng bằng.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. Phong Châu (Phú Thọ) của Văn Lang là vùng trung du; Cổ Loa (Đông Anh, Hà Nội) của Âu Lạc thuộc trung tâm đồng bằng Bắc Bộ.",
    tag: "Văn Lang – Âu Lạc",
    difficulty: "medium",
  },
  {
    id: "ls-tf-vl1-c",
    passage: PASSAGE_VL1,
    scenarioId: "vl1",
    scenarioTitle: "Bối cảnh: Nước Âu Lạc tiếp nối Văn Lang",
    scenarioLead: "Đọc tư liệu chung dưới đây, rồi xác định các nhận định đúng/sai.",
    q: "Hai nhà nước Văn Lang và Âu Lạc đều được hình thành trên cơ sở nền văn hóa Đông Sơn và đều được hình thành sau một cuộc kháng chiến chống ngoại xâm.",
    opts: ["Đúng", "Sai"],
    ans: 1,
    explain: "SAI. Cả hai đều dựa trên văn hóa Đông Sơn là đúng, nhưng nhà nước Văn Lang ra đời từ nhu cầu nội tại (trị thủy, liên kết bộ lạc), không phải sau kháng chiến.",
    tag: "Văn Lang – Âu Lạc",
    difficulty: "hard",
  },
  {
    id: "ls-tf-vl1-d",
    passage: PASSAGE_VL1,
    scenarioId: "vl1",
    scenarioTitle: "Bối cảnh: Nước Âu Lạc tiếp nối Văn Lang",
    scenarioLead: "Đọc tư liệu chung dưới đây, rồi xác định các nhận định đúng/sai.",
    q: "Việc chế tạo ra nỏ Liên Châu và xây thành Cổ Loa (Hà Nội) của nhà nước Âu Lạc đều xuất phát từ nhu cầu bảo vệ đất nước.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. Cả nỏ Liên Châu lẫn thành Cổ Loa đều được tạo ra do 'yêu cầu bức thiết của cuộc chiến đấu chống ngoại xâm' theo đoạn tư liệu.",
    tag: "Văn Lang – Âu Lạc",
    difficulty: "easy",
  },

  // ── Văn Lang – Âu Lạc: Câu 2 ──────────────────────────────────────────────
  {
    id: "ls-tf-vl2-a",
    passage: PASSAGE_VL2,
    q: "Nhà nước Văn Lang ra đời trên cơ sở xã hội đã có sự phân chia thành các giai cấp, tầng lớp khác nhau và mâu thuẫn giai cấp đã trở nên gay gắt.",
    opts: ["Đúng", "Sai"],
    ans: 1,
    explain: "SAI. Tư liệu ghi rõ xã hội Văn Lang 'chưa hình thành giai cấp đối kháng gay gắt' mà chỉ có sự phân hóa thành các giai tầng xã hội.",
    tag: "Văn Lang – Âu Lạc",
    difficulty: "medium",
  },
  {
    id: "ls-tf-vl2-b",
    passage: PASSAGE_VL2,
    q: "Nhà nước Văn Lang là một trong những nhà nước ra đời sớm nhất ở khu vực Đông Nam Á và trên thế giới.",
    opts: ["Đúng", "Sai"],
    ans: 1,
    explain: "SAI. Tư liệu chỉ khẳng định Văn Lang 'vào loại sớm nhất ở vùng Đông Nam Á', không nói đến phạm vi toàn thế giới.",
    tag: "Văn Lang – Âu Lạc",
    difficulty: "hard",
  },
  {
    id: "ls-tf-vl2-c",
    passage: PASSAGE_VL2,
    q: "Xã hội Văn Lang phân chia thành 3 tầng lớp, trong đó tầng lớp quý tộc và tầng lớp dân tự do là tầng lớp thống trị.",
    opts: ["Đúng", "Sai"],
    ans: 1,
    explain: "SAI. Tầng lớp thống trị là quý tộc; dân tự do (thành viên công xã) là tầng lớp bị trị. Ngoài ra còn có tầng lớp nô tì.",
    tag: "Văn Lang – Âu Lạc",
    difficulty: "easy",
  },
  {
    id: "ls-tf-vl2-d",
    passage: PASSAGE_VL2,
    q: "Một trong những nguyên nhân thúc đẩy sự ra đời của nhà nước Văn Lang – Âu Lạc là do nhu cầu trị thủy và chống giặc ngoại xâm.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. Tư liệu nêu rõ 'yêu cầu phát triển nông nghiệp lúa nước gắn liền với yêu cầu thủy lợi và cả yêu cầu tự vệ' là những nguyên nhân thúc đẩy nhà nước ra đời.",
    tag: "Văn Lang – Âu Lạc",
    difficulty: "medium",
  },

  // ── Văn Lang – Âu Lạc: Câu 3 ──────────────────────────────────────────────
  {
    id: "ls-tf-vl3-a",
    passage: PASSAGE_VL3,
    q: "Nhà nước Văn Lang ra đời vào thế kỉ III TCN trên cơ sở liên kết các bộ lạc ở sông Hồng, sông Mã và sông Cả.",
    opts: ["Đúng", "Sai"],
    ans: 1,
    explain: "SAI. Tư liệu ghi rõ Văn Lang tồn tại 'vào khoảng thế kỉ thứ VII đến thế kỉ thứ III TCN', tức ra đời từ thế kỉ VII TCN, không phải thế kỉ III TCN.",
    tag: "Văn Lang – Âu Lạc",
    difficulty: "hard",
  },
  {
    id: "ls-tf-vl3-b",
    passage: PASSAGE_VL3,
    q: "Dưới thời kì Văn Lang, cư dân phổ biến sử dụng công cụ lao động bằng đồng thau và bước đầu sử dụng đồ sắt.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. Tư liệu mô tả đây là 'thời đại đồng thau phát triển đến đỉnh cao và bước sang thời đại sắt sớm'.",
    tag: "Văn Lang – Âu Lạc",
    difficulty: "easy",
  },
  {
    id: "ls-tf-vl3-c",
    passage: PASSAGE_VL3,
    q: "Nhà nước Văn Lang tồn tại khoảng 4 thế kỉ (từ thế kỉ VII đến thế kỉ III TCN) và được coi là nhà nước cổ đại đầu tiên của lịch sử Việt Nam.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. Theo tư liệu, Văn Lang tồn tại khoảng thế kỉ VII – III TCN (≈ 4 thế kỉ) và 'có thể coi nhà nước Văn Lang là nhà nước đầu tiên trong lịch sử của dân tộc Việt Nam'.",
    tag: "Văn Lang – Âu Lạc",
    difficulty: "medium",
  },
  {
    id: "ls-tf-vl3-d",
    passage: PASSAGE_VL3,
    q: "Sự ra đời của nhà nước Văn Lang đánh dấu bước chuyển của lịch sử Việt Nam từ thời kì nguyên thủy sang thời kì cổ đại.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. Tư liệu viết đây là 'một bước chuyển cách mạng từ thời đại hoang sơ nguyên thủy sang thời đại văn minh hơn'.",
    tag: "Văn Lang – Âu Lạc",
    difficulty: "hard",
  },

  // ── Chăm Pa: Câu 1 ─────────────────────────────────────────────────────────
  {
    id: "ls-tf-cp1-a",
    passage: PASSAGE_CP1,
    q: "Đoạn tư liệu cung cấp thông tin về ảnh hưởng của văn hóa Ấn Độ đến văn minh Chăm – pa trên tất cả các lĩnh vực chính trị, tôn giáo, văn hóa – nghệ thuật.",
    opts: ["Đúng", "Sai"],
    ans: 1,
    explain: "SAI. Tư liệu chủ yếu mô tả ảnh hưởng trong lĩnh vực kiến trúc, điêu khắc và thần thoại Hin-đu giáo; không cung cấp thông tin chi tiết về chính trị.",
    tag: "Chăm Pa",
    difficulty: "easy",
  },
  {
    id: "ls-tf-cp1-b",
    passage: PASSAGE_CP1,
    q: "Chỉ có nghệ thuật kiến trúc điêu khắc Chăm – pa ở Thừa Thiên Huế chịu ảnh hưởng sâu sắc của văn minh Ấn Độ.",
    opts: ["Đúng", "Sai"],
    ans: 1,
    explain: "SAI. Ví dụ Thừa Thiên Huế chỉ là một trường hợp tiêu biểu; toàn bộ nghệ thuật Chăm – pa ở miền Trung đều nằm trong 'truyền thống chung' chịu ảnh hưởng Ấn Độ.",
    tag: "Chăm Pa",
    difficulty: "medium",
  },
  {
    id: "ls-tf-cp1-c",
    passage: PASSAGE_CP1,
    q: "Các nhân vật trong thần thoại Ấn Độ đã trở thành đề tài chủ yếu trong các tác phẩm điêu khắc của cư dân Chăm – pa.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. Tư liệu khẳng định đề tài điêu khắc 'phản ánh một cách đậm nét nội dung tư tưởng trong thần thoại Ấn Độ' — các thần của Hin-đu giáo và thú thần huyền thoại.",
    tag: "Chăm Pa",
    difficulty: "hard",
  },
  {
    id: "ls-tf-cp1-d",
    passage: PASSAGE_CP1,
    q: "Các vị thần như Si – va, Bra – ma, Vít – xnu được thờ tự trong đền tháp Chăm đều là các vị thần của đạo Hin – đu và đạo Phật.",
    opts: ["Đúng", "Sai"],
    ans: 1,
    explain: "SAI. Si-va, Bra-ma, Vít-xnu đều là thần trong Hin-đu giáo; tư liệu không đề cập đến đạo Phật.",
    tag: "Chăm Pa",
    difficulty: "easy",
  },

  // ── Chăm Pa: Câu 2 ─────────────────────────────────────────────────────────
  {
    id: "ls-tf-cp2-a",
    passage: PASSAGE_CP2,
    q: "Đoạn tư liệu cung cấp thông tin về tổ chức xã hội và nhà nước Chăm – pa.",
    opts: ["Đúng", "Sai"],
    ans: 1,
    explain: "SAI. Tư liệu chủ yếu đề cập đến tổ chức bộ máy nhà nước (vua, quan lại, hình phạt), không đề cập trực tiếp đến cơ cấu xã hội (giai tầng, dân chúng).",
    tag: "Chăm Pa",
    difficulty: "medium",
  },
  {
    id: "ls-tf-cp2-b",
    passage: PASSAGE_CP2,
    q: "Mô hình nhà nước của Chăm – pa có sự học hỏi và tiếp thu mô hình nhà nước của Ấn Độ.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. Việc sử dụng vương hiệu theo tiếng Ấn (Varman) và chức danh theo tiếng Phạn (Senapati, Tapatica) cho thấy nhà nước Chăm Pa tiếp thu mô hình nhà nước Ấn Độ.",
    tag: "Chăm Pa",
    difficulty: "hard",
  },
  {
    id: "ls-tf-cp2-c",
    passage: PASSAGE_CP2,
    q: "Hệ thống quan lại của nhà nước Chăm – pa được chia thành ba cấp: tôn quan, thuộc quan và ngoại quan.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. Tư liệu liệt kê rõ: tôn quan (Đại thần), thuộc quan và ngoại quan là ba cấp trong hệ thống quan lại Chăm Pa.",
    tag: "Chăm Pa",
    difficulty: "easy",
  },
  {
    id: "ls-tf-cp2-d",
    passage: PASSAGE_CP2,
    q: "Nhà nước Chăm – pa là nhà nước quân chủ chuyên chế trung ương tập quyền theo đường lối pháp trị.",
    opts: ["Đúng", "Sai"],
    ans: 1,
    explain: "SAI. Chăm Pa là quân chủ chuyên chế nhưng tư liệu ghi rõ 'Chăm pa chưa có luật thành văn', do đó không thể là nhà nước pháp trị.",
    tag: "Chăm Pa",
    difficulty: "medium",
  },

  // ── Phù Nam: Câu 3 ─────────────────────────────────────────────────────────
  {
    id: "ls-tf-pn3-a",
    passage: PASSAGE_PN3,
    q: "Đoạn tư liệu cung cấp một số thông tin về đời sống vật chất và tinh thần của cư dân cổ Phù Nam.",
    opts: ["Đúng", "Sai"],
    ans: 1,
    explain: "SAI. Tư liệu chủ yếu mô tả đời sống VẬT CHẤT (trang phục, nhà ở, ăn uống, chiến tranh), không đề cập đến đời sống tinh thần.",
    tag: "Phù Nam",
    difficulty: "hard",
  },
  {
    id: "ls-tf-pn3-b",
    passage: PASSAGE_PN3,
    q: "Trong quá trình tồn tại, vương quốc Phù Nam đã tiến hành nhiều cuộc chiến tranh để mở rộng lãnh thổ ra bên ngoài.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. Tư liệu viết 'đánh chiếm các nước láng giềng không thần phục, bắt dân họ làm nô tì' — chứng tỏ Phù Nam tiến hành chiến tranh xâm lược mở rộng lãnh thổ.",
    tag: "Phù Nam",
    difficulty: "easy",
  },
  {
    id: "ls-tf-pn3-c",
    passage: PASSAGE_PN3,
    q: "Cư dân Phù Nam có tập quán ở nhà sàn dựng bằng gỗ, mái lợp bằng lá.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. Tư liệu ghi rõ 'biết đẵn gỗ làm nhà', 'vua họ ở gác nhiều tầng', lá cây đại nhược được 'bện lại để lợp nhà'. Dân thường cũng 'làm nhà gác để ở'.",
    tag: "Phù Nam",
    difficulty: "medium",
  },
  {
    id: "ls-tf-pn3-d",
    passage: PASSAGE_PN3,
    q: "Cư dân Phù Nam đã biết dùng vải may quần áo, nhưng trang phục có sự phân biệt tùy theo từng tầng lớp xã hội.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. 'Con trai nhà giầu sang thì cắt gấm làm quần…người nghèo thì lấy vải mà che' — cho thấy trang phục phân biệt theo tầng lớp giàu nghèo.",
    tag: "Phù Nam",
    difficulty: "hard",
  },

  // ── Phù Nam: Câu 4 ─────────────────────────────────────────────────────────
  {
    id: "ls-tf-pn4-a",
    passage: PASSAGE_PN4,
    q: "Văn minh Phù Nam là một nền văn minh mang dấu ấn biển sâu sắc.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. Tư liệu nhấn mạnh 'Văn hóa Phù Nam nổi bật lên tính cách của một nền văn hóa biển và văn hóa thương mại' và Phù Nam 'trở nên giàu mạnh là từ kinh tế biển và thương mại'.",
    tag: "Phù Nam",
    difficulty: "easy",
  },
  {
    id: "ls-tf-pn4-b",
    passage: PASSAGE_PN4,
    q: "Cư dân Phù Nam đã sớm có quan hệ buôn bán với nhiều nước phương Đông và phương Tây.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. 'Văn hóa Óc Eo chứng tỏ Phù Nam đã có quan hệ giao lưu rộng rãi với thế giới Đông Á, Nam Á và cả Tây Á, La Mã'.",
    tag: "Phù Nam",
    difficulty: "medium",
  },
  {
    id: "ls-tf-pn4-c",
    passage: PASSAGE_PN4,
    q: "Trong số các vị vua của vương quốc Phù Nam, có một số vị vua là người Ấn Độ.",
    opts: ["Đúng", "Sai"],
    ans: 0,
    explain: "ĐÚNG. Tư liệu ghi rõ 'còn có hai vua người Ấn Độ theo Bà La Môn là Thiên Trúc Chiên Đàn và Kiều Trấn Như'.",
    tag: "Phù Nam",
    difficulty: "hard",
  },
  {
    id: "ls-tf-pn4-d",
    passage: PASSAGE_PN4,
    q: "Các sản phẩm từ nông nghiệp và khai thác lâm thổ sản của cư dân Phù Nam chỉ phục vụ cho nhu cầu của người dân chứ không buôn bán với bên ngoài.",
    opts: ["Đúng", "Sai"],
    ans: 1,
    explain: "SAI. Nông nghiệp và lâm thổ sản 'giữ vai trò cung cấp lương thực cho cộng đồng cư dân'; nhưng Phù Nam giàu mạnh nhờ kinh tế biển và thương mại với nhiều vùng, chứng tỏ có buôn bán đối ngoại.",
    tag: "Phù Nam",
    difficulty: "easy",
  },
];
