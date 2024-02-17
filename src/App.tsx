import { ItemsList } from "./components/ItemsList";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-3xl font-bold underline">Pizza Planet!</h1>
      <div className="flex">
        <Sidebar />
        <ItemsList />
      </div>
    </div>
  );
}

export default App;
