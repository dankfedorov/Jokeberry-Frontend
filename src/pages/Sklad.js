import FromSklad from "components/FromSklad";
import React from "react";
import NavItem from "../components/NavItem";
import navList from "../components/data/navitem";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import CardInputBlock from "components/CardInputBlock";
import "../assets/styles/cardinputblock.css";

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
          <span className="text-small12">Пользователь:{username}</span>
          <span className="text-small12">ID: {id}</span>
          <span className="text-small12">Статус: {role}</span>
        </ul>

        <ul class="nav flex-column">
          <hr></hr>
          <p className="text-small12">Рабочий стол</p>
          
          <li className="nav-link">
            <a href="#" className="d-flex align-items-center">
              <i className="bi bi-0-square"></i>
              <span className="">Рейтинг игроков </span>
            </a>
          </li>
       
          <li className="nav-link">
            <a href="#" className=" d-flex align-items-center">
              <i className="bi bi-4-square"></i>
              <span className="">Список участников</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className=" d-flex align-items-center">
              <i className="bi bi-4-square"></i>
              <span className="">Таймер игры</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className=" d-flex align-items-center">
              <i className="bi bi-4-square"></i>
              <span className="">Правила проведения</span>
            </a>
          </li>
  
        </ul>
        <hr></hr>
        
        
        <ul class="nav flex-column mb-2">
          <p className="text-small12">Разделы сайта</p>
          {navList.map((nav) => (
            <NavItem key={nav._id} nav={nav} />
          ))}
        </ul>
        <hr></hr>
        <ul class="nav flex-column mb-1 text-small12">
         <Calendar/>
        </ul>
        <hr></hr>

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
            <CardInputBlock />
            <FromSklad />
            {/* <FromApi /> */}
          
          </main>
        </div>
      </div>
    </div>
  );
}

export default ShowRoom;
