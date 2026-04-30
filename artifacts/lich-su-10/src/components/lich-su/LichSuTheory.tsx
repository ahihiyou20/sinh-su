import { theoryData } from "@/data/lich-su/theory";
import { TheoryCard } from "./TheoryCard";

export function LichSuTheory() {
  return (
    <>
      {theoryData.map((section) => (
        <TheoryCard key={section.id} section={section} />
      ))}
    </>
  );
}
