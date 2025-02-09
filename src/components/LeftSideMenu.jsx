import React from "react";
import NavItem from "../components/NavItem";
import navList from "../components/data/navitem";

function LeftSideMenu() {
  const username = JSON.parse(localStorage.getItem("username"));
  const id = JSON.parse(localStorage.getItem("id"));
  const role = JSON.parse(localStorage.getItem("roles"));

  return (
    <div>
      <nav
        id="sidebarMenu"
        class=""
      >
        <div class="">
               <ul class="nav flex-column mb-1">
          <p className="very-small">Разделы сайта</p>
          {navList.map((nav) => (
            <NavItem key={nav._id} nav={nav} />
          ))}
        </ul>
        </div>
      </nav>
    </div>
  );
}

export default LeftSideMenu;
