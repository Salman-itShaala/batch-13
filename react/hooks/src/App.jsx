import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function reducerFn(state, payload) {
  console.log(state, payload);
  if (payload === "increase") {
    return state + 1;
  } else if (payload === "decrese") {
    return state - 1;
  }
}

const secret = import.meta.env.VITE_APP_SECRET;

console.log(secret);

function App() {
  const [count, action] = useReducer(reducerFn, 0);

  return (
    <>
      <h1>hii there {count}</h1>
      <button onClick={() => action("increase")}>Increase</button>
      <button onClick={() => action("decrese")}>Decrease</button>
    </>
  );
}

export default App;
