import React from "react";
import "../assets/styles/landpage.css";
import vs from "../assets/images/VS.png";
import reactimg from "../assets/images/React.png";
import node from "../assets/images/Node.png";
import mongo from "../assets/images/MongoDB.png";
// import Snow from "components/Snow";
import QrBlock from "components/QrBlock";
// import EasyDev from "components/EasyDev";

import Typewriter from "typewriter-effect";
// import TelegramLink from "components/TelegramLink";
import AboutProject from "components/About";

// Color body changed
// document.body.style.background = "#fff"; // сделать фон красным
// setTimeout(() => (document.body.style.background = ""), 2000); // вернуть назад

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
        <div className="container container__hero p-2">
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
              <a
                href="https://visualstudio.microsoft.com/ru/"
                target="_blank"
                class="footer-link "
                rel="noreferrer"
              >
                <img src={vs} alt="vs code link" />
              </a>
            </div>
            <div className="col-md-2 col-2">
              <a
                href="https://react.dev/"
                target="_blank"
                class="footer-link "
                rel="noreferrer"
              >
                <img src={reactimg} alt="react link" />
              </a>
            </div>
            <div className="col-md-2 col-2">
              <a
                href="https://nodejs.org/en"
                target="_blank"
                class="footer-link "
                rel="noreferrer"
              >
                <img src={node} alt="node link" />
              </a>
            </div>
            <div className="col-md-2 col-2">
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                class="footer-link "
                rel="noreferrer"
              >
                <img src={mongo} alt="mongoDB link" />
              </a>
            </div>
          </div>
        </div>
        {/* <TelegramLink /> */}

        <div className="row">
          <div className="col-md-12"></div>
          <p className="container p-2 so-small">
            <strong className="green">SPA (Single Page Application)</strong> <br></br> —
            это одностраничное веб-приложение.
          </p>
        </div>
      </section>

      <section className="promo">
        <div className="row">
          <div className="col-md-12 ">
             <ul className="row container ">
            
              <li className="col-md-4 hero__block">
                <div className="hero__block__text">
                  <span>61 %</span>
                  <h2>REACT</h2>
                  <p className="small">
                    JavaScript-библиотека для создания пользовательских
                    интерфейсов (UI).{" "}
                  </p>
                  <p className="small">
                    Плюсы: Высокая производительность, большое сообщество,
                    гибкость.{" "}
                  </p>
                </div>
              </li>
              <li className=" col-md-4 hero__block">
                <div className="hero__block__text">
                  <span>25 %</span>
                  <h2>VUE</h2>
                  <p className="small">
                    Прогрессивный JavaScript-фреймворк для создания UI и
                    приложений (SPA).{" "}
                  </p>
                  <p className="small">
                    Плюсы: Легкость изучения, гибкость, высокая
                    производительность.{" "}
                  </p>
                </div>
              </li>

              <li className="col-md-4  hero__block">
                <div className="hero__block__text">
                  <span>14 %</span>
                  <h2>ANGULAR</h2>
                  <p className="small">
                    Полноценный JavaScript-фреймворк для создания
                    веб-приложений.
                  </p>
                  <p className="small">
                    Плюсы: Полноценный фреймворк, поддержка TypeScript, подходит
                    для крупных проектов.{" "}
                  </p>
                </div>
              </li>
            </ul>
         
          </div>
        </div>
      </section>

      <main>
        <section id="features" className="features text-center">
          <div className="container container__features ">
            <div className="row">
              <div className="col-md-12">
                <h2 className="features__h2">
                  Создавай интерфейсы быстрее, проще, мощнее!{" "}
                </h2>
                <Typewriter
                  options={{
                    strings: [
                      "React был сделан,",
                      "React был создан, чтобы решить проблемы управления и масштабирования больших приложений.",
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

        <AboutProject />
        {/* <EasyDev /> */}
        <QrBlock />
      </main>

      {/* <!-- Footer Section --> */}
    </>
  );
}

export default LandPage;
