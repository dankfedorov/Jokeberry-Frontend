import React from "react";

function TopLinks() {
  return (
    <div className="toplink">
      <ul className="d-felx toplink__group">
        <li className="toplink__item">
          <a href="/" className="toplink-link" >Главная</a>
        </li>
        <li className="toplink__item">
          <a href="#" className="toplink-link" >Витрина</a>
        </li>
        <li className="toplinks__item">
          <a href="#" className="toplink-link">Блог</a>
        </li>
       
      </ul>
    </div>
  );
}

export default TopLinks;
