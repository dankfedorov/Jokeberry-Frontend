import React from "react";

function TopLinks() {
  return (
    <div className="toplink">
      <ul className="d-felx toplink__group">
        <li className="toplink__item">
          <a href="#" className="toplink-link" >Showcase</a>
        </li>
        <li className="toplinks__item">
          <a href="#" className="toplink-link">Docs</a>
        </li>
        <li className="toplinks__item">
          <a href="#" className="toplink-link">Блог</a>
        </li>
        <li className="toplinks__item">
          <a href="https://moskovshop.gamestore.app/" className="toplink-link">Rust</a>
        </li>
      </ul>
    </div>
  );
}

export default TopLinks;
