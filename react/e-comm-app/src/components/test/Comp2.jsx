import { useContext } from "react";
import { CounterContext } from "../../App";

function Comp2() {
  const count = useContext(CounterContext);

  return (
    <>
      <h1 className="border border-green-600 p-8">Hii there {count}</h1>
    </>
  );
}

export default Comp2;
