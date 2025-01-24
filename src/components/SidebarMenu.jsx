import React from "react";
import navList from "../components/data/navitem";
// import navLink from "../components/data/navlink";
// import frontendlink from "../components/data/frontendlink";
// import backendlink from "../components/data/backendlink";
import NavItem from "../components/NavItem";
import FrontenMenudLink from "./FrontendMenuLink";
import BackendMenudLink from "./BackendMenudLink";

function SidebarMenu() {
  const username = JSON.parse(localStorage.getItem("username"));
  const id = JSON.parse(localStorage.getItem("id"));

  return (
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block sidebar collapse left-block"
    >
      <div class="position-sticky pt-0">
        <ul class="nav flex-column">
          <span className="very-small">Username:{username}</span>
          <span className="very-small">ID: {id}</span>
        </ul>

        {/* <FrontenMenudLink /> */}
        {/* <BackendMenudLink /> */}

        <hr></hr>
        <ul class="nav flex-column mb-1">
          <p className="very-small">Разделы сайта</p>
          {navList.map((nav) => (
            <NavItem key={nav._id} nav={nav} />
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default SidebarMenu;
