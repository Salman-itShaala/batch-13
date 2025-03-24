import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const res = await fetch("https://dummyjson.com/todos");
      const data = await res.json();
      console.log(data.todos);
      setTodos(data.todos);
    }

    getTodos();
  }, []);

  function changeCount() {
    setCount(count + 2);
  }

  function changeVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={changeCount}>Click me</button>
      <br />
      <br />

      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.todo}</li>;
        })}
      </ul>

      <br />
      <br />
      <button onClick={changeVisibility}> Change visiblity</button>
      {isVisible && <TestComponent />}
    </>
  );
}

function TestComponent() {
  useEffect(() => {
    console.log("Connect to my back end");

    return () => {
      console.log("Disconnect from my back end"); // on un-mounnt of comp
    };
  }, []);

  return (
    <>
      <h1>I'm test comp</h1>
    </>
  );
}

export default App;
