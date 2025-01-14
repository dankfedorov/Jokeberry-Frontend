import React from "react";
import SwithTheme from "./SwithTheme";

function TopNav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="header-nav__group">
        <li className="header-nav__link">
          <a
            href="/"
            className="nav-link nav-profile d-flex align-items-center pe-0"
          >
            <span className=" d-none d-md-block ps-3 ">
              <i class="bi bi-house-door"></i> 
            </span>
          </a>
        </li>
    
        <li className="header-nav__link d-md-block ps-3 ">
          <SwithTheme />
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
