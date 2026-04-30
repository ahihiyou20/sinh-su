import type { QuickRef } from "@/subjects/types";

export const sinhHocQuickRef: QuickRef = {
  heading: "📊 Bảng so sánh nhanh kiểu dinh dưỡng VSV",
  headers: [
    "Kiểu dinh dưỡng",
    "Nguồn năng lượng",
    "Nguồn carbon",
    "Đại diện",
  ],
  rows: [
    {
      cells: [
        "Quang tự dưỡng",
        "Ánh sáng",
        "CO₂",
        "Vi khuẩn lam, tảo, vi khuẩn lưu huỳnh tía",
      ],
      nameColor: "#2ECC71",
    },
    {
      cells: [
        "Quang dị dưỡng",
        "Ánh sáng",
        "Chất hữu cơ",
        "Vi khuẩn không lưu huỳnh tía/lục",
      ],
      nameColor: "#3498DB",
    },
    {
      cells: [
        "Hóa tự dưỡng",
        "Phản ứng vô cơ",
        "CO₂",
        "Vi khuẩn nitrat hóa, vi khuẩn oxi hóa lưu huỳnh",
      ],
      nameColor: "#9B59B6",
    },
    {
      cells: [
        "Hóa dị dưỡng",
        "Chất hữu cơ",
        "Chất hữu cơ",
        "Hầu hết vi khuẩn, nấm, động vật nguyên sinh",
      ],
      nameColor: "#E67E22",
    },
  ],
};
