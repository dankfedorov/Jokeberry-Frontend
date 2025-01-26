import React from "react";
// import menu from "../assets/images/menu.png";

function TopLinks() {
  return (
    <span className="toplink nav-item dropdown ms-auto menu">
      <a
        href="/dashboard"
        className="nav-link nav-profile d-flex align-items-center "
        data-bs-toggle="dropdown"
      >переход 
        <i class="bi bi-caret-down-fill very-small p-1"></i>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        {/* <ul className="d-felx toplink__group dropdown-menu"> */}
        <li className="toplink__item dropdown-header">
          <a href="/" className="toplink-link">
            Главная
          </a>
        </li>

        <li className="toplink__item dropdown-header">
          <a href="/about" className="toplink-link">
            О проекте
          </a>
        </li>
        <li className="toplink__item dropdown-header">
          <a href="/docs" className="toplink-link">
            Возможности
          </a>
        </li>

        {/* target="_blank" */}
      </ul>
    </span>
  );
}

export default TopLinks;
