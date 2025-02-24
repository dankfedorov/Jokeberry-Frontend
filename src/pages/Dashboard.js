import FromSklad from "components/FromSklad";
import React from "react";
import NavItem from "../components/NavItem";
import navList from "../components/data/navitem";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CardInputBlock from "components/CardInputBlock";
import "../assets/styles/cardinputblock.css";
import FromApi from "components/FromApi";

function LeftMenu() {
  const username = JSON.parse(localStorage.getItem("username"));
  const id = JSON.parse(localStorage.getItem("id"));
  const role = JSON.parse(localStorage.getItem("roles"));

  return (
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
      
      <span className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          fill="currentColor"
          class="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
      </span>

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
              <i className="bi bi-clipboard2-pulse"></i>
              <span className="">Пользователи</span>
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
          <Calendar />
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
            {/* <FromSklad /> */}
            <FromApi/>
            {/* <FromApi /> */}
          </main>
        </div>
      </div>
    </div>
  );
}

export default ShowRoom;
