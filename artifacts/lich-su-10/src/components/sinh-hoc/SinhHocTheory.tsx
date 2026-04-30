import { sections } from "@/data/sinh-hoc/sections";
import { SectionCard } from "./SectionCard";

export function SinhHocTheory() {
  return (
    <>
      {sections.map((section) => (
        <SectionCard key={section.id} section={section} />
      ))}
    </>
  );
}
