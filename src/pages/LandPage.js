import React from "react";
import "../assets/styles/landpage.css";
import qr from "../assets/images/qr.png";
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
import phones from "../assets/images/phones.png";
import Snow from "components/Snow";
import Intro from "components/Intro";


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
              
              {/* <div className="col-md-6 mb-2">
                <img src={phones} alt="jokeberry" />
              </div> */}

              <div className="col-md-12">
                <h1 className="mb-3 p-2">
                  Создай свой сайт <br></br>
                  забудь про сложности
                </h1>

                <p className="hero__descr mb-1">
                  {" "}
                  современная техгология создания сайтов
                </p>
                <p className="hero__descr mb-1">
                  {" "}
                  быстро, просто и понятно
                </p>
                <p className="hero__descr mb-2">
                  {" "}
                  HTML, CSS, React, Javascript, Nodejs, MongoDB
                </p>

                </div>

            </div>
          </div>
        
      </section>
      
      

      <main>
        
        <Intro />

        <section id="tech" className="bg-light py-5 tech ">
          <div className="container tech__container">
            <p className="small text-muted">( инструментарий )</p>
            <h2 className="text-center mb-4">Технологии для FRONTEND</h2>
            {/* <p className="display-10">инструменты</p> */}
            <div className="row text-center">
              {/* <!-- Plan 1 --> */}
              <div className="col-md-4">
                <a href="https://www.drawio.com">
                  <div className="card shadow-sm mb-4">
                    <div className="card__body">
                      <img src={draw} alt="qr link" />
                      <h5 className="card-title">www.drawio.com</h5>
                      <p className="display-6">Архитектура</p>
                      <ul className="list-unstyled">
                        <li>Бесплатно</li>
                        <li>проектируем архитектуру сайта</li>
                        <li>WEB online</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
              {/* <!-- Plan 2 --> */}
              <div className="col-md-4">
                <a href="https://www.figma.com" className="text-muted">
                  <div className="card shadow-sm mb-4">
                    <div className="card__body">
                      <img src={figma} alt="qr link" />
                      <h5 className="card-title">www.figma.com</h5>
                      <p className="display-6">Структура сайта</p>
                      <ul className="list-unstyled">
                        <li>Бесплатно</li>
                        <li>создаем структуру и дизайн</li>
                        <li>WEB online</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
              {/* <!-- Plan 3 --> */}
              <div className="col-md-4">
                <a
                  href="https://visualstudio.microsoft.com/ru/"
                  className="text-muted"
                >
                  <div className="card shadow-sm mb-4">
                    <div className="card__body">
                      <img src={vs} alt="qr link" />
                      <h5 className="card-title">
                        Visual studio от microsoft.com
                      </h5>
                      <p className="display-6">Редактор кода</p>
                      <ul className="list-unstyled">
                        <li>Бесплатно</li>
                        <li>HTML + CSS + JS</li>
                        <li>WEB online</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
              {/* <!-- Plan 1 --> */}
              <div className="col-md-4">
                <a href="https://getbootstrap.com" className="text-muted">
                  <div className="card shadow-sm mb-4">
                    <div className="card__body">
                      <img src={bootst} alt="qr link" />
                      <h5 className="card-title">www.getbootstrap.com</h5>
                      <p className="display-6">Bootstrap</p>
                      <ul className="list-unstyled">
                        <li>Бесплатно</li>
                        <li>фреймворк стилей CSS </li>
                        <li>для быстрой пользовательского интерейса</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>

              {/* <!-- Plan 2 --> */}
              <div className="col-md-4">
                <a href="https://ru.react.dev/" className="text-muted">
                  <div className="card shadow-sm mb-4">
                    <div className="card__body">
                      <img src={reactimg} alt="qr link" />
                      <h5 className="card-title">www.react.dev</h5>
                      <p className="display-6">REACT </p>
                      <ul className="list-unstyled">
                        <li>Бесплатно</li>
                        <li>WEB библиотека</li>
                        <li>для создания приложений</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>

              {/* <!-- Plan 3 --> */}
              <div className="col-md-4">
                <a href="https://www.npmjs.com/" className="text-muted">
                  <div className="card shadow-sm mb-4">
                    <div className="card__body">
                      <img src={npmimg} alt="qr link" />
                      <h5 className="card-title">www.npmjs.com</h5>
                      <p className="display-6">NPM модули</p>
                      <ul className="list-unstyled">
                        <li>Бесплатно</li>
                        <li>пакетный менеджер для React </li>
                        <li>библиотеки,модули</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Backend --> */}
        <section id="about" className="bg-light py-5 about">
          <div className="container about__container">
            <p className="small text-muted">( инструментарий )</p>
            <h2 className="text-center mb-4">Технологии для BACKEND</h2>
            {/* <p className="display-10">инструменты</p> */}
            <div className="row text-center">
              {/* <!-- Plan 1 --> */}
              <div className="col-md-4">
                <a href="https://nodejs.org">
                  <div className="card shadow-sm mb-4">
                    <div className="card__body">
                      <img src={node} alt="qr link" />
                      <h5 className="card-title">https://nodejs.org</h5>
                      <p className="display-6">NODE.JS</p>
                      <ul className="list-unstyled">
                        <li>Бесплатно</li>
                        <li>среда выполнения JavaScript</li>
                        <li>JavaScript-код на стороне сервера</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
              {/* <!-- Plan 2 --> */}
              <div className="col-md-4">
                <a href="https://www.mongodb.com/" className="text-muted">
                  <div className="card shadow-sm mb-4">
                    <div className="card__body">
                      <img src={mongo} alt="qr link" />
                      <h5 className="card-title">www.mongodb.com</h5>
                      <p className="display-6">MongoDB</p>
                      <ul className="list-unstyled">
                        <li>База данных</li>
                        <li>создаем структуру и дизайн</li>
                        <li>Данные хранятся в формате JSON</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
              {/* <!-- Plan 2 --> */}
              <div className="col-md-4">
                <a href="https://ru.react.dev/" className="text-muted">
                  <div className="card shadow-sm mb-4">
                    <div className="card__body">
                      <img src={reactimg} alt="qr link" />
                      <h5 className="card-title">www.react.dev</h5>
                      <p className="display-6">REACT </p>
                      <ul className="list-unstyled">
                        <li>Бесплатно</li>
                        <li>WEB библиотека</li>
                        <li>для создания приложений</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>

              {/* <!-- Plan 3 --> */}
              <div className="col-md-4">
                <a href="https://www.npmjs.com/" className="text-muted">
                  <div className="card shadow-sm mb-4">
                    <div className="card__body">
                      <img src={npmimg} alt="qr link" />
                      <h5 className="card-title">www.npmjs.com</h5>
                      <p className="display-6">NPM модули</p>
                      <ul className="list-unstyled">
                        <li>Бесплатно</li>
                        <li>пакетный менеджер для React </li>
                        <li>библиотеки,модули</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>

              {/* <!-- Plan 2 --> */}
              <div className="col-md-4">
                <a href="https://www.postman.com/" className="text-muted">
                  <div className="card shadow-sm mb-4">
                    <div className="card__body">
                      <img src={postman} alt="postman link" />
                      <h5 className="card-title">www.postman.com</h5>
                      <p className="display-6">Postman Agent</p>
                      <ul className="list-unstyled">
                       
                        <li>работа и тестирвоание</li>
                        <li>взаимодействие с API запросами</li>
                        <li> GET, POST, PUT, DELETE</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>

              {/* <!-- Plan 3 --> */}
              <div className="col-md-4">
                <a href="https://www.netlify.com/" className="text-muted">
                  <div className="card shadow-sm mb-4">
                    <div className="card__body">
                      <img src={deploy} alt="deploy link" />
                      <h5 className="card-title">Deploy (деплой)</h5>
                      <p className="display-6">Развертывание</p>
                      <ul className="list-unstyled">
                        <li>это процесс развертывания приложения</li>
                        <li>подключение Frontend + Backend</li>
                        <li>взаимодействие с MongoDB</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* pIC BLOCK */}
        <section id="nav-block" className="nav-block bg__girl">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center p-3">
              <div className="col-md-6 ">
                <ul className="nav-blcok__group">
                  <li className="nav-block__link">
                    <a href="/dashboard" className="">
                      <div className="shadow-sm mb-4 ">
                        <div className="card__body">
                          <img src={qr} alt="qr link" />
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-6 text-center bg__girl">
                <span className="nav-block__h2 mb-3">QR переход на сайт</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- Footer Section --> */}
    </>
  );
}

export default LandPage;
