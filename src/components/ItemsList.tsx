import { ItemType } from "../../interfaces.ts";
import itemsData from "../../items.json";

import { Item } from "./Item";

export function ItemsList() {
  return (
    <div className="flex gap-2">
      {itemsData.map((item: ItemType) => (
        <Item item={item} />
      ))}
    </div>
  );
}
