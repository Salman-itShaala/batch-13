import React, { useCallback, useMemo, useState } from "react";

const MemoComponent = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // cartItems

  const totalPrice = useMemo(() => {
    console.log("Recacalculating price");

    return () => {};
  }, [counter2]);

  const callBAckFn = useCallback(() => {}, [counter1]);

  console.log(totalPrice);

  return (
    <div>
      MemoComponent
      <button onClick={() => setCounter1(counter1 + 1)}>Click me</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Click me 2</button>
    </div>
  );
};

export default MemoComponent;
