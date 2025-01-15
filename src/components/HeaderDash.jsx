import React from "react";
import "../assets/styles/header.css";
import Logo from "./Logo";
import Nav from "./Nav";
import NavAvatar from "./NavAvatar";


function HeaderDash() {
  return (
    <header id="header" className="header">
      <div className="container__header">
        <Logo />
        <NavAvatar />
        {/* <Nav /> */}
      </div>
    </header>
  );
}

export default HeaderDash;
