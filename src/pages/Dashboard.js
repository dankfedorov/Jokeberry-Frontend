import React from "react";
import "../assets/styles/dashboard.css";
import Users from "components/Users";
import SidebarMenu from "components/SidebarMenu";
import Architect from "components/Architect";
import RatesAPI from "components/RatesAPI";

import UserList from "components/UserList";
import VideoStart from "components/VideoStart";
import DisignMaket from "components/DisignMaket";
import CodingHtml from "components/CodingHtml";
function Dashboard() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* Левое меню */}
          <SidebarMenu />

          {/* Центральный блок */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main__container">
            
            <RatesAPI />
            <Architect />
            <DisignMaket />
            <CodingHtml />


          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
