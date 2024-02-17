import { ItemType } from "../../interfaces.ts";

interface ItemProps {
  item: ItemType;
}

export function Item({ item }: ItemProps) {
  return (
    <div className="rounded-lg p-4 shadow-lg" key={item.id}>
      <h3 className="text-xl">{item.label}</h3>
      <p>{item.description}</p>
      <span>${item.price}</span>
    </div>
  );
}
