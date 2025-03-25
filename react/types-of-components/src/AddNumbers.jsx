import React, { useState } from "react";

const AddNumbers = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  console.log(num1);

  function calculateSum() {
    setSum(parseFloat(num1) + parseFloat(num2));
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Enter first number"
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="Enter second number"
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <br />
      <button onClick={calculateSum}>Calculate Sum</button>

      <h2>Sum is : {sum}</h2>
    </div>
  );
};

export default AddNumbers;
