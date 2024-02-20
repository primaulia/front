import { useState } from "react";
import { motion } from "framer-motion";

import { ItemType } from "../../interfaces.ts";
import { SectionType } from "../../interfaces.ts";
import { Modal } from "./Modal.tsx";

interface ItemProps {
  item: ItemType;
  section: SectionType;
}

export function Item({ item, section }: ItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleItemClick = (item: ItemType) => {
    canClick(item, section) && setIsOpen(true);
  };

  const canClick = (item: ItemType, section: SectionType) =>
    item.available && section.available;

  return (
    <motion.div
      className="flex flex-col justify-between rounded-b-lg shadow-lg"
      key={item.id}
    >
      {item.imageUrl && <img src={item.imageUrl} alt={item.label} />}
      <div className="flex flex-1 flex-col p-2 md:p-4">
        <h3 className="text-xl">{item.label}</h3>
        <p className="flex-1">
          {item.description && item.description.substring(0, 20) + "..."}
        </p>
        <div className="my-2 flex justify-between justify-self-end">
          <span>${item.price}</span>
          <button
            className={`${canClick(item, section) ? "text-white" : "cursor-not-allowed text-gray-400"} rounded bg-indigo-500 px-2 `}
            onClick={() => handleItemClick(item)}
          >
            {canClick(item, section) ? "+" : "Not available"}
          </button>
        </div>
      </div>
      {isOpen && <Modal item={item} onClose={() => setIsOpen(false)} />}
    </motion.div>
  );
}
