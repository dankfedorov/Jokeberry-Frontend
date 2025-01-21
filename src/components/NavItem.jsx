import React from "react";

function NavItem({ nav }) {
  return (
    <li className="nav-link">
      <a href={nav.link} className="dropdown-item d-flex align-items-center">
        <i className={nav.icon}></i>
        <span className=""> {nav.name}</span>
      </a>
    </li>
  );
}

export default NavItem;
