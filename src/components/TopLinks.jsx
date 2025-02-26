import React from "react";
// import menu from "../assets/images/menu.png";
// меню сверху

function TopLinks() {
  return (

    
      <ul className="d-felx toplink__group ms-auto">
        <li className="toplink__item ">
          <a href="/" className="toplink-link dropdown">
            Главная
          </a>
          {/*  */}
          
          {/*  */}
        </li>

        <li className="toplink__item ">
          <a href="/present" className="toplink-link">
            О Проекте
          </a>
        </li>

        <li className="toplink__item ">
          <a href="#" className="toplink-link">
            Проекты и идеи
          </a>
        </li>
        <li className="toplink__item ">
          <a href="#" className="toplink-link">
            Новости
          </a>
        </li>
        <li className="toplink__item ">
          <a href="#" className="toplink-link">
            Контакты
          </a>
        </li>
      </ul>
   
  );
}

export default TopLinks;
