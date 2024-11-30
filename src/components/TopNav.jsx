import React from 'react'
import "../assets/styles/topnav.css"

function TopNav() {
  return (

    <nav className="header-nav-link ms-auto" aria-label='Меню'>    
      <ul className="d-flex align-items-center">
         {/* <li ><a href="/"><i className="bi bi-house-door-fill"></i> Home</a></li> */}
         <li ><a href="/user"><i className="bi bi-people-fill"></i> Users</a></li>
         {/* <li ><a href="/admin"><i className="bi bi-gear"></i> Settings</a></li> */}
         
      </ul>
    </nav> 
   
   
    )
}

export default TopNav