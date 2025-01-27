import React from "react";
// import menu from "../assets/images/menu.png";

function TopLinks() {
  return (

      
        <ul className="d-felx toplink__group ms-auto">
        <li className="toplink__item ">
          <a href="/" className="toplink-link">
            Главная
          </a>
        </li>

        <li className="toplink__item ">
          <a href="/about" className="toplink-link">
            О проекте
          </a>
        </li>
        <li className="toplink__item ">
          <a href="/docs" className="toplink-link">
            Документация
          </a>
        </li>
        
        {/* target="_blank" */}
      </ul>


  );
}

export default TopLinks;
