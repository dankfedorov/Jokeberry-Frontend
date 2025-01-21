import React from "react";
import "../assets/styles/landpage.css";
import draw from "../assets/images/Drawio.png";
import figma from "../assets/images/Figma.png";
import vs from "../assets/images/VS.png";
import bootst from "../assets/images/Bootstrap.png";
import reactimg from "../assets/images/React.png";
import npmimg from "../assets/images/Npm.png";
import node from "../assets/images/Node.png";
import mongo from "../assets/images/MongoDB.png";
import postman from "../assets/images/Postman.png";
import deploy from "../assets/images/Deploy.png";
import monitor__img from "../assets/images/Monitor.png";
import Snow from "components/Snow";
import Intro from "components/About";
import QrBlock from "components/QrBlock";
// import PulseTag from "components/PulseTag";

function LandPage() {
  const anchors = document.querySelectorAll('.link_box a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute("href").substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // remove all Обнуляем все
  localStorage.clear();
  console.log("ID has been cleared success.");
  <Snow />;

  //
  return (
    <>
      {/* <!-- hero section  vh-100 --> */}
      <section id="hero" className="text-white text-center hero ">
        <div className="container container__hero ">
          <div className="row d-flex align-items-center justify-content-between ">
            <div className="col-md-12 ">
              <h1 className="mb-3 p-2">
                Создай свой проект <br></br>в Интеренете
              </h1>

              <p className="hero__descr mb-3">
                высококачественные веб-приложения <br></br> с использованием компонентов
                React.
              </p>
              <p className="hero__descr mb-4">
                {" "}
                HTML, CSS, React, Javascript,<br></br> Nodejs, MongoDB
              </p>
            </div>
          </div>

          <div className="row container__hero__icons mb-4">
            <div className="col-md-2 col-2">
              <img src={vs} alt="qr link" />
            </div>
            <div className="col-md-2 col-2">
              <img src={reactimg} alt="qr link" />
            </div>
            <div className="col-md-2 col-2">
              <img src={node} alt="qr link" />
            </div>
            <div className="col-md-2 col-2">
              <img src={mongo} alt="qr link" />
            </div>
            
            
          </div>

          

        </div>
      </section>

      <main>

        <section id="features" className="features text-center">
          <div className="container container__features ">
            <span className="p-2"><b>Что делать дальше ? </b> Все что Вам нужно это построить отличный проект для Web
            </span> 
            <a href="/Video" className=""> 
            <button className="btn-reset btn"><i class="bi bi-play-fill p-1"></i>Live Preview</button>
           </a>

          </div>          
        </section>

        <QrBlock />
      
      </main>

      {/* <!-- Footer Section --> */}
    </>
  );
}

export default LandPage;
