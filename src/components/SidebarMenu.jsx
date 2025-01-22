import React from 'react'
import navList from "../components/data/navitem";
// import navLink from "../components/data/navlink";
import frontendlink from "../components/data/frontendlink";
import backendlink from "../components/data/backendlink";
import NavItem from "../components/NavItem";

function SidebarMenu() {
  
  const username = JSON.parse(localStorage.getItem('username'));
  const id = JSON.parse(localStorage.getItem('id'));

  return (
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse left-block" >
    <div class="position-sticky pt-3">
    <ul class="nav flex-column">
    <span className="very-small">Username:{username}</span>
    <span className="very-small">ID: {id}</span>
    </ul>
    
       <ul class="nav flex-column">
        
        <hr></hr>
        <p className="very-small">Frontend</p>
        {frontendlink.map((nav) => (
          <NavItem key={nav._id} nav={nav} />
        ))}
      </ul>

      <ul class="nav flex-column mb-1">
         <p className="very-small">Backend</p>
        {backendlink.map((nav) => (
          <NavItem key={nav._id} nav={nav} />
        ))}
       
      </ul>

      {/* <ul class="nav flex-column mb-1">
        <p className="very-small">Информация</p>
        {navList.map((nav) => (
          <NavItem key={nav._id} nav={nav} />
        ))}
      </ul> */}

    </div>
  </nav>
  )
}

export default SidebarMenu