import React from "react";
import "../assets/styles/dashboard.css";

import SidebarMenu from "components/SidebarMenu";
import Architect from "components/Architect";
import About from "components/About";
import RatesAPI from "components/RatesAPI";

import DisignMaket from "components/DisignMaket";
import CodingHtml from "components/CodingHtml";
import EasyDev from "components/EasyDev";
import Footer from "components/Footer";

function Documentation() {
  return (
    <div>
      <div className="container-fluid dashboard__container container">
        <div className="row">
          {/* Левое меню */}
          {/* <SidebarMenu /> */}

          
          {/* <main className="col-md-12 col-lg-10 ms-sm-auto px-md-4 "> */}
          <main className="ms-sm-auto px-md-4 ">
           
           <Architect/> 
           <DisignMaket/>
           <CodingHtml/> 


          </main>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default Documentation;
