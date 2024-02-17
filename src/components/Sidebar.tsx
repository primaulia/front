import { SectionType } from "../../interfaces.ts";
import sectionsData from "../../dummy/sections.json";

export function Sidebar() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <ul>
        {sectionsData.map((section: SectionType) => (
          <li key={section.id}>{section.label}</li>
        ))}
      </ul>
    </div>
  );
}
