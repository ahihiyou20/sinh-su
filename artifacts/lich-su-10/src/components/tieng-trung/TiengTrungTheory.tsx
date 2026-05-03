function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gold mb-3 flex items-center gap-2">
      <span className="block w-3 h-px bg-gold/60" />
      {children}
    </h3>
  );
}

function RuleBox({ children, accent = "indigo" }: { children: React.ReactNode; accent?: "indigo" | "gold" | "teal" }) {
  const border = accent === "gold" ? "border-gold/30" : accent === "teal" ? "border-teal/30" : "border-indigo-500/30";
  const bar = accent === "gold" ? "bg-gold/80" : accent === "teal" ? "bg-teal/80" : "bg-indigo-500/80";
  return (
    <div className={`rounded-lg border ${border} bg-surface-2 overflow-hidden text-[13px]`}>
      <div className={`w-full h-0.5 ${bar}`} />
      <div className="px-4 py-3 space-y-1.5 text-text leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Formula({ children }: { children: React.ReactNode }) {
  return (
    <code className="inline-block bg-white/[0.06] border border-white/[0.08] text-indigo-300 rounded-md px-2 py-0.5 text-[12px] font-mono">
      {children}
    </code>
  );
}

function Ex({ correct, children }: { correct?: boolean; children: React.ReactNode }) {
  const color = correct === false ? "text-red-400" : "text-emerald-400";
  return <span className={`font-medium ${color}`}>{children}</span>;
}

function DarkTable({ headers, rows, highlight = 0 }: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  highlight?: number;
}) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-[12.5px] border-collapse">
        <thead>
          <tr className="bg-white/[0.06] text-text-dim">
            {headers.map((h, i) => (
              <th key={i} className="border border-white/[0.06] px-3 py-2 text-left font-semibold whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-transparent" : "bg-white/[0.025]"}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`border border-white/[0.06] px-3 py-1.5 leading-relaxed ${ci === highlight ? "text-gold font-semibold whitespace-nowrap" : "text-text"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TiengTrungTheory() {
  return (
    <div className="space-y-7 text-[13px] text-text">

      {/* 1. 是…的 */}
      <section>
        <SectionTitle>1. Cấu trúc nhấn mạnh 是…的 (shì…de)</SectionTitle>
        <RuleBox accent="indigo">
          <p>Cấu trúc: <Formula>S + 是 + [thời gian / địa điểm / phương thức] + VP + 的</Formula></p>
          <p className="text-text-dim">Mục đích: Nhấn mạnh một yếu tố của hành động <span className="text-text font-semibold">đã xảy ra</span>.</p>
          <p className="text-text-dim">Phủ định: dùng <span className="text-indigo-300 font-semibold">不是…的</span> — không được lược bỏ 是.</p>
          <p className="text-text-dim">Tân ngữ: đứng trước hoặc sau 的. <span className="text-text">是昨天买的书 ↔ 是昨天买书的</span></p>
        </RuleBox>
        <div className="mt-2">
          <DarkTable
            headers={["Câu gốc", "Cấu trúc 是…的"]}
            rows={[
              ["今天朋友帮他做羊肉。", <Ex correct>是今天朋友帮他做羊肉的。</Ex>],
              ["他们坐飞机来。(Phủ định)", <Ex correct>他们不是坐飞机来的。</Ex>],
              ["这是昨天买的杯子。", <Ex correct>这个杯子是昨天买的。</Ex>],
            ]}
          />
        </div>
      </section>

      {/* 2. Bổ ngữ thời lượng */}
      <section>
        <SectionTitle>2. Bổ ngữ thời lượng (补语时量)</SectionTitle>
        <RuleBox accent="teal">
          <p className="font-semibold text-text">Ba cách xử lý khi động từ có tân ngữ:</p>
          <p><span className="text-gold font-semibold">Cách 1 — Lặp động từ:</span> <Formula>V + O + V + (了) + Thời lượng</Formula><br /><span className="ml-2 text-emerald-400">他踢足球踢了十年了。</span></p>
          <p><span className="text-gold font-semibold">Cách 2 — Đưa tân ngữ ra trước:</span> <Formula>O + S + V + (了) + Thời lượng</Formula><br /><span className="ml-2 text-emerald-400">足球他踢了十年了。</span></p>
          <p><span className="text-gold font-semibold">Cách 3 — Xen giữa:</span> <Formula>V + (了) + Thời lượng + 的 + O</Formula><br /><span className="ml-2 text-emerald-400">他踢了十年的足球。</span></p>
          <p className="text-amber-400 text-[12px]">Lưu ý: 了 cuối câu (语气了) biểu thị hành động vẫn tiếp diễn đến hiện tại.</p>
        </RuleBox>
      </section>

      {/* 3. Trợ động từ */}
      <section>
        <SectionTitle>3. Hệ thống trợ động từ (能愿动词)</SectionTitle>
        <DarkTable
          headers={["Từ", "Ngữ nghĩa", "Ví dụ", "Lưu ý"]}
          highlight={0}
          rows={[
            ["会 (huì)", "Khả năng qua học tập", "我会说汉语。", "Kỹ năng tích lũy"],
            ["能 (néng)", "Khả năng do điều kiện thực tế", "我今天能来。", "Nhất thời / điều kiện vật lý"],
            ["可以 (kěyǐ)", "Cho phép / khách quan", "这里可以坐。", "Xin phép hoặc lịch sự"],
            ["要 (yào)", "Ý muốn mạnh / kế hoạch", "我要买新书。", "Phủ định: 不想 (nhẹ hơn)"],
            ["想 (xiǎng)", "Mong muốn chủ quan, nhẹ", "很想去旅游。", "Hay đi với 很: 很想"],
          ]}
        />
      </section>

      {/* 4. Số ước lượng */}
      <section>
        <SectionTitle>4. Số ước lượng: 几 (jǐ) và 多 (duō)</SectionTitle>
        <DarkTable
          headers={["Từ", "Ngưỡng số", "Vị trí cú pháp", "Ví dụ"]}
          highlight={0}
          rows={[
            ["几 (jǐ)", "< 10", "几 + Lượng từ + N", "几个人，几本书"],
            ["几 (jǐ)", "10 – 99", "十几 / 几十 + Lượng từ", "十几个人，几十块"],
            ["多 (duō)", "Số tròn chục (> 10)", "Số + 多 + Lượng từ + N", "三十多块钱"],
            ["多 (duō)", "< 10 (sau lượng từ)", "Số + Lượng từ + 多", "三个多星期"],
          ]}
        />
      </section>

      {/* 5. Trợ từ ngữ khí */}
      <section>
        <SectionTitle>5. Trợ từ ngữ khí: 呢 / 吧 / 啊</SectionTitle>
        <DarkTable
          headers={["Trợ từ", "Chức năng & sắc thái"]}
          highlight={0}
          rows={[
            ["呢 (ne)", "Nhấn mạnh trạng thái tiếp diễn hoặc tương phản; hỏi ngược (你呢?)"],
            ["吧 (ba)", "Giảm sắc thái mệnh lệnh → đề nghị; biểu thị phỏng đoán nhẹ"],
            ["啊 (a)", "Biến đổi âm theo ngữ cảnh (ya/wa/na); cảm thán, nhắc nhở, xác nhận"],
          ]}
        />
      </section>

      {/* 6. 一点儿 vs 有点儿 */}
      <section>
        <SectionTitle>6. Phân biệt 一点儿 và 有点儿</SectionTitle>
        <RuleBox accent="gold">
          <p>
            <span className="text-gold font-semibold">有点儿</span>
            {" "}— Phó từ đứng <span className="text-text font-semibold">TRƯỚC</span> tính từ, biểu thị sự không hài lòng hoặc vấn đề nhỏ.
          </p>
          <p className="pl-3">
            <Ex correct>这个电脑有点儿小。</Ex>
            <span className="text-text-dim ml-2 italic">(Hơi nhỏ — không thích lắm.)</span>
          </p>
          <p>
            <span className="text-gold font-semibold">一点儿</span>
            {" "}— Đứng <span className="text-text font-semibold">SAU</span> tính từ (so sánh) hoặc trước danh từ (ít).
          </p>
          <p className="pl-3">
            <Ex correct>这件衣服小了一点儿。</Ex>
            <span className="text-text-dim ml-2 italic">(Nhỏ hơn một chút.)</span>
          </p>
          <p className="pl-3">
            <Ex correct>喝一点儿水吧。</Ex>
            <span className="text-text-dim ml-2 italic">(Uống một chút nước đi.)</span>
          </p>
        </RuleBox>
      </section>

      {/* 7. Phó từ thời gian */}
      <section>
        <SectionTitle>7. Phó từ & cấu trúc thời gian quan trọng</SectionTitle>
        <DarkTable
          headers={["Từ / Cấu trúc", "Chức năng & Ví dụ"]}
          highlight={0}
          rows={[
            ["再 (zài)", "Hành động sau điều kiện đáp ứng: 他回来再找他。"],
            ["还是 (háishi)", "Lựa chọn sau so sánh: 我们还是坐出租车吧。"],
            ["每…都", "Nhấn mạnh toàn bộ/quy luật: 每天都很累。"],
            ["…的时候", "Mốc thời gian: 王老师工作的时候…"],
            ["因为…所以", "Nhân quả: 因为生病了，所以没去。"],
            ["怎么 (zěnme)", "Hỏi nguyên nhân ngạc nhiên: 怎么还没来？"],
            ["一起 (yīqǐ)", "Đồng hành: 我们一起去吧。"],
          ]}
        />
      </section>

      {/* 8. Lặp động từ */}
      <section>
        <SectionTitle>8. Động từ lặp lại & lượng từ lặp lại</SectionTitle>
        <RuleBox accent="indigo">
          <p><span className="text-gold font-semibold">Đơn âm tiết AA:</span> <span className="text-indigo-300">看看, 走走</span> <span className="text-text-dim">— sắc thái thư thả, thử nhẹ.</span></p>
          <p><span className="text-gold font-semibold">Song âm tiết ABAB:</span> <span className="text-indigo-300">准备准备, 休息休息</span> <span className="text-text-dim">— nhẹ nhàng, không áp lực.</span></p>
          <p className="text-amber-400">
            <Ex correct={false}>看看一下儿</Ex>
            <span className="text-text-dim"> ✗ — KHÔNG dùng đồng thời. Chọn </span>
            <Ex correct>看看</Ex>
            <span className="text-text-dim"> hoặc </span>
            <Ex correct>看一下儿</Ex>
          </p>
          <p><span className="text-gold font-semibold">Lượng từ lặp:</span> <span className="text-indigo-300">件件都很漂亮</span> <span className="text-text-dim">= mỗi cái đều… (nhấn mạnh tính toàn thể).</span></p>
        </RuleBox>
      </section>

      {/* 9. Trật tự từ */}
      <section>
        <SectionTitle>9. Trật tự từ đặc biệt thường gặp trong đề thi</SectionTitle>
        <DarkTable
          headers={["Quy tắc", "Ví dụ đúng / sai"]}
          rows={[
            ["去 + Địa điểm + Hoạt động (KHÔNG đảo)", <><Ex correct>去南京旅游了</Ex>  <Ex correct={false}>去旅游南京了</Ex></>],
            ["Phương tiện + 要 + Thời gian", <><Ex correct>开车要一个多小时</Ex>  <Ex correct={false}>要开车一个多小时</Ex></>],
            ["Trạng ngữ tần suất trước thời gian cụ thể", <><Ex correct>每天早上</Ex>  <Ex correct={false}>早上每天</Ex></>],
            ["Định ngữ: Vị trí + Chỉ thị + Lượng + Tính + N", <Ex correct>旁边那个大的教室</Ex>],
            ["数 + 点 + 多 (giờ lẻ)", <><Ex correct>三点多</Ex>  <Ex correct={false}>三多点</Ex></>],
          ]}
        />
      </section>

      {/* 10. Từ vựng */}
      <section>
        <SectionTitle>10. Từ vựng cốt lõi theo chủ đề</SectionTitle>
        <div className="space-y-4">
          {[
            {
              title: "Thể thao & Vận động",
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
              words: [
                ["旁边 (pángbiān)", "bên cạnh", "坐在旁边。"],
                ["外面 (wàimiàn)", "bên ngoài", "在外面散步。"],
                ["路上 (lùshang)", "trên đường", "在去机场的路上。"],
                ["附近 (fùjìn)", "gần đây", "附近有饭馆。"],
              ],
            },
          ].map((group) => (
            <div key={group.title}>
              <p className="text-[11px] font-semibold mb-1.5 text-text-dim uppercase tracking-wider">{group.title}</p>
              <DarkTable
                headers={["Từ & Pinyin", "Nghĩa", "Ví dụ"]}
                highlight={0}
                rows={group.words.map((row) => [
                  row[0],
                  <span className="text-text-dim">{row[1]}</span>,
                  <span className="text-text-dim italic">{row[2]}</span>,
                ])}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 11. Bảng cấu trúc câu */}
      <section>
        <SectionTitle>11. Bảng tóm tắt cấu trúc câu quan trọng</SectionTitle>
        <DarkTable
          headers={["Cấu trúc", "Công thức", "Ý nghĩa", "Ví dụ"]}
          highlight={0}
          rows={[
            ["是…的", "S + 是 + [Focus] + VP + 的", "Nhấn mạnh chi tiết đã qua", "是昨天买的。"],
            ["离…+ đánh giá", "A + 离 + B + 近/远", "Khoảng cách", "离这儿不远。"],
            ["在…路上", "在 + VP + 的路上", "Đang trên đường", "在去机场的路上。"],
            ["…的时候", "VP + 的时候, …", "Mốc thời gian", "工作的时候…"],
            ["每…都", "每 + T/N + 都 + VP", "Tất cả đều / luôn luôn", "每天都跑步。"],
            ["因为…所以", "因为 + S1, 所以 + S2", "Quan hệ nhân quả", "因为生病，所以…"],
            ["还是…吧", "还是 + VP + 吧", "Lựa chọn tốt hơn", "还是走路吧。"],
            ["再 (sau điều kiện)", "…以后 + 再 + VP", "Hành động sau điều kiện", "他回来再找他。"],
          ]}
        />
      </section>

    </div>
  );
}
