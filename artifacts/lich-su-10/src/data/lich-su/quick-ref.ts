import type { QuickRef } from "@/subjects/types";

export const lichSuQuickRef: QuickRef = {
  heading: "Bảng so sánh nhanh ba nền văn minh",
  headers: [
    "Nhà nước",
    "Ra đời",
    "Lưu vực",
    "Địa điểm",
    "Thể chế",
    "Văn hóa gốc",
  ],
  rows: [
    {
      cells: [
        "Văn Lang",
        "Thế kỉ VII TCN",
        "Sông Hồng",
        "Phong Châu",
        "Vua Hùng + Lạc hầu",
        "Đông Sơn",
      ],
      nameColor: "var(--color-jade)",
    },
    {
      cells: [
        "Âu Lạc",
        "Sau Văn Lang",
        "Sông Hồng",
        "Cổ Loa (HN)",
        "Hoàn thiện hơn",
        "Đông Sơn",
      ],
      nameColor: "#3498DB",
    },
    {
      cells: [
        "Chăm Pa",
        "Thế kỉ II SCN",
        "Sông Thu Bồn",
        "Miền Trung",
        "Quân chủ chuyên chế",
        "Ảnh hưởng Ấn Độ",
      ],
      nameColor: "var(--color-teal)",
    },
    {
      cells: [
        "Phù Nam",
        "Sau Chăm Pa",
        "Sông Cửu Long",
        "Nam Bộ",
        "Quân chủ chuyên chế",
        "Văn hóa Óc Eo",
      ],
      nameColor: "var(--color-crimson)",
    },
  ],
};
