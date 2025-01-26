import React from "react";
import "../assets/styles/dashboard.css";
import SidebarMenu from "components/SidebarMenu";
import RatesAPI from "components/RatesAPI";
import Toastify from "components/Toastify";

function Dashboard() {


  return (
    <div>
      <div className="container-fluid dashboard__container">
        <div className="row">
          {/* Левое меню */}
          <SidebarMenu />
         
          
          {/* Центральный блок */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main__container">
          
          <RatesAPI />
          
            


          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
