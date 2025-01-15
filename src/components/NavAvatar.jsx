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
        href="/dashboard"
        className="nav-link nav-profile d-flex align-items-center pe-0 "
        data-bs-toggle="dropdown"
      >
        <img src={menu} alt="Profile" className='rounded-circle' />
       </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header ">
          <img
            src={adminicon}
            alt="Profile"
            className="admin-img text-center"
          />
          <p>Username:<b>{username}</b></p>
          <p>ID:<b>{id}</b></p>

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
          <a href="/about" className="dropdown-item d-flex align-items-center">
          <i class="bi bi-house"></i>
            <span>Главная</span>
          </a>
        </li>
        <li>
          <a href="/about" className="dropdown-item d-flex align-items-center">
          <i class="bi bi-info-circle"></i>
            <span>О Проекте</span>
          </a>
        </li>
        <li>
          <a href="/dashboard" className="dropdown-item d-flex align-items-center">
          <i class="bi bi-card-list"></i>
            <span>Инфо блок</span>
          </a>
        </li>
        <li>
          <a href="/admin" className="dropdown-item d-flex align-items-center">
          <i class="bi bi-gear"></i>
            <span>Админ панель</span>
          </a>
        </li>
        
        <li>
          <a href="/video" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-film"></i>
            <span>Video </span>
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
