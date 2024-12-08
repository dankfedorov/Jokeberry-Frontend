import React from 'react'
import "../assets/styles/topnav.css"
import "../assets/styles/nav.css";
import NavAvatar from "./NavAvatar";

function Nav() {

  return (

    <nav className="header-nav ms-auto">
    <ul className="d-flex align-items-center">
       <NavAvatar />
    </ul>
  </nav>

   
    )
}

export default Nav;