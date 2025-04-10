import React, { useState } from "react";

const AllTasks = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="ml-[20vw] bg-neutral-800 p-4 min-h-screen text-neutral-200">
      <div className="flex justify-between items-center">
        <h1>All Tasks</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-neutral-600 rounded-xl p-2 cursor-pointer"
        >
          Add todo
        </button>

        {showForm && (
          <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-amber-500">
            <button onClick={() => setShowForm(false)}>Cancel</button>
            <form className="flex flex-col gap-2 border border-neutral-800 p-4">
              <label htmlFor="title">Todo title</label>
              <input type="text" id="title" />

              <label htmlFor="desc">Todo Description</label>
              <input type="text" id="desc" />

              <label htmlFor="date"></label>
              <input type="date" id="date" />

              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
      <div className="">Todos container</div>
    </div>
  );
};

export default AllTasks;
