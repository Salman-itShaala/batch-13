import React, { createContext, useContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comp1 from "./components/test/Comp1";
import Comp2 from "./components/test/Comp2";

export const CounterContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="border border-black p-8">
      <button onClick={() => setCount(count + 1)}>Change count</button>

      <h1>Count is {count}</h1>
      <CounterContext.Provider value={count}>
        <Comp1 />
        <Comp2 />
      </CounterContext.Provider>
    </div>
  );
};

export default App;
