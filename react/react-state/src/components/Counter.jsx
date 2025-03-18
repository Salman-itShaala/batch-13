import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("hii");

  function increse() {
    setCount(count + 1); // 2
  }

  function decrese() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={increse}>Increase count</button>
      <br />
      <br />
      <button onClick={decrese}>Decrease Count</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
