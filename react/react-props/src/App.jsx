import { useState } from "react";
import "./App.css";
import { FirstComponent } from "./components/FirstComponent";
import Header from "./components/Header";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle visibility
      </button>

      {isVisible && <h1>Hii there</h1>}
    </>
  );
}

export default App;
