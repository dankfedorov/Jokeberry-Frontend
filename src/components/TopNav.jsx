import React from 'react'
import "../assets/styles/topnav.css"

function TopNav() {
  return (

     <nav className="header-nav-link ms-auto">
      <ul className="d-flex align-items-center">
         <li ><i class="bi bi-house-door-fill"></i><a href="/"></a></li>
         <li ><i class="bi bi-people-fill"></i> <a href="/user"></a></li>
         <li ><i class="bi bi-gear"></i><a href="/admin"></a></li>
         
      </ul>
    </nav> )
}

export default TopNav