import { ItemType } from "../../interfaces.ts";
import itemsData from "../../dummy/items.json";

import { Item } from "./Item";

export function ItemsList() {
  return (
    <div className="grid flex-1 grid-cols-3 gap-4">
      {itemsData.map((item: ItemType) => (
        <Item item={item} />
      ))}
    </div>
  );
}
