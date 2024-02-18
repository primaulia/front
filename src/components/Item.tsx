import { useState } from "react";
import { motion } from "framer-motion";

import { ItemType } from "../../interfaces.ts";
import { Modal } from "./Modal.tsx";

interface ItemProps {
  item: ItemType;
}

export function Item({ item }: ItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleItemClick = () => setIsOpen(true);

  return (
    <motion.div className="rounded-lg p-4 shadow-lg" key={item.id}>
      <img src={item.imageUrl} alt={item.label} />
      <h3 className="text-xl">{item.label}</h3>
      <p>{item.description}</p>
      <div className="my-2 flex justify-between">
        <span>${item.price}</span>
        <button
          className={`${item.available ? "text-white" : "cursor-not-allowed text-gray-400"} rounded bg-indigo-500 px-2 `}
          onClick={handleItemClick}
        >
          {item.available ? "Add to cart" : "Not available"}
        </button>
      </div>
      {isOpen && <Modal item={item} onClose={() => setIsOpen(false)} />}
    </motion.div>
  );
}
