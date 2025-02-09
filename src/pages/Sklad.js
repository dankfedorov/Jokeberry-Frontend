import FromSklad from "components/FromSklad";
import React from "react";
import NavItem from "../components/NavItem";
import navList from "../components/data/navitem";

function LeftMenu() {
  const username = JSON.parse(localStorage.getItem("username"));
  const id = JSON.parse(localStorage.getItem("id"));
  const role = JSON.parse(localStorage.getItem("roles"));

  return (

    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block sidebar collapse left-block"
    >
      <div class="position-sticky pt-0">
        <ul class="nav flex-column">
          <span className="very-small">Пользователь:{username}</span>
          <span className="very-small">ID: {id}</span>
          <span className="very-small">Статус: {role}</span>
        </ul>

        <ul class="nav flex-column">
          <hr></hr>
          <p className="very-small">Рабочий стол</p>
          
          <li className="nav-link">
            <a href="#" className="d-flex align-items-center">
              <i className="bi bi-0-square"></i>
              <span className="">Добавить позици </span>
            </a>
          </li>
          <li className="nav-link bg-gradient">
            <a href="#" className=" d-flex align-items-center">
              <i className="bi bi-3-square "></i>
              <span className="">Редактирвоать</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className=" d-flex align-items-center">
              <i className="bi bi-4-square"></i>
              <span className="">Заметки</span>
            </a>
          </li>
  
        </ul>
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

function ShowRoom() {
  return (
    <div>
      <div className="container-fluid dashboard__container">
        <div className="row">
          {/* Левое меню */}
          <LeftMenu />

          {/* Центральный блок */}
          <main className="col-md-9 col-lg-10 ms-sm-auto px-md-4 ">
            
            <FromSklad />
            {/* <FromApi /> */}
          
          </main>
        </div>
      </div>
    </div>
  );
}

export default ShowRoom;
