import React from "react";
import robot6 from "../assets/images/robot6.png";
import robot3 from "../assets/images/robot3.png";

function Architect() {
  return (
    <section id="architect" className="front-back pt-5">
      <div className=" container__intro">
        
        <h2 className="text-center mb-0">Архитектура проекта</h2>
        <p className="text-center ">Frontend и Backend</p>
        <div className="row ">
        
        <div className="col-md-6">
            <div className="">
              <div className="p-3">
              <img src={robot6} alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="">
              <div className="p-3">
                <h3>Frontend</h3>
                <p className="p-2">
                  это все, что видит и с чем <b>взаимодействует пользователь</b>{" "}
                  на сайте. Он включает в себя интерфейс, графику, анимации,
                  элементы управления (кнопки, формы, меню) и т.д. Все эти
                  элементы создаются с использованием таких технологий, как:
                </p>
                <p className="p-2 ">
                  {" "}
                  <b>HTML</b> (структура страницы)
                </p>

                <p className="p-2">
                  {" "}
                  <b>CSS</b> (стилизация и оформление) + добавим немного{" "}
                  <b>Bootstrap</b>
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
        <div className="row ">
          <div className="col-md-6">
            <div className="">
              <div className="p-3">
              <img src={robot3} alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="">
              <div className="p-3">
                <h3>Backend</h3>
                <p className="p-2">
                  часть сайта которая отвечает за обработку данных,
                  взаимодействие с базой данных. Например, когда пользователь
                  отправляет форму или делает запрос, сервер обрабатывает данные
                  и возвращает ответ.
                </p>
                <p className="p-2">
                  Языки программирования: Javascript и библиотеки...
                </p>

                <p className="p-2">
                  {" "}
                  <b>Серверы:</b> Тут "надо почитать"... Ubuntu.
                </p>

                <p className="p-2 ">
                  <b>Linux Ubuntu:</b> наиболее популярная платформа.
                  Linux-дистрибутивов. Используется как для настольных
                  компьютеров, так и для серверов.
                </p>
                <p className="p-2">
                  Базы данных: MySQL, PostgreSQL, <b>берем MongoDB</b> и
                  поехали...
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
      </div>
    </section>
  );
}

export default Architect;
