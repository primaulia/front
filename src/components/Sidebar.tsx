import { SectionType } from "../../interfaces.ts";

interface Sections {
  sections: SectionType[];
}

export function Sidebar({ sections }: Sections) {
  return (
    <div className="">
      <ul>
        {sections.map((section: SectionType) => (
          <li key={section.id}>{section.label}</li>
        ))}
      </ul>
    </div>
  );
}
