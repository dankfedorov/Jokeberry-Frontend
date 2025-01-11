import React from "react";
import menu from "../assets/images/menu.png";
import adminicon from "../assets/images/admin.gif";
import "../assets/styles/nav.css";

function NavAvatar() {
  const username = JSON.parse(localStorage.getItem('username'));
  const id = JSON.parse(localStorage.getItem('id'));

  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        className="nav-link nav-profile d-flex align-items-center pe-0 "
        data-bs-toggle="dropdown"
      >
        {/* <i className="bi bi-box-arrow-in-right"></i> */}
        <img src={menu} alt="Profile" className='rounded-circle' />
        {/* <img src={menu} alt="Profile" className="menu-icon" /> */}
        {/* <span className="d-none d-md-block dropdown-toggle ps-2"></span> */}
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header ">
          <img
            src={adminicon}
            alt="Profile"
            className="admin-img text-center"
          />
          <h6>Username:{username}</h6>
          <span>ID:{id}</span>

        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a href="/login" className="dropdown-item d-flex align-items-center">
            <i class="bi bi-door-closed"></i>
            <span>Вход </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a href="#" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-person"></i>
            <span>Профиль</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a href="/video" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-question-circle"></i>
            <span>Video </span>
          </a>
        </li>
       
        <li>
          <a href="#" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-question-circle"></i>
            <span>Нужна помощь ?</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a href="/" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-box-arrow-right"></i>
            <span>Выход</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;
