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
  return (
    <div>
      <div className="container-fluid container">

        <div className="row">
          <div className="col-md-2">
          <LeftSideMenu/>
          </div>  

          <div className="col-md-8 ">    
          
           <Architect/> 
           <DisignMaket/>
           <CodingHtml/> 
        
          </div>          
          
          <div className="col-md-2 ">
          <UserList/>
          </div>
        
        </div>
        
      </div>
     
    </div>
  );
}

export default Documentation;
