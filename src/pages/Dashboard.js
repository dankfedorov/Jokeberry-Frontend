import React from "react";
import "../assets/styles/dashboard.css";

import Breadcrumbs from "components/Breadcrumbs";
import Users from "components/Users";
import SidebarMenu from "components/SidebarMenu";
import Architect from "components/Architect";
import UserList from "components/UserList";
import VideoStart from "components/VideoStart";
function Dashboard() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">

          {/* Левое меню */}
          <SidebarMenu />

          {/* Центральный блок */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main__container">
          {/* <Breadcrumbs /> */}
          
          {/* <main class="col-md-8 col-lg-9 px-md-3  ms-sm-auto"> */}
          
          <VideoStart />
           <Architect/>
           
           
            

          
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
