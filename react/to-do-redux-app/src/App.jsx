import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllTasks from "./pages/AllTasks";
import CompleteTasks from "./pages/CompleteTasks";
import IncompleteTasks from "./pages/IncompleteTasks";
import ImportatntTasks from "./pages/ImportatntTasks";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/completed" element={<CompleteTasks />} />
        <Route path="/incomplete" element={<IncompleteTasks />} />
        <Route path="/important" element={<ImportatntTasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
