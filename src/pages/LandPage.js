import React from "react";
import "../assets/styles/landpage.css";
import robot1 from "../assets/images/robot1.png";
import robot2 from "../assets/images/robot2.png";
import robot3 from "../assets/images/robot3.png";
import robot4 from "../assets/images/robot4.png";
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
  <Snow />

  //
  return (
    <>
      {/* <!-- Hero Section  vh-100 --> */}
      <section id="hero" className="text-white text-center hero ">
      
        <div className="container container__hero  ">
          <div className="row d-flex align-items-center justify-content-between ">
            
            <div className="col-md-6 mb-2">
              <img src={phones} alt="jokeberry" />
            </div>

            <div className="col-md-6">
              <h1 className="mb-3 p-2">Соврменные технологии <br></br>для Вашего сайта.</h1>
              <p className="hero__descr mb-2">адаптивная верстка 320*1920px </p>
              <p className="hero__descr mb-4"> Инструменты: HTML, React, Javascript, Nodejs, MongoDB</p>
          
              {/* <a
                href="https://t.me/JokeBerry_Bot"
                target="_blank"
                className="tg-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                </svg>
                Telegram
              </a> */}
               
            </div>
           
            {/* <div className="col-md-1">
              <img src={robot2} alt="" />
            </div> */}

          </div>
        </div>
      </section>

      <main>

        {/* <!-- Frontend --> */}
        <section id="about" className="bg-light py-5 about">
          <div className="container about__container">
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
                        <li>инструмент для разработки</li>
                        <li>тестирования и работа с API</li>
                        <li>типы запросов: GET, POST, PUT, DELETE</li>
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
                <section id="nav-block" className="nav-block ">
          <div className="container ">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-6 text-center ">
                <span className="nav-block__h2 mb-3">QR переход на сайт</span>
              </div>

              <div className="col-md-6">
                <ul className="nav-blcok__group">
                  <li className="nav-block__link">
                    <a href="#" className="">
                      <div className="shadow-sm mb-4">
                        <div className="card__body">
                          <img src={qr} alt="qr link" />
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
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
