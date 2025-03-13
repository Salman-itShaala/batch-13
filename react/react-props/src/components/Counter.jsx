import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increseCount() {
    setCount(count + 1);
  }

  const decreseCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={increseCount}>Increse Count</button>
      <br />
      <br />
      <button onClick={() => decreseCount()}>Descrese Count</button>
      <br />
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;
