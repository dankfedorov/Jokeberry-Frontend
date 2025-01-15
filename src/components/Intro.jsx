import React from "react";
import robot2 from "../assets/images/robot2.png";

function Intro() {
  return (
    <div>
      <section id="intro" className="intro">
        <div className="container container__intro">
          
          {/* <h2 className="mb-2">Основная коцепция</h2> */}
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-md-8">
              
                <span className="p-2">
                  <h3 className="mb-4">Как сделать свой сайт и с чего лучше начать?</h3>
                  <p className="mb-4">
                    Данный проект, создан для того чтобы показать возможности
                    использования актуальных инструментов при работе по созданию{" "}
                    собственных проектов. Сайт создан в формате презентации.
                  </p>
                  
                  <hr></hr>
                  <p className="mb-1">
                    Чтобы реализовать данный проект мне пришлось разбить весь
                    проект на этапы:
                  </p>
                  <p className="mb-4">
                    <ul>
                      <span className="small">Frontend</span>
                      <li>Составить архитектуру сайта</li>
                      <li>Подготовить и разработать дизайн макет сайта</li>
                      <li>Сделать верстку сайта, подготовить код для браузеров</li>
                      <li>Разработка адптивности сайта на всех устрйоствах</li>
                      <li>Интегрировать с React</li>
                      <li>Подключить нужные библиотеки</li>
                     
                      <span className="small">Backend</span>
                      <li>Сделать серверную часть проекта в Node.js</li>
                      <li>Подключить нужные библиотеки Express, Cors, и прочие</li>
                      <li>Подключить и настроить базу данных MongoDB</li>
                      <li>Разработать авторизацию пользователей и интегрировать с базой данных</li>
                      <li>Развернуть сервер на хостинге</li>
                      <li>Связать Frontend + Backend</li>
                    </ul>
                    </p>
                    <hr></hr>
                  <p className="mb-4">
                    Далее для того чтобы получить доступ к материалам, Вам
                    необходимо пройти авторизацию. Простой пример "JWT
                    авторизации" покажет вам возможности работы связок между{" "}
                    <b>frontend и backend</b> частями.
                  </p>
                  <p className="text-center">
                    <a
                      href="/register"
                      className="nav-link nav-profile d-flex align-items-center "
                    >
                      <span className="d-none d-md-block ps-2 reg-link hero__btn">
                        {" "}
                        Перейти к материалам
                      </span>
                    </a>
                  </p>
                </span>
             
            </div>
            <div className="col-md-4">
              <div className="p-3">
                <p className="text-center">
                  <img src={robot2} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
