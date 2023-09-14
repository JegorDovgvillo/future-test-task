import { NavLink } from "react-router-dom";

import React from "react";

import "./footer.scss";
import './adaptate.scss'

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <NavLink to="https://future-group.ru/" target="_blank">
          Future Test
        </NavLink>
        <div className="technical">
          <div className="technical__first"></div>
          <div className="technical__second"></div>
        </div>
      </div>
      <NavLink
        to="https://www.linkedin.com/in/egordovgvillo/"
        className="navlink"
        target="_blank"
      >
        Egor Dovgvillo
      </NavLink>
    </footer>
  );
};
export default Footer;
