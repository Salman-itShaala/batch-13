import { createContext, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeByValue, decrement, increment } from "./slices/counterSlice";

function App() {
  const styleObj = {
    padding: "40px",
    border: "2px solid yellow",
    display: "flex",
    gap: "10px",
  };

  return (
    <div style={styleObj}>
      <Child1 />
      <Child2 />
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
  const counter = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div style={{ padding: "40px", border: "2px solid white" }}>
      <h2>I'm Child 1 and count is : {counter}</h2>
      <button onClick={() => dispatch(increment())}>Click me</button>
      <button onClick={() => dispatch(decrement())}>Click me</button>
      <button onClick={() => dispatch(changeByValue(10))}>Click me</button>
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
