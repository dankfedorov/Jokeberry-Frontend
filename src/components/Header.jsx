import React from "react";
import "../assets/styles/header.css";
import Logo from "./Logo";
import Nav from "./Nav";
import TopLinks from "./TopLinks";
import Toastify from "../components/Toastify";
// import PartnerLinks from "./PartnerLinks";


function Header() {
  return (
    <header id="header" className="header">
      <div className="container container__header">
      
        <Logo />
        <TopLinks/>
        <Nav />
        <Toastify />
        
      </div>
    </header>
  );
}

export default Header;
