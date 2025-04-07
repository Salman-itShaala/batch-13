import React, { useEffect, useRef } from "react";

const Component2 = () => {
  const inputRef = useRef(); // {current : element}

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} id="my-input" type="text" />
    </div>
  );
};

export default Component2;
