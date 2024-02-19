import { SectionType } from "../../interfaces.ts";

interface Sections {
  sections: SectionType[];
}

export function Sidebar({ sections }: Sections) {
  const handleSectionClick = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Use Motion Framer's `motion.scrollTo`
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      // Handle error if section ID is not found
      console.error(`Section with ID "${sectionId}" not found`);
    }
  };

  return (
    <div className="">
      <ul>
        {sections.map((section: SectionType) => (
          <li
            className="cursor-pointer border-l-4 py-2 pl-2"
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
  );
}
