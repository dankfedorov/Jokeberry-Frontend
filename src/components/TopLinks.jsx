import React from "react";
import person from "../assets/images/person.png";

function TopLinks() {
  return (
    <div className="toplink">
      <ul className="d-felx toplink__group">
        <li className="toplink__item">
          <a href="/" className="toplink-link" >Главная</a>
        </li>

        <li className="toplink__item">
          <a href="/about" className="toplink-link" >О проекте</a>
        </li>
        <li className="toplink__item">
          <a href="/docs" className="toplink-link" >Возможности</a>
        </li>
       
        
        {/* target="_blank" */}
        
      </ul>
    </div>
  );
}

export default TopLinks;
