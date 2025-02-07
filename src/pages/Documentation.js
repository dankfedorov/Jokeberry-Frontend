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
import QrBlock from "components/QrBlock";
import TopLinks from "components/TopLinks";
import LeftSideMenu from "components/LeftSideMenu";
import Nav from "components/Nav";
import UserList from "components/UserList";

function Documentation() {
  return (
    <div>
      <div className="container-fluid ">

        <div className="row">
          <div className="col-md-2">
          {/* Левое меню */}
          {/* <SidebarMenu /> */}
          <LeftSideMenu/>
          </div>
          
          {/* <main className="col-md-12 col-lg-10 ms-sm-auto px-md-4 "> */}
          <div className="col-md-7 ">
           
           <Architect/> 
           <DisignMaket/>
           <CodingHtml/> 
          </div>

          
          <div className="col-md-3 ">
          {/* Правое меню */}
          <UserList/>
          </div>

        </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default Documentation;
