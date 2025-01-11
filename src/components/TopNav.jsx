import React from "react";
import TestBtn from "../components/TestBtn";

function TopNav() {
  const username = JSON.parse(localStorage.getItem('username'));
  const id = JSON.parse(localStorage.getItem('id'));
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center ">
        <li className="">
          <a
            href="/"
            className="nav-link nav-profile d-flex align-items-center pe-0"
          >
            <span className="d-none d-md-block ps-3 ">ГЛАВНАЯ </span>
          </a>
        </li>

        <li>
          <a
            href="/video"
            className="nav-link nav-profile d-flex align-items-center pe-0"
          >
            <span className="d-none d-md-block ps-3 small ">VIDEO PAGE</span>
          </a>
        </li>
        <span className="small ">Username:{username}</span>

        {/* <li class="nav-item dropdown">
          <a class="nav-link nav-profile d-flex align-items-center pe-0 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="d-none d-md-block ps-2 ">ВИДЕО</span>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/video">Интро</a></li>
            <li><a class="dropdown-item" href="#part2">Архитектура</a></li>
            <li><a class="dropdown-item" href="/video">Дизайн макета</a></li>
          </ul>
        </li> */}

      </ul>
    </nav>
  );
}

export default TopNav;
