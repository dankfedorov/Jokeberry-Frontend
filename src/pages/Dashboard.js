import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "../assets/styles/dashboard.css";
import SidebarMenu from "components/SidebarMenu";
import RatesAPI from "components/RatesAPI";
import TextToPdf from "components/TextToPdf";
import { Snow } from "react-bootstrap-icons";
import FromApi from "components/FromApi";
// import Toastify from "components/Toastify";

const ImgBlcok = () => {
  return (
    <div>
      <main className="">
        <RatesAPI />
      </main>
    </div>
  );
};

function Dashboard() {
  return (
    <div>
      <div className="container-fluid dashboard__container">
        <div className="row">
          {/* Левое меню */}
          <SidebarMenu />
          

          {/* Центральный блок */}
          <main className="col-md-9 col-lg-10 ms-sm-auto px-md-4 ">
            <ImgBlcok />
            <FromApi />
          </main>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
