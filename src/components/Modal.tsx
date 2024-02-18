import { motion } from "framer-motion";
import { ItemType } from "../../interfaces.ts";

interface ModalProps {
  item: ItemType;
  onClose: () => void; // Use the existing Product interface
}

export function Modal({ item, onClose }: ModalProps) {
  const handleCloseClick = () => {
    onClose();
  };

  // Modal animations using Framer Motion
  const modalVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={modalVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black bg-opacity-50 transition-opacity"
      onClick={handleCloseClick}
    >
      <motion.div
        className="relative mx-auto rounded-md bg-white p-8 transition-transform"
        variants={modalVariants}
      >
        <button
          onClick={handleCloseClick}
          className="rounded bg-indigo-500 px-2 text-white"
        >
          X
        </button>
        <div className="flex gap-2">
          <img src={item.imageUrl} alt={item.label} />
          <div>
            <h3 class="text-xl">{item.label}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
