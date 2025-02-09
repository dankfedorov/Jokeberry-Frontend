import React from "react";
import "../assets/styles/header.css";
import Logo from "./Logo";
import Nav from "./Nav";
import NavAvatar from "./NavAvatar";
import SwithTheme from "./SwithTheme";


function HeaderDash() {
  return (
    <header id="header" className="header p-3">
      <div className="container container__header">
        <Logo />
        <SwithTheme/>
        <NavAvatar />
        {/* <Nav /> */}
      </div>
    </header>
  );
}

export default HeaderDash;
