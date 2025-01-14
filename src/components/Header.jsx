import React from "react";
import "../assets/styles/header.css";
import Logo from "./Logo";
import Nav from "./Nav";
import TopNav from "./TopNav";
import SwithTheme from "./SwithTheme";


function Header() {
  return (
    <header id="header" className="header  fixed-top d-flex align-items-center">
      
      <Logo />
      <TopNav />
      {/* <SwithTheme/> */}
      <Nav />
    </header>
  );
}

export default Header;
