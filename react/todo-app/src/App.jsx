import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  function addTodo() {
    if (todoInput == "") {
      alert("Enter valid todo");
      return;
    }

    const newTodo = {
      title: todoInput,
      completed: false,
      id: Date.now(),
    };

    const updateArray = [...todos, newTodo];

    setTodos(updateArray);

    setTodoInput("");
  }

  function deleteTodo(id) {
    const updatedArray = todos.filter((todo) => {
      return todo.id != id;
    });

    setTodos(updatedArray);
  }

  function toggleComplete(id) {
    const updateArray = todos.map((todo) => {
      if (id == todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updateArray);
  }

  return (
    <>
      <h1>Todo App</h1>

      <div className="todos-input-wrapper">
        <input
          type="text"
          id="todo-input"
          onChange={(event) => setTodoInput(event.target.value)}
          value={todoInput}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div className="todos-wrapper">
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className={`todo ${todo.completed ? "completed" : "incomplete"}`}
            >
              <p>{todo.title}</p>
              <button onClick={() => toggleComplete(todo.id)}>
                {todo.completed ? "Mark as incomplete" : "Mark as complete"}
              </button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          );
        })}
      </div>
      <TestComponent />
    </>
  );
}

function TestComponent() {
  return <div>HIii</div>;
}

export default App;
