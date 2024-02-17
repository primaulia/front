import { Main } from "./components/Main.tsx";
import { Sidebar } from "./components/Sidebar";
import { SectionType } from "../interfaces.ts";

import { data } from "../dummy/data.json";

function App() {
  const sections: SectionType[] = data["menus"][0]["sections"] as SectionType[];

  return (
    <div className="container mx-auto">
      <h1 className="my-4 text-3xl font-bold">Pizza Planet!</h1>
      <div className="flex gap-6">
        <Sidebar sections={sections} />
        <Main sections={sections} />
      </div>
    </div>
  );
}

export default App;
