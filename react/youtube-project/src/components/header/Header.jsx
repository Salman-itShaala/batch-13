import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

import ytLogo from "../../assets/yt-logo.svg";
import optionsBars from "../../assets/options-bars.svg";
import searchIcon from "../../assets/search-icon.svg";
import micIcon from "../../assets/mic.svg";
import plusIcon from "../../assets/plus-icon.svg";
import notificationIcon from "../../assets/bell-icon.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <button>
          <img src={optionsBars} alt="" />
        </button>
        <Link to="/">
          <img src={ytLogo} alt="Youtube header logo" />
        </Link>
      </div>
      <div className="header-center">
        <div className="header-center-search">
          <input type="search" placeholder="Search" />
          <img src={searchIcon} alt="" />
        </div>
        <button className="btn-icon">
          <img src={micIcon} alt="" />
        </button>
      </div>
      <div className="header-right">
        <button className="plus-icon">
          <img src={plusIcon} alt="" />
          Create
        </button>
        <button>
          <img src={notificationIcon} alt="" />
        </button>
        <button className="acc-img">S</button>
      </div>
    </header>
  );
};

export default Header;
