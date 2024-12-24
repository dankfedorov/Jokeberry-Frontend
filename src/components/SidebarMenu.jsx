import React from 'react'
import navList from "../components/data/navitem";
// import navLink from "../components/data/navlink";
import frontendlink from "../components/data/frontendlink";
import backendlink from "../components/data/backendlink";
import NavItem from "../components/NavItem";

function SidebarMenu() {
  const username = JSON.parse(localStorage.getItem('username'));

  return (
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse left-block" >
    <div class="position-sticky pt-3">
  
      {/* // Формируем списко элементов из json файла */}
      <ul class="nav flex-column">
        <span className="small text-center">Username:{username}</span>
        <li className="nav-item ">Frontend</li>
        {frontendlink.map((nav) => (
          <NavItem key={nav._id} nav={nav} />
        ))}
      </ul>

      <ul class="nav flex-column mb-2">
        {/* Pages block */}
        <li className="nav-item">Backend</li>
        {backendlink.map((nav) => (
          <NavItem key={nav._id} nav={nav} />
        ))}
        {/* Page block end */}
      </ul>

      <ul class="nav flex-column mb-2">
        {/* Pages block */}
        <li className="nav-item ">Информация</li>

        {navList.map((nav) => (
          <NavItem key={nav._id} nav={nav} />
        ))}
        {/* Page block end */}
      </ul>
    </div>
  </nav>
  )
}

export default SidebarMenu