function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gold mb-3 flex items-center gap-2">
      <span className="block w-3 h-px bg-gold/60" />
      {children}
    </h3>
  );
}

function RuleBox({ children, accent = "indigo" }: { children: React.ReactNode; accent?: "indigo" | "gold" | "teal" | "red" }) {
  const border =
    accent === "gold" ? "border-gold/30" :
    accent === "teal" ? "border-teal/30" :
    accent === "red" ? "border-red-500/30" :
    "border-indigo-500/30";
  const bar =
    accent === "gold" ? "bg-gold/80" :
    accent === "teal" ? "bg-teal/80" :
    accent === "red" ? "bg-red-500/80" :
    "bg-indigo-500/80";
  return (
    <div className={`rounded-lg border ${border} bg-surface-2 overflow-hidden text-[13px]`}>
      <div className={`w-full h-0.5 ${bar}`} />
      <div className="px-4 py-3 space-y-1.5 text-text leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function DarkTable({ headers, rows, highlight = 0 }: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  highlight?: number;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[12.5px] border-collapse">
        <thead>
          <tr className="bg-white/[0.06] text-text-dim">
            {headers.map((h, i) => (
              <th key={i} className="border border-white/[0.06] px-3 py-2 text-left font-semibold">{h}</th>
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

export function KTPLTheory() {
  return (
    <div className="space-y-8 text-[13px] text-text">

      {/* Bài 19: Hệ thống chính trị */}
      <section>
        <SectionTitle>Bài 19 — Hệ thống chính trị Việt Nam</SectionTitle>
        <RuleBox accent="gold">
          <p><span className="text-gold font-semibold">Hệ thống chính trị VN</span> gồm: Đảng CSVN, Nhà nước CHXHCNVN, MTTQVN và các tổ chức chính trị - xã hội.</p>
          <p className="text-text-dim">Đảng CSVN: giữ vai trò lãnh đạo Nhà nước và xã hội.</p>
          <p className="text-text-dim">Nhà nước: thực hiện quyền lực chính trị thông qua lập pháp, hành pháp, tư pháp.</p>
          <p className="text-text-dim">MTTQ: liên minh các tổ chức xã hội, đại diện ý chí nhân dân.</p>
          <p><span className="text-indigo-300 font-semibold">Nguyên tắc:</span> Tập trung dân chủ • Pháp quyền XHCN • Đảng lãnh đạo • Nhân dân làm chủ.</p>
        </RuleBox>
      </section>

      {/* Quốc hội */}
      <section>
        <SectionTitle>Bài 21 — Quốc hội</SectionTitle>
        <RuleBox accent="indigo">
          <p><span className="text-gold font-semibold">Vị trí:</span> Cơ quan đại biểu cao nhất của nhân dân; cơ quan quyền lực nhà nước cao nhất.</p>
          <p><span className="text-gold font-semibold">Nhiệm kỳ:</span> 5 năm • Họp thường lệ <span className="text-indigo-300 font-semibold">2 kỳ/năm</span> • Có thể họp bất thường.</p>
          <p><span className="text-gold font-semibold">Phương thức họp:</span> Họp thường lệ — Họp không thường lệ.</p>
        </RuleBox>
        <div className="mt-3">
          <DarkTable
            headers={["Chức năng", "Biểu hiện cụ thể"]}
            highlight={0}
            rows={[
              ["Lập hiến & lập pháp", "Ban hành, sửa đổi Hiến pháp và các đạo luật"],
              ["Quyết định vấn đề quan trọng", "Chính sách đối nội/đối ngoại, ngân sách, chiến tranh/hòa bình, đầu tư lớn"],
              ["Giám sát tối cao", "Giám sát Chính phủ, TAND tối cao, VKSND tối cao, Chủ tịch nước (không giám sát Tổng Bí thư)"],
              ["Tổ chức nhân sự", "Bầu, miễn nhiệm các chức danh nhà nước theo đề nghị của Chủ tịch nước"],
            ]}
          />
        </div>
        <div className="mt-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-text-dim mb-1.5">Cơ cấu tổ chức</p>
          <DarkTable
            headers={["Cơ quan", "Vai trò"]}
            highlight={0}
            rows={[
              ["Ủy ban Thường vụ Quốc hội", "Cơ quan thường trực — hoạt động giữa 2 kỳ họp"],
              ["Hội đồng Dân tộc", "Nghiên cứu, kiến nghị về chính sách dân tộc"],
              ["Các Ủy ban của Quốc hội", "Thẩm tra dự án luật, kiến nghị chuyên ngành (VD: Ủy ban Tài chính, Ủy ban Pháp luật…)"],
            ]}
          />
        </div>
      </section>

      {/* Chủ tịch nước */}
      <section>
        <SectionTitle>Bài 21 — Chủ tịch nước</SectionTitle>
        <RuleBox accent="teal">
          <p><span className="text-gold font-semibold">Vị trí:</span> Người đứng đầu Nhà nước, thay mặt CHXHCNVN về đối nội và đối ngoại, thống lĩnh LLVTND.</p>
          <p><span className="text-gold font-semibold">Do Quốc hội bầu</span> trong số đại biểu Quốc hội, nhiệm kỳ 5 năm.</p>
        </RuleBox>
        <div className="mt-3">
          <DarkTable
            headers={["Nhiệm vụ & quyền hạn chính"]}
            highlight={-1}
            rows={[
              ["Công bố Hiến pháp, luật, pháp lệnh sau khi Quốc hội/UBTV QH thông qua"],
              ["Đề nghị Quốc hội bầu/miễn nhiệm/bãi nhiệm Thủ tướng Chính phủ, Chánh án TAND tối cao, Viện trưởng VKSND tối cao"],
              ["Ban hành quyết định đặc xá (căn cứ nghị quyết Quốc hội); công bố đại xá"],
              ["Tặng thưởng huân chương, huy chương, giải thưởng Nhà nước, danh hiệu vinh dự nhà nước"],
              ["Quyết định cho nhập/thôi/trở lại quốc tịch Việt Nam"],
              ["Ký kết điều ước quốc tế nhân danh Nhà nước; phong hàm, cấp đại sứ"],
            ]}
          />
        </div>
      </section>

      {/* Chính phủ */}
      <section>
        <SectionTitle>Bài 21 — Chính phủ</SectionTitle>
        <RuleBox accent="indigo">
          <p><span className="text-gold font-semibold">Vị trí:</span> Cơ quan hành chính nhà nước cao nhất, thực hiện quyền <span className="text-indigo-300 font-semibold">hành pháp</span>.</p>
          <p><span className="text-gold font-semibold">Cơ cấu:</span> Thủ tướng + các Phó Thủ tướng + các Bộ trưởng + Thủ trưởng cơ quan ngang bộ.</p>
        </RuleBox>
        <div className="mt-3">
          <DarkTable
            headers={["Chức năng hành pháp", "Biểu hiện"]}
            highlight={0}
            rows={[
              ["Đề xuất xây dựng chính sách", "Xây dựng chính sách vĩ mô, trình dự thảo luật trước Quốc hội"],
              ["Thiết lập trật tự hành chính", "Quản lý thống nhất nền hành chính quốc gia; ban hành văn bản hành chính (CCCD, hộ khẩu…)"],
              ["Tổ chức và thực hiện pháp luật", "Triển khai các chính sách kinh tế-xã hội, bảo hộ công dân, đưa người VN ở nước ngoài về nước"],
            ]}
          />
        </div>
        <div className="mt-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-text-dim mb-1.5">Các cơ quan thuộc Chính phủ</p>
          <DarkTable
            headers={["Loại cơ quan", "Ví dụ"]}
            highlight={0}
            rows={[
              ["Bộ (cơ quan chuyên môn)", "Bộ GD&ĐT, Bộ Ngoại giao, Bộ Tư pháp, Bộ NN&MT…"],
              ["Cơ quan ngang bộ", "Thanh tra Chính phủ, Ngân hàng Nhà nước, Văn phòng Chính phủ…"],
            ]}
          />
        </div>
      </section>

      {/* Tòa án nhân dân */}
      <section>
        <SectionTitle>Bài 22 — Tòa án nhân dân</SectionTitle>
        <RuleBox accent="red">
          <p><span className="text-gold font-semibold">Vị trí:</span> Cơ quan xét xử của nước CHXHCNVN, thực hiện quyền <span className="text-red-400 font-semibold">tư pháp</span>.</p>
          <p><span className="text-gold font-semibold">Chánh án TAND tối cao</span>: do Quốc hội bầu theo đề nghị của Chủ tịch nước.</p>
        </RuleBox>
        <div className="mt-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-text-dim mb-1.5">Hệ thống tổ chức (3 cấp)</p>
          <DarkTable
            headers={["Cấp", "Cơ quan"]}
            highlight={0}
            rows={[
              ["Cấp 1 — Tối cao", "Tòa án nhân dân tối cao"],
              ["Cấp 2 — Cấp tỉnh", "TAND cấp tỉnh, thành phố trực thuộc TW"],
              ["Cấp 3 — Khu vực", "TAND khu vực (thay thế TAND cấp huyện)"],
              ["Đặc biệt", "Tòa án quân sự (Trung ương, cấp quân khu, khu vực)"],
            ]}
          />
        </div>
        <div className="mt-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-text-dim mb-1.5">Nguyên tắc hoạt động</p>
          <DarkTable
            headers={["Nguyên tắc", "Nội dung"]}
            highlight={0}
            rows={[
              ["Xét xử tập thể", "Hội đồng xét xử quyết định theo đa số"],
              ["Xét xử công khai", "Mọi người có thể tham dự; có thể xét xử kín trong trường hợp đặc biệt"],
              ["Độc lập & chỉ tuân theo luật", "Không xét xử theo ý kiến cá nhân hay chỉ đạo bên ngoài"],
              ["Bảo đảm tranh tụng", "Các bên có quyền trình bày, đối chất bình đẳng trước tòa"],
            ]}
          />
        </div>
      </section>

      {/* Viện kiểm sát nhân dân */}
      <section>
        <SectionTitle>Bài 22 — Viện kiểm sát nhân dân</SectionTitle>
        <RuleBox accent="gold">
          <p><span className="text-gold font-semibold">Hai chức năng chính:</span></p>
          <p>① <span className="text-indigo-300 font-semibold">Thực hành quyền công tố</span> — thay mặt Nhà nước buộc tội người phạm tội; truy tố bị can ra trước Tòa.</p>
          <p>② <span className="text-indigo-300 font-semibold">Kiểm sát hoạt động tư pháp</span> — kiểm tra, giám sát các hoạt động điều tra, xét xử, thi hành án.</p>
          <p><span className="text-gold font-semibold">Viện trưởng VKSND tối cao</span>: do Quốc hội bầu theo đề nghị của Chủ tịch nước.</p>
          <p><span className="text-gold font-semibold">Nguyên tắc tổ chức:</span> Tập trung thống nhất lãnh đạo theo ngành dọc — viện trưởng cấp dưới chịu sự lãnh đạo của viện trưởng <span className="text-indigo-300">cấp trên</span>.</p>
        </RuleBox>
        <div className="mt-3">
          <DarkTable
            headers={["Hệ thống tổ chức", "Cấp số"]}
            highlight={0}
            rows={[
              ["VKSND thường (dân sự)", "4 cấp: Tối cao → Cấp cao → Cấp tỉnh → Khu vực"],
              ["VKSQS (quân sự)", "3 cấp: Trung ương → Cấp quân khu → Khu vực"],
            ]}
          />
        </div>
      </section>

      {/* So sánh nhanh */}
      <section>
        <SectionTitle>Bảng so sánh tổng hợp</SectionTitle>
        <DarkTable
          headers={["Cơ quan", "Chức năng", "Người đứng đầu", "Cơ quan bầu/bổ nhiệm"]}
          highlight={0}
          rows={[
            ["Quốc hội", "Lập hiến, lập pháp, giám sát tối cao, quyết định vấn đề QT", "Chủ tịch Quốc hội", "Do nhân dân bầu"],
            ["Chủ tịch nước", "Nguyên thủ quốc gia — đối nội, đối ngoại, LLVTND", "—", "Quốc hội bầu"],
            ["Chính phủ", "Hành pháp — quản lý hành chính nhà nước", "Thủ tướng", "Quốc hội bầu (theo đề nghị CTN)"],
            ["TAND tối cao", "Xét xử — quyền tư pháp", "Chánh án", "Quốc hội bầu (theo đề nghị CTN)"],
            ["VKSND tối cao", "Công tố & kiểm sát tư pháp", "Viện trưởng", "Quốc hội bầu (theo đề nghị CTN)"],
          ]}
        />
      </section>

    </div>
  );
}
