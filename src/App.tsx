import { ItemsList } from "./components/ItemsList";
import { Sidebar } from "./components/Sidebar";
import { SectionType } from "../interfaces.ts";

import { data } from "../dummy/data.json";

function App() {
  const sections: SectionType[] = data["menus"][0]["sections"] as SectionType[];

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-3xl font-bold underline">Pizza Planet!</h1>
      <div className="flex">
        <Sidebar sections={sections} />
        <ItemsList />
      </div>
    </div>
  );
}

export default App;
