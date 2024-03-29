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
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      opacity: 0,
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
        className="relative mx-auto w-3/4 bg-white transition-transform md:w-1/2"
        variants={modalVariants}
      >
        <button
          onClick={handleCloseClick}
          className="absolute right-0 top-0 bg-red-500 px-2 text-white"
        >
          X
        </button>
        <div className="flex flex-col gap-2 md:flex-row">
          <img
            src={item.imageUrl || "https://picsum.photos/560"}
            alt={item.label}
            className="md:w-1/2"
          />
          <div className="px-4 pb-4 md:py-2">
            <h3 className="text-xl">{item.label}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
