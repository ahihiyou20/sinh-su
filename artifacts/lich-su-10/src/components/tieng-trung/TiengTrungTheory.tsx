export function TiengTrungTheory() {
  return (
    <div className="space-y-8 text-[#222222]">

      {/* 1. 是…的 */}
      <section>
        <h3 className="text-base font-bold text-[#E2AF3F] mb-2">
          1. Cấu trúc nhấn mạnh 是…的 (shì…de)
        </h3>
        <div className="rounded-lg border border-[#2980B9] overflow-hidden text-sm">
          <div className="bg-[#2980B9] text-white px-3 py-1.5 font-semibold">Công thức &amp; Nguyên tắc</div>
          <div className="bg-[#D6EAF8] px-3 py-2 space-y-1 text-[#1A3A5C]">
            <p>Cấu trúc: <b>S + 是 + [Thành phần nhấn mạnh: thời gian / địa điểm / phương thức] + VP + 的</b></p>
            <p>Mục đích: Nhấn mạnh một yếu tố cụ thể của hành động <b>ĐÃ</b> xảy ra.</p>
            <p>Phủ định: PHẢI dùng <b>不是…的</b> — không được lược bỏ 是.</p>
            <p>Tân ngữ: có thể đứng trước hoặc sau 的. Ví dụ: 是昨天买的书 ↔ 是昨天买书的.</p>
          </div>
        </div>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1A3A5C] text-white">
                <th className="border border-[#aaa] px-2 py-1 text-left">Câu gốc</th>
                <th className="border border-[#aaa] px-2 py-1 text-left">Cấu trúc 是…的</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["今天朋友帮他做羊肉。", "是今天朋友帮他做羊肉的。"],
                ["他们坐飞机来。(Phủ định)", "他们不是坐飞机来的。"],
                ["这是昨天买的杯子。", "这个杯子是昨天买的。"],
              ].map(([a, b], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F2F3F4]"}>
                  <td className="border border-[#aaa] px-2 py-1">{a}</td>
                  <td className="border border-[#aaa] px-2 py-1 font-medium text-[#C0392B]">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Bổ ngữ thời lượng */}
      <section>
        <h3 className="text-base font-bold text-[#E2AF3F] mb-2">
          2. Bổ ngữ thời lượng (补语时量)
        </h3>
        <div className="rounded-lg border border-[#1E8449] overflow-hidden text-sm">
          <div className="bg-[#1E8449] text-white px-3 py-1.5 font-semibold">Ba cách xử lý khi động từ có tân ngữ</div>
          <div className="bg-[#D5F5E3] px-3 py-2 space-y-1 text-[#1A3A5C]">
            <p><b>Cách 1 — Lặp động từ:</b> V + O + V + (了) + Thời lượng → <b>他踢足球踢了十年了。</b></p>
            <p><b>Cách 2 — Đưa tân ngữ ra trước:</b> O + S + V + (了) + Thời lượng → <b>足球他踢了十年了。</b></p>
            <p><b>Cách 3 — Xen giữa:</b> V + (了) + Thời lượng + 的 + O → <b>他踢了十年的足球。</b></p>
            <p className="text-[#E67E22] font-semibold">Chú ý: 了 cuối câu (语气了) biểu thị hành động vẫn tiếp diễn đến hiện tại.</p>
          </div>
        </div>
      </section>

      {/* 3. Trợ động từ */}
      <section>
        <h3 className="text-base font-bold text-[#E2AF3F] mb-2">
          3. Hệ thống trợ động từ (能愿动词)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1A3A5C] text-white">
                {["Trợ động từ", "Cơ chế ngữ nghĩa", "Ví dụ tiêu biểu", "Lưu ý"].map((h) => (
                  <th key={h} className="border border-[#aaa] px-2 py-1 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["会 (huì)", "Khả năng qua học tập/rèn luyện", "我会说汉语。", "Kỹ năng cần tích lũy"],
                ["能 (néng)", "Khả năng do điều kiện thực tế", "我今天能来。", "Nhất thời/điều kiện vật lý"],
                ["可以 (kěyǐ)", "Cho phép / khả năng khách quan", "这里可以坐。", "Xin phép hoặc lịch sự"],
                ["要 (yào)", "Ý muốn mạnh / kế hoạch chắc chắn", "我要买新书。", "Phủ định: 不想 (nhẹ hơn)"],
                ["想 (xiǎng)", "Mong muốn chủ quan, nhẹ hơn 要", "很想去旅游。", "Hay đi với 很: 很想"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F2F3F4]"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`border border-[#aaa] px-2 py-1 ${ci === 0 ? "font-bold text-[#C0392B]" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Số ước lượng */}
      <section>
        <h3 className="text-base font-bold text-[#E2AF3F] mb-2">
          4. Số ước lượng: 几 (jǐ) và 多 (duō)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1A3A5C] text-white">
                {["Từ", "Ngưỡng số", "Vị trí cú pháp", "Ví dụ"].map((h) => (
                  <th key={h} className="border border-[#aaa] px-2 py-1 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["几 (jǐ)", "< 10", "几 + Lượng từ + N", "几个人，几本书"],
                ["几 (jǐ)", "10 – 99", "十几 / 几十 + Lượng từ", "十几个人，几十块"],
                ["多 (duō)", "Số tròn chục (>10)", "Số + 多 + Lượng từ + N", "三十多块钱"],
                ["多 (duō)", "< 10 (sau lượng từ)", "Số + Lượng từ + 多", "三个多星期"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F2F3F4]"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`border border-[#aaa] px-2 py-1 ${ci === 0 ? "font-bold text-[#C0392B]" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Trợ từ ngữ khí */}
      <section>
        <h3 className="text-base font-bold text-[#E2AF3F] mb-2">
          5. Trợ từ ngữ khí: 呢 / 吧 / 啊
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1A3A5C] text-white">
                <th className="border border-[#aaa] px-2 py-1 text-left">Trợ từ</th>
                <th className="border border-[#aaa] px-2 py-1 text-left">Chức năng & Sắc thái</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["呢 (ne)", "Nhấn mạnh trạng thái tiếp diễn hoặc tương phản; cũng dùng hỏi ngược lại (你呢?)"],
                ["吧 (ba)", "Làm giảm sắc thái mệnh lệnh → đề nghị; biểu thị phỏng đoán nhẹ"],
                ["啊 (a)", "Biến đổi âm theo ngữ cảnh (ya/wa/na); cảm thán, nhắc nhở, xác nhận"],
              ].map(([key, val], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F2F3F4]"}>
                  <td className="border border-[#aaa] px-2 py-1 font-bold text-[#C0392B] whitespace-nowrap">{key}</td>
                  <td className="border border-[#aaa] px-2 py-1">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. 一点儿 vs 有点儿 */}
      <section>
        <h3 className="text-base font-bold text-[#E2AF3F] mb-2">
          6. Phân biệt 一点儿 và 有点儿
        </h3>
        <div className="rounded-lg border border-[#F39C12] overflow-hidden text-sm">
          <div className="bg-[#F39C12] text-white px-3 py-1.5 font-semibold">Quy tắc phân biệt then chốt</div>
          <div className="bg-[#FEF9E7] px-3 py-2 space-y-1.5 text-[#1A3A5C]">
            <p><b>有点儿</b>: Phó từ đứng <b>TRƯỚC</b> tính từ, biểu thị sự không hài lòng hoặc vấn đề nhỏ.</p>
            <p className="pl-4 text-[#C0392B]">这个电脑有点儿小。 <span className="text-gray-500 italic">(Hơi nhỏ — tôi không thích lắm.)</span></p>
            <p><b>一点儿</b>: Đứng <b>SAU</b> tính từ (so sánh) hoặc trước danh từ (số lượng ít).</p>
            <p className="pl-4 text-[#C0392B]">这件衣服小了一点儿。 <span className="text-gray-500 italic">(Nhỏ hơn một chút.)</span></p>
            <p className="pl-4 text-[#C0392B]">喝一点儿水吧。 <span className="text-gray-500 italic">(Uống một chút nước đi.)</span></p>
          </div>
        </div>
      </section>

      {/* 7. Phó từ thời gian */}
      <section>
        <h3 className="text-base font-bold text-[#E2AF3F] mb-2">
          7. Phó từ & cấu trúc thời gian quan trọng
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1A3A5C] text-white">
                <th className="border border-[#aaa] px-2 py-1 text-left">Từ / Cấu trúc</th>
                <th className="border border-[#aaa] px-2 py-1 text-left">Chức năng & Ví dụ</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["再 (zài)", "Hành động sau khi điều kiện đáp ứng: 他回来再找他。"],
                ["还是 (háishi)", "Lựa chọn sau so sánh: 我们还是坐出租车吧。"],
                ["每…都 (měi…dōu)", "Nhấn mạnh toàn bộ/quy luật: 每天都很累。"],
                ["…的时候 (de shíhòu)", "Mốc thời gian: 王老师工作的时候…"],
                ["因为…所以", "Nhân quả: 因为生病了，所以没去。"],
                ["怎么 (zěnme)", "Hỏi nguyên nhân ngạc nhiên: 怎么还没来？"],
                ["一起 (yīqǐ)", "Đồng hành: 我们一起去吧。"],
              ].map(([key, val], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F2F3F4]"}>
                  <td className="border border-[#aaa] px-2 py-1 font-bold text-[#C0392B] whitespace-nowrap">{key}</td>
                  <td className="border border-[#aaa] px-2 py-1">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. Lặp động từ */}
      <section>
        <h3 className="text-base font-bold text-[#E2AF3F] mb-2">
          8. Động từ lặp lại & lượng từ lặp lại
        </h3>
        <div className="rounded-lg border border-[#2980B9] overflow-hidden text-sm">
          <div className="bg-[#2980B9] text-white px-3 py-1.5 font-semibold">Nguyên tắc lặp từ</div>
          <div className="bg-[#D6EAF8] px-3 py-2 space-y-1 text-[#1A3A5C]">
            <p><b>Đơn âm tiết AA:</b> 看看, 走走 — sắc thái thư thả, thử nhẹ.</p>
            <p><b>Song âm tiết ABAB:</b> 准备准备, 休息休息 — sắc thái nhẹ nhàng, không áp lực.</p>
            <p className="text-[#C0392B]">KHÔNG dùng đồng thời lặp động từ và 一下儿: <b>看看一下儿 ✗</b> → chọn 看看 hoặc 看一下儿.</p>
            <p><b>Lượng từ lặp:</b> 件件都很漂亮 = mỗi cái đều… (nhấn mạnh tính toàn thể).</p>
          </div>
        </div>
      </section>

      {/* 9. Trật tự từ */}
      <section>
        <h3 className="text-base font-bold text-[#E2AF3F] mb-2">
          9. Trật tự từ đặc biệt thường gặp trong đề thi
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1A3A5C] text-white">
                <th className="border border-[#aaa] px-2 py-1 text-left">Quy tắc</th>
                <th className="border border-[#aaa] px-2 py-1 text-left">Ví dụ đúng</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["去 + Địa điểm + Hoạt động (KHÔNG đảo)", "去南京旅游了。(✓)  |  去旅游南京了。(✗)"],
                ["Phương tiện + 要 + Thời gian", "开车要一个多小时。(✓)  |  要开车一个多小时。(✗)"],
                ["Trạng ngữ tần suất trước thời gian cụ thể", "每天早上 (✓)  |  早上每天 (✗)"],
                ["Định ngữ: Vị trí + Chỉ thị + Lượng + Tính + N", "旁边那个大的教室 (✓)"],
                ["数 + 点 + 多 (giờ lẻ)", "三点多 (✓)  |  三多点 (✗)"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F2F3F4]"}>
                  <td className="border border-[#aaa] px-2 py-1 font-medium">{row[0]}</td>
                  <td className="border border-[#aaa] px-2 py-1 text-xs">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 10. Từ vựng */}
      <section>
        <h3 className="text-base font-bold text-[#E2AF3F] mb-3">
          10. Từ vựng cốt lõi theo chủ đề
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Thể thao & Vận động",
              color: "#1E8449",
              bg: "#D5F5E3",
              words: [
                ["运动 (yùndòng)", "thể thao", "你喜欢什么运动？"],
                ["踢足球 (tī zúqiú)", "đá bóng", "一起去踢足球吧。"],
                ["打篮球 (dǎ lánqiú)", "chơi bóng rổ", "他喜欢打篮球。"],
                ["跑步 (pǎobù)", "chạy bộ", "每天早上跑步。"],
                ["游泳 (yóuyǒng)", "bơi lội", "他很少去游泳。"],
                ["散步 (sànbù)", "đi dạo", "吃完饭去散步。"],
              ],
            },
            {
              title: "Sức khỏe & Bệnh viện",
              color: "#C0392B",
              bg: "#FADBD8",
              words: [
                ["生病 (shēngbìng)", "bị bệnh", "他生病了。"],
                ["住院 (zhùyuàn)", "nhập viện", "奶奶住院了。"],
                ["出院 (chūyuàn)", "xuất viện", "他早就出院了。"],
                ["发烧 (fāshāo)", "sốt", "很多同学发烧了。"],
                ["吃药 (chī yào)", "uống thuốc", "每天吃药。"],
                ["好多了 (hǎo duō le)", "khỏe hơn nhiều", "现在身体好多了。"],
              ],
            },
            {
              title: "Thời gian & Tần suất",
              color: "#2980B9",
              bg: "#D6EAF8",
              words: [
                ["时候 (shíhou)", "lúc, khi", "…的时候 = khi…"],
                ["时间 (shíjiān)", "thời gian / dịp", "没有时间。"],
                ["这两天", "hai ngày nay", "这两天很忙。"],
                ["每天 (měitiān)", "mỗi ngày", "每天都锻炼。"],
                ["一会儿 (yīhuìr)", "một lúc", "等一会儿。"],
                ["很少 (hěn shǎo)", "rất ít khi", "很少生病。"],
              ],
            },
            {
              title: "Nơi chốn & Phương vị",
              color: "#E67E22",
              bg: "#FDEBD0",
              words: [
                ["旁边 (pángbiān)", "bên cạnh", "坐在旁边。"],
                ["外面 (wàimiàn)", "bên ngoài", "在外面散步。"],
                ["路上 (lùshang)", "trên đường", "在去机场的路上。"],
                ["附近 (fùjìn)", "gần đây", "附近有饭馆。"],
              ],
            },
          ].map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold mb-1" style={{ color: group.color }}>{group.title}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: group.color }} className="text-white">
                      <th className="border border-[#aaa] px-2 py-1 text-left">Từ & Pinyin</th>
                      <th className="border border-[#aaa] px-2 py-1 text-left">Nghĩa</th>
                      <th className="border border-[#aaa] px-2 py-1 text-left">Ví dụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.words.map((row, i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : group.bg }}>
                        <td className="border border-[#aaa] px-2 py-1 font-medium">{row[0]}</td>
                        <td className="border border-[#aaa] px-2 py-1">{row[1]}</td>
                        <td className="border border-[#aaa] px-2 py-1 text-xs text-[#555]">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Bảng cấu trúc câu */}
      <section>
        <h3 className="text-base font-bold text-[#E2AF3F] mb-2">
          11. Bảng tóm tắt cấu trúc câu quan trọng
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1A3A5C] text-white">
                {["Cấu trúc", "Công thức", "Ý nghĩa", "Ví dụ"].map((h) => (
                  <th key={h} className="border border-[#aaa] px-2 py-1 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["是…的", "S + 是 + [Focus] + VP + 的", "Nhấn mạnh chi tiết đã qua", "是昨天买的。"],
                ["离…+đánh giá", "A + 离 + B + 近/远", "Khoảng cách", "离这儿不远。"],
                ["在…路上", "在 + VP + 的路上", "Đang trên đường", "在去机场的路上。"],
                ["…的时候", "VP + 的时候, …", "Mốc thời gian", "工作的时候…"],
                ["每…都", "每 + T/N + 都 + VP", "Tất cả đều / luôn luôn", "每天都跑步。"],
                ["因为…所以", "因为 + S1, 所以 + S2", "Quan hệ nhân quả", "因为生病，所以…"],
                ["还是…吧", "还是 + VP + 吧", "Lựa chọn tốt hơn", "还是走路吧。"],
                ["再 (sau điều kiện)", "…以后 + 再 + VP", "Hành động sau điều kiện", "他回来再找他。"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F2F3F4]"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`border border-[#aaa] px-2 py-1 ${ci === 0 ? "font-bold text-[#C0392B]" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
