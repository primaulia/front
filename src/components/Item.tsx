import { ItemType } from "../../interfaces.ts";

interface ItemProps {
  item: ItemType; // Use the existing Product interface
}

export function Item({ item }: ItemProps) {
  return (
    <div className="rounded-lg shadow-lg" key={item.id}>
      <h2>{item.label}</h2>
      <h4>{item.price}</h4>
    </div>
  );
}
