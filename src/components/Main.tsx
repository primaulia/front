import { SectionType } from "../../interfaces.ts";
import { Section } from "./Section.tsx";

interface Sections {
  sections: SectionType[];
}

export function Main({ sections }: Sections) {
  return (
    <div className="flex-1">
      {sections.map((section: SectionType) => {
        return <Section section={section} />;
      })}
    </div>
  );
}
