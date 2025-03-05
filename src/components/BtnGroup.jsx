import React from "react";

function BtnGroup() {
  return (
    <div>
    <span className="nav-item dropdown ms-auto menu">
      <a
        href="/dashboard"
        className="nav-link nav-profile d-flex align-items-center  pe-0 "
        data-bs-toggle="dropdown"
      > Изучайте
      <i class="bi bi-caret-down"></i>
      </a>
      
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">

        <li className="nav-link">
          <a href="/present" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-person"></i>
            <span className="">Презентация</span>
          </a>
        </li>

        <li className="nav-link">
          <a href="/register" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-door-open"></i>
            <span className="">Login / Registration</span>
          </a>
        </li>
        
        <li className="nav-link">
          <a href="/" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-box-arrow-left"></i>
            <span className="">Выход</span>
          </a>
        </li>
      </ul>
    </span>

    </div>
  );
}

export default BtnGroup;
