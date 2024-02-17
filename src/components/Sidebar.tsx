import { SectionType } from "../../interfaces.ts";

interface SidebarProps {
  sections: SectionType[];
}

export function Sidebar({ sections }: SidebarProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <ul>
        {sections.map((section: SectionType) => (
          <li key={section.id}>{section.label}</li>
        ))}
      </ul>
    </div>
  );
}
