import React from "react";
// import menu from "../assets/images/menu.png";
 // меню сверху

function TopLinks() {
  return (
   

    <ul className="d-felx toplink__group ms-auto">
      <li className="toplink__item ">
        <a href="/" className="toplink-link">
          Главная
        </a>
      </li>

      {/* <li className="toplink__item ">
          <a href="#" className="toplink-link">
          Инструкция
          </a>
        </li> */}
      <li className="toplink__item ">
        <a href="/present" className="toplink-link">
          Презентация
        </a>
      </li>

      <li className="toplink__item ">
        <a href="/sklad" className="toplink-link">
          Вход
        </a>
      </li>

      {/* target="_blank" */}
    </ul>
  );
}

export default TopLinks;
