import React from "react";
import menu from "../assets/images/menu.png";
import person from "../assets/images/person.png";
import adminicon from "../assets/images/admin.gif";
import "../assets/styles/nav.css";

import navList from "../components/data/navitem";
import NavItem from "../components/NavItem";

function NavAvatar() {
  const username = JSON.parse(localStorage.getItem("username"));
  const id = JSON.parse(localStorage.getItem("id"));

  return (
    <span className="nav-item dropdown ms-auto menu">
      
          <a href="/partner" className="toplink-link menu__icon" >
          <img src={person} alt="Profile" className="rounded" />
          </a>
         
      <a
        href="/dashboard"
        className="nav-link nav-profile d-flex align-items-center pe-0 "
        data-bs-toggle="dropdown"
      >
        <img src={menu} alt="Profile" className="rounded-circle" />
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <img
            src={adminicon}
            alt="Profile"
            className="admin-img text-center"
          />
          <p className="">
            Username:<b>{username}</b>
          </p>
          <p className="">
            User ID:<b>{id}</b>
          </p>
        </li>
        
        <li>
          <hr className="dropdown-divider" />
        </li>
       
        <span>
        {navList.map((nav) => (
          <NavItem key={nav._id} nav={nav} />
        ))}
        </span>
        
      </ul>


      
    </span>
  );
}

export default NavAvatar;
