import React from "react";
import "../assets/styles/dashboard.css";
import Architect from "components/Architect";
import DisignMaket from "components/DisignMaket";
import CodingHtml from "components/CodingHtml";
import Footer from "components/Footer";
import LeftSideMenu from "components/LeftSideMenu";
import UserList from "components/UserList";
import EasyDev from "components/EasyDev";

function Documentation() {
  const username = JSON.parse(localStorage.getItem("username"));
  const id = JSON.parse(localStorage.getItem("id"));
  const role = JSON.parse(localStorage.getItem("roles"));

  return (
    <div>
      <div className="container-fluid container">
        <div className="row">
          <div className="col-md-2">
            <LeftSideMenu />
          </div>

          <div className="col-md-8 ">
            <Architect />
            <DisignMaket />
            <CodingHtml />
          </div>

          <div className="col-md-2 ">
          <UserList />
          <p className="very-small">Пользователь:</p>
            <ul class="nav flex-column">
              <span className="very-small">Username:{username}</span>
              <span className="very-small">ID:{id}</span>
              <span className="very-small">Статус: {role}</span>
            </ul>

                      
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
