import React from "react";

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
        <div class="position-sticky pt-0">
          <ul class="nav flex-column">
            <span className="very-small">Username:{username}</span>
            <span className="very-small">ID: {id}</span>
            <span className="very-small">Статус: {role}</span>
          </ul>

          <ul class="nav flex-column">
            <p className="very-small">Frontend</p>

            <li className="nav-link">
              <a href="#" className="dropdown-item d-flex align-items-center">
                <i className="bi bi-badge-ar"></i>
                <span className="">Пользователи</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default LeftSideMenu;
