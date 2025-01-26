import React from "react";
import "../assets/styles/dashboard.css";

import SidebarMenu from "components/SidebarMenu";
import Architect from "components/Architect";
import About from "components/About";
import RatesAPI from "components/RatesAPI";

import DisignMaket from "components/DisignMaket";
import CodingHtml from "components/CodingHtml";
import EasyDev from "components/EasyDev";

function Documentation() {
  return (
    <div>
      <div className="container-fluid dashboard__container">
        <div className="row">
          {/* Левое меню */}
          <SidebarMenu />

          {/* Центральный блок */}
          <main className="col-md-9 col-lg-10 ms-sm-auto px-md-4 ">
           
           <Architect/> 
           <DisignMaket/>
           <CodingHtml/> 


          </main>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
