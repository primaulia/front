import itemsData from "../../items.json";
type Item = {
  id: string;
  identifier: string;
  label: string;
  price: number | null;
};
export function Item() {
  return (
    <div className="container">
      <div className="blog">
        {itemsData.map((item: Item) => (
          <div className="card" key={item.id}>
            <div className="details">
              <h2>{item.label}</h2>
              <h4>{item.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
