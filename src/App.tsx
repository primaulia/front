import { useQuery, gql } from "@apollo/client";

import { Menus } from "./components/Menus.tsx";
import { Sidebar } from "./components/Sidebar";
import { MenuType } from "../interfaces.ts";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const menus: MenuType[] = grapqlData["menus"];

  return (
    <div className="container mx-auto px-4 md:p-0">
      <h1 className="my-4 text-3xl font-bold">Pizza Planet!</h1>
      <div className="flex flex-col gap-6 md:flex-row">
        <Sidebar menus={menus} />
        <Menus menus={menus} />
      </div>
    </div>
  );
}

export default App;
