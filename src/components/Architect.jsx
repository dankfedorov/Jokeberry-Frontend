import React from "react";
import architect_img from "../assets/images/architect_img.jpg";
import robot3 from "../assets/images/robot3.png";
import robot4 from "../assets/images/robot4.png";

function Architect() {
  return (
    <>
    <section id="architect" className="architect "> 

      <div className=" container__architect">
        <h2  className="text-center mb-0">Архитектура проекта</h2>
        <p className="text-center mb-4">Frontend и Backend</p>


        <div className="row ">
          <div className="col-md-6">
            <p className="p-2">
              <b>Архитектура сайта</b>  – это своеобразный «каркас», на котором строится интернет-ресурс. 
              Он определяет, как различные элементы сайта взаимодействуют друг с другом, обеспечивая его функциональность, 
              удобство и привлекательность. </p>
              <p className="p-2">
              Понимание архитектуры сайта помогает создать сбалансированную и гармоничную структуру, 
              которая будет легко восприниматься пользователями и эффективно выполнять свои задачи.
            </p>
                   
          </div>

          <div className="col-md-6">
                       
            <p className="p-2">
              Клиенты видят только результат – красивый интерфейс и удобные функции, 
              но за всем этим стоит сложная работа, которая позволяет обеспечить плавный 
              и эффективный опыт использования. 
              </p>
              <p className="p-2">
              Правильная архитектура сайта и гармоничное
               взаимодействие фронтэнда с бэкэндом – это залог успеха вашего проекта в интернете, 
               а значит, важный шаг к достижению поставленных целей.
            </p>
          </div>
        </div>
        </div>
        </section>

<section className="front-backend">
<h2 className="text-center mb-0">Frontend</h2>
        <p className="text-center ">сторона клиента</p>

        <div className="row ">

          <div className="col-md-4 text-center">
            <div className="">
              <img src={robot4} alt="" />
            </div>
          </div>

          <div className="col-md-8">
            <div className="">
              <div className="p-3">
                <p className="p-2">
                  это все, что видит и с чем <b>взаимодействует пользователь</b>{" "}
                  на сайте. Он включает в себя интерфейс, графику, анимации,
                  элементы управления (кнопки, формы, меню) и т.д. Все эти
                  элементы создаются с использованием таких технологий, как:
                </p>
                <p className="p-2 ">
                  {" "}
                  <b>HTML</b> (язык браузеров, Devtools нажмите F12)
                </p>

                <p className="p-2">
                  {" "}
                  <b>CSS</b> (стилизация и оформление сайта )
                  </p>
                <p className="p-2">
                  {" "}
                  <b>JavaScript</b> ( язык программирования){" "}
                  <b>
                    Позволяет пользователям взаимодействовать с элементами на
                    странице, например, нажимать кнопки, заполнять формы...
                  </b>
                </p>
                <p className="p-2 ">
                  Frontend-разработчик работает над тем, чтобы сайт был
                  визуально привлекательным, функциональным и удобным для
                  пользователей.
                </p>
              </div>
            </div>
          </div>
        </div>
        

        <h2 className="text-center mb-0">Backend</h2>
        <p className="text-center ">сторона сервера - то что мы не видим</p>

        <div className="row ">
          <div className="col-md-4 text-center">
            <div className="">
              <div className="p-3">
                <img src={robot3} alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="">
              <div className="p-3">
                <p className="p-2">
                  часть сайта которая отвечает за обработку данных,
                  взаимодействие с базой данных. Например, когда пользователь
                  отправляет форму или делает запрос, сервер обрабатывает данные
                  и возвращает ответ. Часто работает связка данных [ API + JSON ].
                </p>
                <p className="p-2">
                  Языки программирования: Javascript и библиотеки...
                </p>

                <p className="p-2">
                  {" "}
                  <b>Сервер:</b> Фреймворк Node.js + Express библиотека
                </p>

                <p className="p-2 ">
                  <b>Linux Ubuntu - операциная система сервера</b>, наиболее популярная платформа.
                </p>
                <p className="p-2">
                  Базы данных: MySQL, PostgreSQL, <b>в нашем проекте мы используем MongoDB</b>.
                </p>
                <p className="p-2 ">
                  Backend-разработчик занимается созданием API, взаимодействием
                  с базами данных, а также логикой, которая управляет{" "}
                  <b>данными и запросами.</b>
                </p>
              </div>
            </div>
          </div>
        </div>
</section>
       
     
      </>
   
  );
}

export default Architect;
