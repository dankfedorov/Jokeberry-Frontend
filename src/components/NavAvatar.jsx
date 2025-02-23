import React from "react";
import menu from "../assets/images/menu.png";
import adminicon from "../assets/images/admin.gif";
import "../assets/styles/nav.css";

import navList from "../components/data/navitem";
import NavItem from "../components/NavItem";

function NavAvatar() {
  const username = JSON.parse(localStorage.getItem("username"));
  const id = JSON.parse(localStorage.getItem("id"));

  return (
    <span className="nav-item dropdown ms-auto menu">
      <a
        href="/dashboard"
        className="nav-link nav-profile d-flex align-items-center  pe-0 "
        data-bs-toggle="dropdown"
      >
        {/* <img src={menu} alt="Profile" className="rounded-circle" title="menu" /> */}
        {/* <i class="bi bi-person-circle"></i> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-person-circle"
          viewBox="0 0 20 20"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <img
            src={adminicon}
            alt="Profile"
            className="admin-img text-center"
          />
          <p className="">
            Username:<b>{username}</b>
          </p>
          <p className="">
            User ID:<b>{id}</b>
          </p>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="nav-link">
          <a href="/present" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-person"></i>
            <span className="">Презентация</span>
          </a>
        </li>

        <li className="nav-link">
          <a href="/register" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-door-open"></i>
            <span className="">Login / Registration</span>
          </a>
        </li>
        {/* <li className="nav-link">
          <a href="/about" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-blockquote-left"></i>
            <span className="">О проекте</span>
          </a>
        </li> */}
        <li className="nav-link">
          <a href="/" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-box-arrow-left"></i>
            <span className="">Выход</span>
          </a>
        </li>
      </ul>
    </span>
  );
}

export default NavAvatar;
