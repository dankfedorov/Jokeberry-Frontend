import React from "react";

function TopNav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li>
          <a
            href="/"
            className="nav-link nav-profile d-flex align-items-center pe-0"
          >
            <span className="d-none d-md-block ps-2 ">ГЛАВНАЯ</span>
          </a>
        </li>
        <li>
          <a
            href="/video"
            className="nav-link nav-profile d-flex align-items-center pe-0"
          >
            <span className="d-none d-md-block ps-2 ">VIDEO</span>
          </a>
        </li>

      </ul>
    </nav>
  );
}

export default TopNav;
