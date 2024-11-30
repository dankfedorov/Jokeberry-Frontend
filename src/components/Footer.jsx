import React from "react";
import "../assets/styles/footer.css";
import robot5 from "../assets/images/robot5.png";
import WeatherAPI from "../components/WeatherAPI";
import RatesAPI from "../components/RatesAPI";
import qr from "../assets/images/qr.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container p-5">
        <div className="row text-center">
          <div className="col-md-3 p-1"><img src={robot5}/></div>
          <div className="col-md-3 p-1"><RatesAPI /></div>
          <div className="col-md-3 p-1"><WeatherAPI /></div>
          <div className="col-md-3 p-1"><img src={qr}/></div>
          </div>

        <div className="row text-center">
          <div className="footer_desc"> Проект по созданию сайтов. 2024-2025г. Fedorov Daniil</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
