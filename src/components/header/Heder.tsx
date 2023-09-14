import { NavLink } from "react-router-dom";

import React from "react";

import "./header.scss";
import "./adaptate.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="https://future-group.ru/" target="_blank">
          Future Test
        </NavLink>
        <div className="technical">
          <div className="technical__first"></div>
          <div className="technical__second"></div>
        </div>
      </div>
      <NavLink to="" className="navlink">
        Main Page
      </NavLink>
    </header>
  );
};
export default Header;
