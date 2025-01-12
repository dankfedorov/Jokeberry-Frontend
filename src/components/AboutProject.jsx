import React from 'react'
import shema from "../assets/images/Shema.png"

function AboutProject() {
  return (
    <div>
       <section id="intro" className="intro ">
          <div className="container container__intro">
            <h2 className="text-center mb-4"></h2>
            <div className="row d-flex align-items-center justify-content-between">
              

              <div className="col-md-6">
                <div className="p-3">
                  <p className="text-center">
                    <img src={shema} alt="" />
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-3">
                  <span className="p-2">
                    <h2 className="mb-4">Приветсвуем вас на нашем сайте!</h2>
                    <p className="mb-4">
                      Этот сайт создан, чтобы стать вашим надежным помощником в
                      работе по созданию <b>собственных проектов.</b>
                    </p>

                    <p className="mb-4">
                      Я постарался сделать сайт в формате презентации, где шаг за шагом
                      подробно разбирается структура создания простого веб-сайта, пойдем путем
                      от простого к сложному.
                    </p>

                    <p className="mb-4">
                      Тщательно проработал каждый этап, чтобы сделать
                      процесс понятным и доступным даже для начинающих.
                    </p>
                    <p className="mb-4">
                      Спасибо, что обратили внимание на мой проект — вместе мы добьемся большего!
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container features__container">
            <p className="small text-muted">( кратко о важном )</p>
            <h2 className="text-center mb-4">Ключевые этапы и технологии</h2>
            <p className="small">Необходимо разделить все работы на этапы</p>
            <div className="row">
              {/* <!-- Feature 1 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm green">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-1-square"></i> Анализ целевой
                      аудитории
                    </h5>
                    <p className="card-text mb-2">
                      Необходимо определить кто является основной целевой
                      аудиторией сайта.
                    </p>
                    <br></br>
                    <p className="card-text mb-2">
                      Понять что должно быть на сайте (каталог товаров,
                      разделы, блоки, контактные формы).
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Feature 2 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm green">
                  <div className="card-body">
                    <h5 className="card-title">
                      {" "}
                      <i className="bi bi-2-square"></i> Архитектура проекта
                    </h5>
                    <p className="card-text mb-2">
                      Разработайте структуру контента, навигация, учитывая
                      важность разделов и их взаимосвязь.
                    </p>
                    <br></br>
                    <p className="card-text mb-2">
                      Определите подходящие технологии (например, чистый html или уже готовое пакетное решение 
                      такое как Tilda, Bitrix или фреймворки).
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Feature 3 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm green">
                  <div className="card-body">
                    <h5 className="card-title">
                      {" "}
                      <i className="bi bi-3-square"></i> Проектирование <br />
                      (UX /UI дизайн)
                    </h5>
                    <p className="card-text mb-2">
                      UX-дизайн (User Experience) позволяет нам сделать сайт
                      удобным и интуитивно понятным для пользователей.
                    </p>
                    <br></br>
                    <p className="card-text mb-2">
                      UI-дизайн (User Interface) - визуальная часть сайта.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Feature 5 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm green">
                  <div className="card-body">
                    <h5 className="card-title">
                      {" "}
                      <i className="bi bi-4-square"></i> Разработка сайта
                    </h5>
                    <p className="card-text mb-2">
                      Кодинг - верстка: HTML, CSS, JavaScript.
                    </p>
                    <br></br>
                    <p className="card-text mb-2">
                      Выбрать фреймворки и библиотеки: React, Angular, Vue.js, Bootstrap
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
                <div className="card shadow-sm green">
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
                      Работа с адаптивностью сайта на разных устройствах.
                      Тестирование: Проверка работоспособности (кроссбраузерное
                        тестирование).
                    </p>
                    
                  </div>
                </div>
              </div>
              {/* <!-- Feature 3 --> */}
              <div className="col-md-4">
                <div className="card shadow-sm green">
                  <div className="card-body">
                    <h5 className="card-title">
                      {" "}
                      <i className="bi bi-6-square"></i> Зарузка и запуск сайта
                    </h5>
                    <p className="card-text mb-2">
                      Выбор подходящего хостинга и регистрация
                      доменного имени.
                    </p>
                    <p className="card-text mb-2">
                      <b>Загрузка файлов на сервер и тестирование.</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

export default AboutProject
