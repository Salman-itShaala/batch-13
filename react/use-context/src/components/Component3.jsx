import React, { useRef, useState } from "react";

const Component3 = () => {
  const [input, setInput] = useState("");

  const inputRef = useRef();

  function handleButtonClick() {
    console.log(inputRef.current.value); // inputRef.current.value
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <br />
      <br />
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

export default Component3;
