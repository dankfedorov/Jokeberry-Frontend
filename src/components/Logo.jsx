import React from "react";
import "../assets/styles/logo.css";
// import logo from "../assets/images/logo.png";
import logo from "../assets/images/logo.png";

function Logo() {

  return (
    <div className="d-flex align-items-center ">

      <a href="/" className="logo d-flex align-items-center ">
        <img src={logo} alt="Логотип Аналитика" aria-label="Jokeberry логотип" className=""/>
        {/* <span className="d-none d-lg-block">JOKEBERRY</span> */}
        <span className="d-lg-block ">JOKEBERRY</span>
      </a>          
       
    </div>
  );
}

export default Logo;
