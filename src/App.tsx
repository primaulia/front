import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Blog } from "./components/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Blog</li>
        </ul>
      </div>
      <Blog />
    </div>
  );
}

export default App;
