import type { QuickRef } from "@/subjects/types";

export const vatLyQuickRef: QuickRef = {
  heading: "⚡ Bảng tổng hợp công thức trọng tâm Vật lý HK2",
  headers: ["Đại lượng", "Kí hiệu", "Công thức", "Đơn vị"],
  rows: [
    {
      cells: ["Động lượng", "p", "p = mv", "kg·m/s = N·s"],
      nameColor: "#E74C3C",
    },
    {
      cells: ["Xung lượng", "J", "J = F·Δt = Δp", "N·s"],
      nameColor: "#E74C3C",
    },
    {
      cells: ["Động năng", "Wđ", "Wđ = ½mv²", "J"],
      nameColor: "#F39C12",
    },
    {
      cells: ["Thế năng trọng trường", "Wt", "Wt = mgh", "J"],
      nameColor: "#F39C12",
    },
    {
      cells: ["Cơ năng", "W", "W = Wđ + Wt", "J"],
      nameColor: "#F39C12",
    },
    {
      cells: ["Tốc độ dài", "v", "v = ωR = 2πR/T", "m/s"],
      nameColor: "#2ECC71",
    },
    {
      cells: ["Tốc độ góc", "ω", "ω = 2π/T = 2πf", "rad/s"],
      nameColor: "#2ECC71",
    },
    {
      cells: ["Gia tốc hướng tâm", "a_ht", "a_ht = v²/R = ω²R", "m/s²"],
      nameColor: "#2ECC71",
    },
    {
      cells: ["Lực hướng tâm", "F_ht", "F_ht = mv²/R = mω²R", "N"],
      nameColor: "#9B59B6",
    },
  ],
};
