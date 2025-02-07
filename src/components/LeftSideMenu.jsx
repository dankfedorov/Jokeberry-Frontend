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
        class="col-md-3 col-lg-2 d-md-block sidebar collapse left-block"
      >
        <div class="">
            <ul class="">
            <p className="very-small">Этапы разработки APP</p>

            <li className="nav-link">
              <a href="#" className="dropdown-item d-flex align-items-center">
                <i className="bi bi-badge-ar"></i>
                <span className="">Архитектура</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#" className="dropdown-item d-flex align-items-center">
                <i className="bi bi-badge-ar"></i>
                <span className="">Дизайн макета</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#" className="dropdown-item d-flex align-items-center">
                <i className="bi bi-badge-ar"></i>
                <span className="">Кодинг/Верстка</span>
              </a>
            </li>

          </ul>

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
