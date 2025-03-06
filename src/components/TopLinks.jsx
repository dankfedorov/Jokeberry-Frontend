import React from "react";
// import menu from "../assets/images/menu.png";
// меню сверху

function TopLinks() {
  return (
    <>
      <ul className="toplink__group">
        <li className="toplink-link">
          <a href="/" className="toplink-link">
            Главная
          </a>
        </li>
        <li className="toplink-link">
          <a href="/" className="toplink-link">
            О проекте
          </a>
        </li>
        <li className="toplink-link">
          <a href="/" className="toplink-link">
            Личный кабинет
          </a>
        </li>
        <li className="toplink-link">
          <a href="/" className="toplink-link">
          Написать нам
          </a>
        </li>
      </ul>
    </>
  );
}

export default TopLinks;
