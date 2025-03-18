import { useState } from "react";
import Counter from "./components/Counter";
// import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  console.log("Hello");

  function handleClick() {
    setShow(!show); // !false
  }

  return (
    <>
      <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>
      {show && <h1>Hii there</h1>}
      <Counter />
    </>
  );
}

export default App;
