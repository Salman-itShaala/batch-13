import { useContext } from "react";
import { CounterContext } from "../../App";

function Comp1() {
  const value = useContext(CounterContext);

  console.log(value);

  return (
    <>
      <h1 className="border border-amber-600 p-8">Hii there {value}</h1>
    </>
  );
}

export default Comp1;
