import { ItemType } from "../../interfaces.ts";
import { SectionType } from "../../interfaces.ts";
interface SidebarProps {
  sections: SectionType[];
}

import { Item } from "./Item";

export function ItemsList({ sections }: SidebarProps) {
  return (
    <div className="flex-1">
      {sections.map((section: SectionType) => {
        return (
          <div className="mb-8" key={section.id}>
            <h2>{section.label}</h2>
            <div className="grid grid-cols-4 gap-4">
              {section.items.map((item: ItemType) => (
                <Item item={item} key={item.id} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
