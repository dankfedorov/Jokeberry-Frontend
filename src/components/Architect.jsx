import React from "react";
import architect_img from "../assets/images/architect_img.jpg";
import robot3 from "../assets/images/robot3.png";
import robot4 from "../assets/images/robot4.png";

function Architect() {
  return (
    <section id="architect" className="front-back pt-5">
      <div className=" container__intro">
        <h2 className="text-center mb-0">Архитектура проекта</h2>
        <p className="text-center ">Frontend и Backend</p>

        <div className="row text-center">
          <div className="col-md-12">
            <img src={architect_img} alt="" />
          </div>
        </div>

        <div className="row ">
          <div className="col-md-6">
            <p className="p-2">
              Я выбрал инструмент <b>React</b> для нашего сайта по нескольким
              причинам. Во-первых, React предоставляет мощный компонентный
              подход, который позволяет разбивать интерфейс на независимые и
              переиспользуемые части.
            </p>
            <p className="p-2">
              Это делает разработку более структурированной и удобной, а также
              значительно упрощает поддержку и масштабирование проекта.
              Во-вторых, высокое сообщество разработчиков и множество доступных
              библиотек открывают широкие возможности для интеграции новых
              функций и технологий, что позволяет нам быстро осваивать
              актуальные инструменты.
            </p>
          </div>

          <div className="col-md-6">
            <p className="p-2">
              Создание архитектуры сайта на React требует тщательного
              планирования и учета различных аспектов, таких как структура
              проекта, управление состоянием, маршрутизация и взаимодействие с
              API.
            </p>
            <p className="p-2">
              Первым шагом является определение структуры папок и файлов.
              Рекомендуется разделять компоненты, стили, графику и другие
              ресурсы по папкам. Основные компоненты могут быть размещены в
              отдельной папке `components`, а страницы – в папке `pages`. Это
              помогает поддерживать порядок и упрощает навигацию по проекту.
            </p>
          </div>
        </div>

        <h2 className="text-center mb-0">Frontend</h2>
        <p className="text-center ">сторона клиента</p>

        <div className="row ">
          <div className="col-md-6">
            <div className="">
              <img src={robot4} alt="" />
            </div>
          </div>

          <div className="col-md-6">
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

        <h2 className="text-center mb-0">Backend</h2>
        <p className="text-center ">сторона сервера</p>

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
