import { useQuery, gql } from "@apollo/client";

import { Menus } from "./components/Menus.tsx";
import { Sidebar } from "./components/Sidebar";
import { MenuType } from "../interfaces.ts";

import logo from "./assets/logo.png";

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
    <div>
      <div className="my-4 flex justify-center bg-lime-400 py-2">
        <img className="h-20" src={logo} alt="Pizza Planet Logo" />
      </div>
      <div className="container mx-auto px-4 md:p-0">
        <div className="flex flex-col gap-6 md:flex-row">
          <Sidebar menus={menus} />
          <Menus menus={menus} />
        </div>
      </div>
    </div>
  );
}

export default App;
