import React from "react";
import "../assets/styles/nav.css";

function Nav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
         
         <li ><a href="/login">Вход</a></li>
         {/* <li ><a href="http://localhost:3000/register">Регистраци</a></li> */}
        
         
      </ul>
    </nav>
  );
}

export default Nav;
