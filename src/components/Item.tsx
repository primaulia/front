import { ItemType } from "../../interfaces.ts";

interface ItemProps {
  item: ItemType;
}

export function Item({ item }: ItemProps) {
  const classes = {
    rounded: true,
    "bg-indigo-500": true,
    "px-4": true,
    "text-white": true,
  };

  return (
    <div className="rounded-lg p-4 shadow-lg" key={item.id}>
      <img src={item.imageUrl} alt={item.label} />
      <h3 className="text-xl">{item.label}</h3>
      <p>{item.description}</p>
      <div className="my-2 flex justify-between">
        <span>${item.price}</span>
        <button
          className={`${item.available ? "text-white" : "cursor-not-allowed text-gray-400"} rounded bg-indigo-500 px-2 `}
        >
          {item.available ? "Add" : "Not available"}
        </button>
      </div>
    </div>
  );
}
