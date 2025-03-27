import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex sm:flex-row flex-col justify-between px-[4vw] sm:px-[8vw]  py-2 sm:py-4 items-center bg-[--color-avocado-100] ">
      <Link
        to="/"
        className="text-2xl font-bold text-violet-600 hover:text-violet-950 hover:text-3xl transition"
      >
        SS.
      </Link>
      <input
        type="search"
        placeholder="Search"
        className="border border-black hover:to-blue-50"
      />

      <button onClick={changeTheme}>Change theme</button>
    </header>
  );
};

export default Header;
