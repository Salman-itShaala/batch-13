import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../features/todoSlice/todoSlice";

const ImportatntTasks = () => {
  // throw new Error("slkdnsldkf");

  const todoState = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  if (todoState.error) {
    return (
      <div className="ml-[20vw] bg-neutral-800 p-4 min-h-screen text-red-600">
        <h1>Something went wrong ....</h1>
      </div>
    );
  }

  if (todoState.loading) {
    return (
      <div className="ml-[20vw] bg-neutral-800 p-4 min-h-screen text-neutral-200">
        <h1>Loading ....</h1>
      </div>
    );
  }

  return (
    <div className="ml-[20vw] bg-neutral-800 p-4 min-h-screen text-neutral-200">
      {todoState.todos.map((todo) => {
        return <li key={todo.id}>{todo.todo}</li>;
      })}
    </div>
  );
};

export default ImportatntTasks;
