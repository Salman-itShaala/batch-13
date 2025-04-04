import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 flex flex-col gap-4 justify-center">
      <p className="text-center">Counter is {count}</p>

      <button className="btn" onClick={() => setCount(count + 1)}>
        Increase by one
      </button>

      <button className="btn" onClick={() => setCount(count - 1)}>
        Decrease by one
      </button>
      <button className="btn" onClick={() => setCount(0)}>
        Reset to 0
      </button>
    </div>
  );
};

export default Counter;
