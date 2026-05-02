import { vatLySections } from "@/data/vat-ly/sections";
import { SectionCard } from "@/components/sinh-hoc/SectionCard";

export function VatLyTheory() {
  return (
    <>
      {vatLySections.map((section) => (
        <SectionCard key={section.id} section={section} />
      ))}
    </>
  );
}
