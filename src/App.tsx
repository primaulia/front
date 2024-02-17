import "./App.css";
import { Item } from "./components/Item";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Blog</li>
        </ul>
      </div>
      <Item />
    </div>
  );
}

export default App;
