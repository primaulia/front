import { useQuery, gql } from "@apollo/client";

import { Main } from "./components/Main.tsx";
import { Sidebar } from "./components/Sidebar";
import { SectionType } from "../interfaces.ts";

const GET_MENU = gql`
  {
    menus {
      id
      label
      sections {
        id
        identifier
        label
        items {
          id
          label
          identifier
          price
        }
      }
    }
  }
`;

function App() {
  const { data: grapqlData } = useQuery(GET_MENU);
  const sections: SectionType[] = grapqlData["menus"][0][
    "sections"
  ] as SectionType[];

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
