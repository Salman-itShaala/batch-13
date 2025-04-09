import { createContext, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const styleObj = {
    padding: "40px",
    border: "2px solid yellow",
    display: "flex",
    gap: "10px",
  };

  return (
    <div style={styleObj}>
      <CounterContext.Provider value={[count, setCount]}>
        <Child1 />
        <Child2 />
      </CounterContext.Provider>
    </div>
  );
}

function Child1() {
  return (
    <div style={{ padding: "40px", border: "2px solid white" }}>
      <h2>I'm Child 1 </h2>
      <GrandChild />
    </div>
  );
}

function GrandChild() {
  const [count, setCount] = useContext(CounterContext);
  return (
    <div style={{ padding: "40px", border: "2px solid white" }}>
      <h2>I'm Child 1 and count is : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function Child2() {
  return (
    <div style={{ padding: "40px", border: "2px solid white" }}>
      <h2>I'm Child 2 </h2>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
}

export default App;
