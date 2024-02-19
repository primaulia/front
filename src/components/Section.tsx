import { ItemType } from "../../interfaces.ts";
import { SectionType } from "../../interfaces.ts";
import { Item } from "./Item.tsx";

interface SectionProps {
  section: SectionType; // Use the existing Product interface
}

export function Section({ section }: SectionProps) {
  return (
    <div
      id={section.identifier}
      className={`mb-8 ${section.available ? "" : "cursor-not-allowed opacity-50"}`}
      key={section.id}
    >
      <h2 className="mb-2 text-2xl font-bold">{section.label}</h2>
      {/* <p className="mb-2">{section.description}</p> */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {section.products.map((item: ItemType) => (
          <Item item={item} section={section} key={item.id} />
        ))}
      </div>
    </div>
  );
}
