import React, { useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice/todoSlice";

const AllTasks = () => {
  const [showForm, setShowForm] = useState(false);

  const todosState = useSelector((state) => state.todos); // {todos : []}
  const dispatch = useDispatch();

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

        {showForm && <AddTodoForm setShowForm={setShowForm} />}
      </div>
      <div className="p-4 grid grid-cols-3 gap-4">
        {todosState.todos.map((todo, index) => {
          return (
            <div
              key={todo.id}
              className="border border-neutral-300 p-4 bg-neutral-900 hover:bg-neutral-950 rounded-lg"
            >
              <p className="font-bold text-xl">{todo.title}</p>
              <p className="mt-4">{todo.description}</p>

              <p className="mt-4">Date : {todo.date}</p>

              <div className="flex gap-4">
                <button className="mt-4">
                  {todo.isComplete ? "Task is completed" : "Task is incomplete"}
                </button>

                <button
                  onClick={() => dispatch(removeTodo(index))}
                  className="mt-4 bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
