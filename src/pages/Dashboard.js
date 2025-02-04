import React from "react";
import "../assets/styles/dashboard.css";
import SidebarMenu from "components/SidebarMenu";
import RatesAPI from "components/RatesAPI";
import TextToPdf from "components/TextToPdf";
// import Toastify from "components/Toastify";


function Dashboard() {
  return (
    <div>
      <div className="container-fluid dashboard__container">
        <div className="row">
          {/* Левое меню */}
          <SidebarMenu />
         
          
          {/* Центральный блок */}
          <main className="col-md-9 col-lg-10 ms-sm-auto px-md-4 ">
          <RatesAPI />
          <br></br>
          <TextToPdf />
       

          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
