import React from "react";
import "../assets/styles/topnav.css";
import "../assets/styles/nav.css";
import NavAvatar from "./NavAvatar";
// import SwithTheme from "./SwithTheme";

function Nav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
      
        <NavAvatar />
        <li>
          {" "}
          <a
            href="/register"
            className="nav-link nav-profile d-flex align-items-center pe-0 ps-2"
          >
            <span className="d-none d-md-block ps-2 reg-link">
              {" "}
              Регистрация
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
