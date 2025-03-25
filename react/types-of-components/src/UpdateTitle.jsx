import React, { useEffect, useState } from "react";

const UpdateTitle = () => {
  const [title, setTitle] = useState("");

  function changeTitle() {
    document.title = title;
  }

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <button onClick={changeTitle}>Change title</button>
    </div>
  );
};

export default UpdateTitle;
