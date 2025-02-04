import React from "react";
import "../assets/styles/landpage.css";
import vs from "../assets/images/VS.png";
import reactimg from "../assets/images/React.png";
import node from "../assets/images/Node.png";
import mongo from "../assets/images/MongoDB.png";
// import Snow from "components/Snow";
import QrBlock from "components/QrBlock";
import EasyDev from "components/EasyDev";


import Typewriter from "typewriter-effect";
import TelegramLink from "components/TelegramLink";
import AboutProject from "components/About";


// Color body changed
document.body.style.background = "#d2d2d2"; // сделать фон красным
setTimeout(() => (document.body.style.background = ""), 1000); // вернуть назад

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

  //
  return (
    <>
      {/* <!-- hero section  vh-100 --> */}
      <section id="hero" className="text-white text-center hero ">
        <div className="container container__hero ">
          <div className="row d-flex align-items-center justify-content-between ">
            <div className="col-md-12 ">
              <h1 className="mb-2 p-0">
                Создай свой проект<br></br> в интеренете
                {/* <Typewriter
                options={{
                  strings: ["Создайте свой сайт", "Реализуй свой проект"],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
              </h1>

              {/* <p className="hero__descr mb-2">
                веб-приложение  с использованием
                компонентов React.
              </p> */}
              <p className="hero__descr mb-2">
                {" "}
                HTML, CSS, React, Javascript<br></br> Nodejs, MongoDB
              </p>
            </div>
          </div>

          {/* <div className="pulse__block">
            <div className="pulse">
              <span></span>
              <span></span>
              <span></span>
              <span></span>

              <button class="pulse__button">
                <a class="pulse__link" href="/login">
                  НАЧНЕМ
                </a>
              </button>
            </div>
          </div> */}

          <div className="row container__hero__icons mb-2 ">
            <div className="col-md-2 col-2 ">
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
        <TelegramLink />
      </section>

      <main>
        <section id="features" className="features text-center">
          <div className="container container__features ">
            
            <div className="row">
              <div className="col-md-12">
                <h2 className="features__h2">Создавай интерфейсы быстрее, проще, мощнее!  </h2>
                <Typewriter
                  options={{
                    strings: [
                      "React был сделан,",
                      "React был создан, чтобы решить проблемы масштабирования больших приложений.Которые остаются предсказуемыми и управляемыми даже при росте сложности.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                {/* <b>Что делать дальше ? </b> Все что Вам нужно это придумать
              отличный проект для Web */}
              </div>
            </div>
          
          </div>
        </section>
     
        
        <EasyDev />
        <QrBlock />
      
        <section className="text-center p-1 ">
          <a href="/Video" className="btn-reset">
            <button className="btn-reset btn">
              <i class="bi bi-play-fill p-1"></i>Live Preview
            </button>
          </a>
        </section>
      </main>

      {/* <!-- Footer Section --> */}
    </>
  );
}

export default LandPage;
