import React from "react";
import "../assets/styles/landpage.css";
import robot1 from "../assets/images/robot1.png";
import robot2 from "../assets/images/robot2.png";
import robot3 from "../assets/images/robot3.png";
import robot4 from "../assets/images/robot4.png";
import robot5 from "../assets/images/robot5.png";
import robot6 from "../assets/images/robot6.png";
import qr from "../assets/images/qr.png";
import draw from "../assets/images/Drawio.png";
import figma from "../assets/images/Figma.png";
import vs from "../assets/images/VS.png";
import bootst from "../assets/images/Bootstrap.png";
import reactimg from "../assets/images/React.png";
import npmimg from "../assets/images/Npm.png";
import hirobby from "../assets/images/hirobby.png";

import Footer from "../components/Footer";
import WeatherAPI from "../components/WeatherAPI";
import RatesAPI from "../components/RatesAPI";

function LandPage() {
  return (
    <>
      {/* <!-- Hero Section  vh-100 --> */}
      <section id="hero" class="text-white text-center hero ">
        <div class="container hero__container ">
          <div class="row d-flex align-items-center justify-content-between">
            <div class="col-md-5">
              <h1 class="display-4">Создаем сайт, который работает для нас</h1>
              <p class="hero__descr">
                современные решения <br></br> для ваших задач
              </p>
              {/* <a href="/" class="btn btn-light btn-lg hero__btn">
                Получить доступ
              </a> */}
            </div>

            <div class="col-md-3">
              <img src={robot2} alt="" />
            </div>

            <div class="col-md-4">
              <img src={qr} alt="qr link" />
              <h2 className=" container_h2">SCAN ME NOW</h2>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section id="intro" className="intro">
          <div className="container mt-5 container__intro">
            <h2 className="text-center mb-4"></h2>
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-md-3">
                <div className="p-3">
                  <p className="text-center">
                    <img src={hirobby} alt="" />
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-3">
                  <p className="text-center">
                    <img src={robot1} alt="" />
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-3">
                  <span className="p-2">
                    <h2 className="mb-4">Добро пожаловать!</h2>
                    <p className="mb-4">
                      Этот сайт создан, чтобы стать вашим надежным помощником в
                      работе по созданию <b>собственных проектов</b>
                    </p>
                    <p className="mb-4">
                      Здесь вы найдете все необходимое для упрощения рабочих
                      процессов, организации задач и повышения продуктивности.
                    </p>
                    <p className="mb-4">
                      Этот сайт создан в формате презентации, где шаг за шагом
                      подробно разбирается структура создания веб-сайта. Мы
                      тщательно проработали каждый этап, чтобы сделать процесс
                      понятным и доступным даже для начинающих.
                    </p>
                    <p className="mb-4">
                      Спасибо, что доверяете нам — вместе мы добьемся большего!
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Features Section --> */}
        <section id="features" class="features p-1">
          <div class="container features__container">
            <h2 class="text-center mb-4">Ключевые этапы и технологии</h2>
            <p className="small">Разделение работ на этапы</p>
            <div class="row">
              {/* <!-- Feature 1 --> */}
              <div class="col-md-4">
                <div class="card shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title">
                      <i className="bi bi-1-square"></i> Анализ целевой
                      аудитории
                    </h5>
                    <p class="card-text mb-2">
                      Необходимо определить кто является основной целевой
                      аудиторией сайта.
                    </p>
                    <p class="card-text mb-2">
                      Определить что должно быть на сайте (каталог товаров,
                      разделы, блоки, контактные формы).
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Feature 2 --> */}
              <div class="col-md-4">
                <div class="card shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title">
                      {" "}
                      <i className="bi bi-2-square"></i> Архитектура проекта
                    </h5>
                    <p class="card-text mb-2">
                      Разработайте структуру контента, навигация, учитывая
                      важность разделов и их взаимосвязь.
                    </p>
                    <p class="card-text mb-2">
                      Определите подходящие технологии (например, CMS или
                      фреймворки).
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Feature 3 --> */}
              <div class="col-md-4">
                <div class="card shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title">
                      {" "}
                      <i className="bi bi-3-square"></i> Проектирование <br />
                      (UX/UI дизайн)
                    </h5>
                    <p class="card-text mb-2">
                      UX-дизайн (User Experience) позволяет нам сделать сайт
                      удобным и интуитивно понятным для пользователей.
                    </p>
                    <p class="card-text mb-2">
                      UI-дизайн (User Interface) - визуальная часть сайта.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Feature 5 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      {" "}
                      <i className="bi bi-4-square"></i> Разработка сайта
                    </h5>
                    <p className="card-text mb-2">
                      Выбор технологии: HTML, CSS, JavaScript.
                    </p>
                    <p className="card-text mb-2">
                      Фреймворки и библиотеки: React, Angular, Vue.js, Bootstrap
                      для ускорения разработки.
                    </p>
                    <p className="card-text mb-2">
                      Взаимодействие с базами данных (например, MySQL, MongoDB).
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Feature 6 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      {" "}
                      <i className="bi bi-5-square"></i> Оптимизация и
                      тестирование
                    </h5>
                    <p className="card-text mb-2">
                      <b>SEO</b> (Search Engine Optimization): Оптимизация,
                      видимость сайта в запросах.
                    </p>
                    <p className="card-text mb-2">
                      Тестирование: Проверка работоспособности (кроссбраузерное
                      тестирование, тестирование на мобильных устройствах).
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Feature 3 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      {" "}
                      <i className="bi bi-6-square"></i> Запуск сайта
                    </h5>
                    <p className="card-text mb-2">
                      Хостинг и домен: Выбор подходящего хостинга и регистрация
                      доменного имени.
                    </p>
                    <p className="card-text mb-2">
                      <b>Загрузка файлов на сервер:</b> Провекра сайта на
                      загрузку в интернет.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="font-back" className="font-back">
          <div className="container mt-5">
            <h2 className="text-center mb-4">FRONTEND - ВАШ БРАУЗЕР</h2>

            <div className="row ">
              <div className="col-md-6">
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
                  <p className="p-2 small">
                    Незабываем про
                    <b> БЭМ структуру кода.</b> Блок, Элемент, Модификатор — это
                    методология разработки и организации кода, которая помогает
                    создавать структурированный, модульный и переиспользуемый
                    код. Она часто используется в веб-разработке для именования
                    классов CSS и организации файлов.
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
              </div>

              <div className="col-md-6 text-center">
                <div className="p-3">
                  <img src={robot4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="font-back" className="font-back">
          <div className="container mt-5">
            <h2 className="text-center mb-4">BACKEND - СЕРВЕР</h2>

            <div className="row ">
              <div className="col-md-6 text-center">
                <div className="p-3">
                  <img src={robot3} alt="" />
                </div>
              </div>

              <div className="col-md-6">
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
                  <p className="p-2 small">
                    Бывает даже добавляют язык старичков типа <b>Php</b> или
                    какой нибудь другой молодежный язык типа <b>Python</b>
                  </p>
                  <p className="p-2">
                    {" "}
                    <b>Серверы:</b> Тут "надо почитать"...
                    Ubuntu.
                  </p>
                  <p className="p-2 small">
                    <b>Linux:</b> наиболее популярная платформа, благодаря
                    безопасности, стабильности и гибкости. Примеры: Ubuntu
                    Server CentOS / Rocky Linux Debian.
                  </p>
                  <p className="p-2 small">
                    <b>Ubuntu</b> — одна из самых популярных Linux-дистрибутивов, разработанная Canonical. Используется как для настольных компьютеров, так и для серверов.
                  </p>
                  <p className="p-2">
                    Базы данных: MySQL, PostgreSQL, <b>берем MongoDB</b> и поехали...
                  </p>
                  <p className="p-2 ">
                    Backend-разработчик занимается созданием API,
                    взаимодействием с базами данных, а также логикой, которая
                    управляет <b>данными и запросами.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Frontend --> */}
        <section id="about" class="bg-light py-5 about">
          <div className="container about__container">
            <h2 className="text-center mb-4">РАБОТА С FRONTEND</h2>
            <p className="display-10">Технологии и инструменты</p>
            <div className="row text-center">
              {/* <!-- Plan 1 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <img src={draw} alt="qr link" />
                    <h5 className="card-title">www.drawio.com</h5>
                    <p className="display-6">Архитектура</p>
                    <ul className="list-unstyled">
                      <li>Бесплатно</li>
                      <li>проектируем архитектуру сайта</li>
                      <li>WEB online</li>
                    </ul>
                    <a href="https://www.drawio.com">Подробнее </a>
                    {/* <a href="https://www.drawio.com" className="text-muted">
                      Перейти
                    </a> */}
                  </div>
                </div>
              </div>
              {/* <!-- Plan 2 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <img src={figma} alt="qr link" />
                    <h5 className="card-title">www.figma.com</h5>
                    <p className="display-6">Структура сайта</p>
                    <ul className="list-unstyled">
                      <li>Бесплатно</li>
                      <li>создаем структуру и дизайн</li>
                      <li>WEB online</li>
                    </ul>

                    <a href="https://www.figma.com" className="text-muted">
                      Перейти
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Plan 3 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
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
                    <a
                      href="https://visualstudio.microsoft.com/ru/"
                      className="text-muted"
                    >
                      Перейти
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Plan 1 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <img src={bootst} alt="qr link" />
                    <h5 className="card-title">www.getbootstrap.com</h5>
                    <p className="display-6">Bootstrap</p>
                    <ul className="list-unstyled">
                      <li>Бесплатно</li>
                      <li>
                        фреймворк стилей CSS для быстрой пользовательского
                        интерейса
                      </li>
                    </ul>
                    <a href="https://getbootstrap.com" className="text-muted">
                      Перейти
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Plan 2 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <img src={reactimg} alt="qr link" />
                    <h5 className="card-title">www.react.dev</h5>
                    <p className="display-6">REACT </p>
                    <ul className="list-unstyled">
                      <li>Бесплатно</li>
                      <li>WEB библиотека</li>
                      <li>для создания приложений</li>
                    </ul>

                    <a href="https://ru.react.dev/" class="text-muted">
                      Перейти
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Plan 3 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <img src={npmimg} alt="qr link" />
                    <h5 className="card-title">www.npmjs.com</h5>
                    <p className="display-6">NPM модули</p>
                    <ul className="list-unstyled">
                      <li>Бесплатно</li>
                      <li>пакетный менеджер для React, библиотеки,модули </li>
                    </ul>
                    <a href="https://www.npmjs.com/" class="text-muted">
                      Перейти
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Backend --> */}

        <section id="about-back" class="bg-light py-5 about-back">
          <div className="container about__container">
            <h2 className="text-center mb-4">РАБОТА С BACKEND</h2>
            <p className="display-10">Технологии и инструменты</p>
            <div className="row text-center">
              {/* <!-- Plan 1 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Node.js</h5>
                    <p className="display-6">Cерверная часть</p>
                    <ul className="list-unstyled">
                      <li>Бесплатно</li>
                      <li>
                        платформа, использует JavaScript для серверной
                        разработки.
                      </li>
                    </ul>
                    <a href="https://nodejs.org" class="text-muted">
                      Перейти
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Plan 2 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">MongoDB</h5>
                    <p className="display-6">База данных</p>
                    <ul className="list-unstyled">
                      <li>Бесплатно</li>
                      <li>хранения данных BSON, JSON</li>
                      <li>WEB online</li>
                    </ul>

                    <a href="https://www.mongodb.com" className="text-muted">
                      Перейти
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Plan 3 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">www.npmjs.com</h5>
                    <p className="display-6">NPM модули</p>
                    <ul className="list-unstyled">
                      <li>Бесплатно</li>
                      <li>пакетный менеджер для React, библиотеки,модули </li>
                    </ul>
                    <a href="https://www.npmjs.com/" className="text-muted">
                      Перейти
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Plan 1 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Postman agent</h5>
                    <p className="display-6"> Тестирования</p>
                    <ul className="list-unstyled">
                      <li>Бесплатно</li>
                      <li>
                        Работа с HTTP-запросы (GET, POST, PUT, DELETE и других)
                        на сервер.
                      </li>
                    </ul>
                    <a href="https://www.postman.com/" className="text-muted">
                      Перейти
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Plan 2 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Хостинг</h5>
                    <p className="display-6">Размещение</p>
                    <ul className="list-unstyled">
                      <li>Серверная часть</li>
                      <li>Клиентская часть</li>
                      <li>Получение домена</li>
                    </ul>

                    <a href="http://localhost:3000/" className="">
                      Перейти
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Plan 3 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Тестирование</h5>
                    <p className="display-6">Отладка</p>
                    <ul className="list-unstyled">
                      <li>
                        Поиск и устранение ошибок в коде веб-сайта. Работа с{" "}
                        <b>фронтендом</b>(клиентская часть), <b>бэкендом</b>
                        (серверная часть).
                      </li>
                    </ul>
                    <a href="https://www.npmjs.com/" className="text-muted">
                      Перейти
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="font-back" className="font-back">
          <div className="container mt-5">
            <h2 className="text-center mb-4"></h2>

            <div className="row">
              <div className="col-md-3">
                <div className="p-3">
                  <p className="text-center">
                    <img src={robot5} alt="qr link" />
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="p-3">
                  <p className="p-2 text-center">
                    <i class="bi bi-usd"></i> <RatesAPI />
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="p-3">
                  <p className="text-center"></p>
                  <p className="p-2 text-center">
                    <WeatherAPI />{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="p-3">
                  <p className="p-2 text-center">
                    <img src={qr} alt="qr link" />
                    <p className="text-center">Пользоватлей в системе:</p>
                    <i class="bi bi-people-fill"></i> 48
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- Footer Section --> */}

      <Footer />
    </>
  );
}

export default LandPage;
