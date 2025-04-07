import React, { useContext } from "react";
import { CounterContext } from "../App";

const Component1 = () => {
  const [counter, setCounter] = useContext(CounterContext);
  console.log(counter);

  return <div>Component1 {counter}</div>;
};

export default Component1;
