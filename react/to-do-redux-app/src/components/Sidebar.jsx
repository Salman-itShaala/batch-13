import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen bg-neutral-700 flex flex-col justify-between items-center w-[16vw] p-4 text-neutral-200">
      <div className="">Salman Shaikh</div>
      <div className="flex flex-col">
        <Link to="/">All Tasks</Link>
        <Link to="/completed">Completed</Link>
        <Link to="/incomplete">Incomplete</Link>
        <Link to="/important">Important</Link>
      </div>
      <div className="">Sign out</div>
    </aside>
  );
};

export default Sidebar;
