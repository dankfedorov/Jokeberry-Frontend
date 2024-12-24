import React from "react";
import architect_img from "../assets/images/architect_img.jpg";

function Architect() {
  return (
    <section id="architect" className="architect">
      <div className=" container__intro">
        <h2 className="text-center mb-4"></h2>

        <div className="row d-flex align-items-center justify-content-between">
          <img src={architect_img} alt="" />

          <div className="col-md-6">
            <div className="p-3">
              <span className="p-2">
                <h2 className="mb-4">FRONTEND</h2>
                <div className="p-3 ">
                  {/* <h2 className="text-center">Ключевые моменты:</h2> */}
                  <p className="p-2">
                    это все, что видит и с чем{" "}
                    <b>взаимодействует пользователь</b> на сайте. Он включает в
                    себя интерфейс, графику, анимации, элементы управления
                    (кнопки, формы, меню) и т.д. Все эти элементы создаются с
                    использованием таких технологий, как:
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
                    <b>JavaScript</b> (динамическое поведение){" "}
                    <b> ... ну а тут МАГИЯ</b>
                  </p>
                  <p className="p-2 ">
                    Frontend-разработчик работает над тем, чтобы сайт был
                    визуально привлекательным, функциональным и удобным для
                    пользователей.
                  </p>
                </div>
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3">
              <span className="p-2">
                <h2 className="mb-4">BACKEND</h2>
                <div className="p-3">
                  {/* <h2 className="text-center">Ключевые моменты:</h2> */}
                  <p className="p-2">
                    часть сайта которая отвечает за обработку данных,
                    взаимодействие с базой данных. Например, когда пользователь
                    отправляет форму или делает запрос, сервер обрабатывает
                    данные и возвращает ответ.
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
                    Backend-разработчик занимается созданием API,
                    взаимодействием с базами данных, а также логикой, которая
                    управляет <b>данными и запросами.</b>
                  </p>
                </div>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Architect;
