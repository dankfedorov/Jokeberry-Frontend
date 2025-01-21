import React from "react";
import "../assets/styles/dashboard.css";

import SidebarMenu from "components/SidebarMenu";
import Architect from "components/Architect";
import RatesAPI from "components/RatesAPI";

import DisignMaket from "components/DisignMaket";
import CodingHtml from "components/CodingHtml";

function Documentation() {
  return (
    <div>
      <div className="container-fluid dashboard__container">
        <div className="row">
          {/* Левое меню */}
          <SidebarMenu />

          {/* Центральный блок */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main__container">
            
            
            


          </main>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
