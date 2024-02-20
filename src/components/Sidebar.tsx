import { useState } from "react";
import { MenuType } from "../../interfaces.ts";
import { SectionType } from "../../interfaces.ts";

interface MenuProps {
  menus: MenuType[];
}

export function Sidebar({ menus }: MenuProps) {
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
          {menus.map((menu: MenuType) => (
            <li key={menu.id}>
              <h2 className="mb-2 mt-4 hidden text-lg font-semibold md:block">
                {menu.label}
              </h2>
              <ul>
                {menu.sections.map((section: SectionType) => (
                  <li
                    className={`cursor-pointer border-b-4 py-2 pl-2 text-center font-semibold hover:border-red-500 md:border-b-0 md:border-l-4 md:text-left ${selectedSectionId === section.identifier && "border-red-500"}`}
                    key={section.id}
                    onClick={() => {
                      handleSectionClick(section.identifier);
                    }}
                  >
                    {section.label}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
