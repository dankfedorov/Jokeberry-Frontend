import React from "react";
import "../assets/styles/left-side.css";


function LeftSide() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-heading">Frontend</li>

        <li className="nav-item">
          <a href="http://localhost:3000" className="nav-link">
            <i className="bi bi-house-door"></i>
            <span>Начало проекта</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <i className="bi bi-file-text"></i>
            <span>Архитектура проекта</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <i className="bi bi-file-text"></i>
            <span>Дизайн макета</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <i className="bi bi-file-text"></i>
            <span>Верстка HTML</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <i className="bi bi-file-text"></i>
            <span>Стили Bootstrap</span>
          </a>
        </li>

        {/* link menu */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href=""
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi bi-share"></i>
            <span>Интеграция React</span>
          </a>

          <ul
            class="dropdown-menu dropdown-menu__second"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <a class="dropdown-item p-2" href="">
                <i className="bi bi-diagram-3"></i>
                <span>Среда разработки</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item p-2" href="">
                <i className="bi bi-journals"></i>
                <span>NPM Библиотеки</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item p-2" href="">
                <i className="bi bi-recycle"></i>
                <span>Создание модулей</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item p-2" href="">
                <i className="bi bi-link"></i>
                <span>Сборка проекта</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item p-2" href="">
                <i className="bi bi-link"></i>
                <span>Настройка API</span>
              </a>
            </li>
          </ul>
        </li>
        {/* end */}
      </ul>
      <hr></hr>

      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-heading">Backend</li>

        <li className="nav-item">
          <a href="" className="nav-link">
            <i className="bi bi-file-text"></i>
            <span>Использование Node.js</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <i className="bi bi-file-text"></i>
            <span>База даных MongoDB</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <i className="bi bi-file-text"></i>
            <span>NPM Библиотеки</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="bi bi-file-text"></i>
            <span>Postman Agent</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="bi bi-file-text"></i>
            <span>Загрузка на серввер</span>
          </a>
        </li>
      </ul>
     

    </aside>
  );
}

export default LeftSide;
