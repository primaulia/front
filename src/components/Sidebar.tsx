import { useState } from "react";
import { SectionType } from "../../interfaces.ts";

interface Sections {
  sections: SectionType[];
}

export function Sidebar({ sections }: Sections) {
  const [selectedSectionId, setSelectedSectionId] = useState("");
  const handleSectionClick = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      setSelectedSectionId(sectionId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      // Handle error if section ID is not found
      console.error(`Section with ID "${sectionId}" not found`);
    }
  };

  return (
    <div className="relative">
      <div className="sticky top-0">
        <ul className="grid grid-cols-2 md:grid-cols-none">
          {sections.map((section: SectionType) => (
            <li
              className={`cursor-pointer border-b-4 py-2 pl-2 text-center font-semibold hover:border-indigo-500 md:border-b-0 md:border-l-4 md:text-left ${selectedSectionId === section.identifier && "border-indigo-500"}`}
              key={section.id}
              onClick={() => {
                handleSectionClick(section.identifier);
              }}
            >
              {section.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
