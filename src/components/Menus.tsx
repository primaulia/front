import { SectionType } from "../../interfaces.ts";
import { MenuType } from "../../interfaces.ts";
import { Section } from "./Section.tsx";

interface MenuProps {
  menus: MenuType[];
}

export function Menus({ menus }: MenuProps) {
  return (
    <div className="flex-1">
      {menus.map((menu: MenuType) => (
        <>
          <h1
            className="my-4 bg-red-500 px-2 text-3xl font-semibold text-white"
            key={menu.id}
          >
            {menu.label}
          </h1>
          {menu.sections.map((section: SectionType) => (
            <Section section={section} key={section.id} />
          ))}
        </>
      ))}
    </div>
  );
}
