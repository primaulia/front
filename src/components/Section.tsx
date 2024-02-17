import { ItemType } from "../../interfaces.ts";
import { SectionType } from "../../interfaces.ts";
import { Item } from "./Item.tsx";

interface SectionProps {
  section: SectionType; // Use the existing Product interface
}

export function Section({ section }: SectionProps) {
  return (
    <div className="mb-8" key={section.id}>
      <h2 className="text-2xl font-bold">{section.label}</h2>
      <p className="mb-2">{section.description}</p>
      <div className="grid grid-cols-4 gap-4">
        {section.items.map((item: ItemType) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}