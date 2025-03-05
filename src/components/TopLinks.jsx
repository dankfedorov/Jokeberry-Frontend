import React from "react";
// import menu from "../assets/images/menu.png";
// меню сверху

function TopLinks() {
  return (
    <>
    <ul className="">
   
    <li className="nav-link" >
    <a href="/" className="nav-link" >Главная</a>
    </li>

    </ul>

    <span className="nav-item dropdown menu">
    <a
      href="/dashboard"
      className="nav-link nav-profile d-flex align-items-center  pe-0 "
      data-bs-toggle="dropdown"
    > Frontend
    {/* <i class="bi bi-caret-down"></i> */}
    </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow ">
        <li className="nav-link" >
          <a href="/" className="toplink-link dropdown">
            Ахитектура проекта
          </a>
        </li>

        <li className="nav-link ">
          <a href="/present" className="toplink-link">
           Дизайн макета
          </a>
        </li>

        <li className="nav-link ">
          <a href="#" className="toplink-link">
           Кодинг HTML CSS 
          </a>
        </li>
        <li className="nav-link ">
          <a href="#" className="toplink-link">
            Интеграция с React
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="toplink-link">
            Работа с Хостингом
          </a>
        </li>
      </ul>
    </span>

    <span className="nav-item dropdown menu">
    <a
      href="#"
      className="nav-link nav-profile d-flex align-items-center  pe-0 "
      data-bs-toggle="dropdown"
    > Backend
    {/* <i class="bi bi-caret-down"></i> */}
    </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow ">
        <li className="nav-link " >
          <a href="/" className="toplink-link dropdown">
            Работа с Node.js
          </a>
        </li>

        <li className="nav-link ">
          <a href="/present" className="toplink-link">
           Подключение Express
          </a>
        </li>

        <li className="nav-link ">
          <a href="#" className="toplink-link">
           JSON Авторизация
          </a>
        </li>
        <li className="nav-link ">
          <a href="#" className="toplink-link ">
            Подключение MongoDB
          </a>
        </li>
        <li className="nav-link ">
          <a href="#" className="toplink-link">
           Настройка хостинга
          </a>
        </li>
      </ul>
    </span>
    
    <span className="nav-item dropdown menu">
    <a
      href="#"
      className="nav-link nav-profile d-flex align-items-center  pe-0 "
      data-bs-toggle="dropdown"
    > Хостинг
    {/* <i class="bi bi-caret-down"></i> */}
    </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow ">
        <li className="nav-link " >
          <a href="/" className="toplink-link dropdown">
            Работа с Node.js
          </a>
        </li>

        <li className="nav-link ">
          <a href="/present" className="toplink-link">
           Подключение Express
          </a>
        </li>

        <li className="nav-link ">
          <a href="#" className="toplink-link">
           JSON Авторизация
          </a>
        </li>
        <li className="nav-link ">
          <a href="#" className="toplink-link ">
            Подключение MongoDB
          </a>
        </li>
        <li className="nav-link ">
          <a href="#" className="toplink-link">
           Настройка хостинга
          </a>
        </li>
      </ul>
    </span>
      
      </>
  );
}

export default TopLinks;
