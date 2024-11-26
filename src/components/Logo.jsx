import React from "react";
import "../assets/styles/logo.css";
import logo from "../assets/images/logo.svg";

function Logo() {
  const handleToggleSideBar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };

  return (
    <div className="d-flex align-items-center justify-content-between logo">

      <a href="/" className="logo d-flex align-items-center p-1">
        <img src={logo} alt="Логотип Аналитика" aria-label="Аналитика" />
        <span className="d-none d-lg-block"> ROBBY <b>AI</b></span>
      </a>
{/*       
      <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={handleToggleSideBar}
      ></i> */}
    
    </div>
  );
}

export default Logo;
