import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneradorAlmacenes from "./components/GeneradorAlmacenes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GeneradorAlmacenes />
    </>
  );
}

export default App;
