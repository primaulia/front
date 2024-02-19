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
        description
        label
        available
        products {
          id
          label
          identifier
          description
          price
          available
          imageUrl
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data: grapqlData } = useQuery(GET_MENU);

  console.log({ grapqlData });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

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
