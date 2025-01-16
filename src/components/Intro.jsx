import React from "react";
import robot2 from "../assets/images/robot2.png";

function Intro() {
  return (
    <div>
      <section id="intro" className="intro">
        <div className="container container__intro">
          
          <h2 className="mb-0">О проекте</h2>

          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-md-8">
            
                <span className="p-1">
                  <h3 className="mb-2">Простой и удобый сайт в интернете</h3>
                  <p className="mb-2">
                    Данный проект, создан для того чтобы показать возможности
                    использования актуальных инструментов при работе по созданию{" "}
                    собственных проектов.                   </p>
                  <p className="mb-4">
                  Разбиваем все работы на этапы:

                    <ul>
                    
                      <span className="small">Frontend</span>
                      <li>Архитектуру сайта</li>
                      <li>Подготовить и разработать дизайн макет сайта</li>
                      <li>Сделать верстку сайта, подготовить код для браузеров</li>
                      <li>Разработка адаптивность сайта на всех устрйоствах</li>
                      <li>Интегрировать с React</li>
                      <li>Подключить нужные библиотеки</li>
                     
                      <span className="small">Backend</span>
                      <li>Серверную часть проекта в Node.js</li>
                      <li>Требуются библиотеки Express, Cors, и т.д.</li>
                      <li>Подключить и настроить базу данных MongoDB</li>
                      <li>Создать систему авторизации пользователей и интегрировать с базой данных</li>
                      <li>Развернуть серверную часть и часть клинта на хостинге(ах)</li>
                      <li>Связать Frontend + Backend</li>
                    </ul>
                    </p>
                    <hr></hr>
                  <p className="mb-4">
                    Далее для того чтобы получить доступ к материалам, Вам
                    необходимо пройти авторизацию. 
                  </p>
                  <p className="mb-4">
                  Простой пример "JWT
                    авторизации" покажет вам возможности работы связок между{" "}
                    <b>frontend и backend</b> частями.
                  </p>
                  <p className="text-center">
                    <a
                      href="/register"
                      className="btn"
                    >
                      <span className="">
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
