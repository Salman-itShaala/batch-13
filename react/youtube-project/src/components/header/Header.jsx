import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

import yt_logo from "../../assets/yt-logo.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={yt_logo} alt="Youtube header logo" />
        </Link>
      </div>
      <div className="">
        <input type="search" placeholder="Search" />
      </div>
      <div className="">
        <button>Create</button>
        <button>Not.</button>
        <button>S</button>
      </div>
    </header>
  );
};

export default Header;
