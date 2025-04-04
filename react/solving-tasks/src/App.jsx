import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
