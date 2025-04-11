import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice/todoSlice";

function AddTodoForm({ setShowForm }) {
  //
  const dispatch = useDispatch();

  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  function handleFormSubmit(e) {
    // to prevent default behavior of form ie. prevent refreshing the page
    e.preventDefault();

    const todoObj = {
      title: titleRef.current.value,
      description: descRef.current.value,
      date: dateRef.current.value,
      isComplete: false,
      id: Date.now(),
    };

    dispatch(addTodo(todoObj));
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center fixed top-0 left-0 backdrop-blur-xs p-16">
      <button
        onClick={() => setShowForm(false)}
        className="self-end border border-neutral-500 px-4 py-2 rounded-xl bg-yellow-600 font-bold cursor-pointer mt-4 hover:bg-yellow-800"
      >
        Cancel
      </button>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="flex flex-col gap-4 border-2 border-neutral-100 p-12 rounded-2xl"
      >
        <label htmlFor="title">Todo title</label>
        <input
          className="border border-neutral-500 px-4 py-2 rounded-xl"
          type="text"
          id="title"
          ref={titleRef}
          required
          // onChange={(e)=>setTitle(e.target.value)}
        />

        <label htmlFor="desc">Todo Description</label>
        <input
          className="border border-neutral-500 px-4 py-2 rounded-xl"
          type="text"
          id="desc"
          ref={descRef}
          required
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          className="border border-neutral-500 px-4 py-2 rounded-xl"
          id="date"
          ref={dateRef}
          required
        />

        <button
          type="submit"
          className="border border-neutral-500 px-4 py-2 rounded-xl bg-green-600 font-bold cursor-pointer mt-4 hover:bg-green-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
