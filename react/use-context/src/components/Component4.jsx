import React, { useEffect, useRef, useState } from "react";

const Component4 = () => {
  const [count, setCount] = useState(0); // 1

  const countRef = useRef(); // {current : 0}

  useEffect(() => {
    countRef.current = count; // 1
  });

  return (
    <div>
      <h1>Count is {count}</h1>
      <h1>Prev value is : {countRef.current}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Component4;
