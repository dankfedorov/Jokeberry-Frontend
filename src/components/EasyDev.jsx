import React from "react";
import monitor__img from "../assets/images/Monitor.png";
import node from "../assets/images/Node.png";

function EasyDev() {
  return (
    <div>
      <section id="easydev" className="easydev">
        <div className="container container__easydev">
          <div className="row d-flex">
            <div className="col-md-6">
              <img src={monitor__img} alt="qr link" />
            </div>

            <div className="col-md-6">
              <h3>FRONEND</h3>
              <p className="very-small">сторона клиента</p>
              <span>
                Необходимо определить кто является основной целевой аудиторией
                сайта. Определить что должно быть на сайте (каталог товаров,
                разделы, блоки, контактные формы).
              </span>
              <ul className="easydev__group">
                <li className="nav-link">
                  <i class="bi bi-check-circle"></i>
                  Анализ целевой аудитории.
                </li>
                <li className="nav-link">
                  <i class="bi bi-check-circle"></i>
                  Архитектура проекта.
                </li>
                <li className="nav-link">
                  <i class="bi bi-check-circle"></i>
                  Макетирование/дизайн.
                </li>
                <li className="nav-link">
                  <i class="bi bi-check-circle"></i>
                  Разработка/верстка сайта.
                </li>
                <li className="nav-link">
                  <i class="bi bi-check-circle"></i>
                  Интеграция с React.
                </li>
                <li className="nav-link">
                  <i class="bi bi-check-circle"></i>
                  <span className="">Запуск сайта и тестирование.</span>
                </li>
              </ul>
            </div>
          </div>
<hr></hr>
          <div className="row d-flex">
            <div className="col-md-6">
              <h3>BACKEND</h3>
              <p className="very-small">сторона сервера</p>
              <span>
                отвечает за обработку данных, взаимодействие
                с базой данных. Например, когда пользователь отправляет форму
                или делает запрос, сервер обрабатывает данные и возвращает
                ответ.
              </span>
              <ul className="easydev__group">
                <li className="nav-link">
                  <i class="bi bi-check-circle"></i>
                  Создание сервера Node.js
                </li>
                <li className="nav-link">
                  <i class="bi bi-check-circle"></i>
                  Подключить MongoDB.
                </li>
                <li className="nav-link">
                  <i class="bi bi-check-circle"></i>
                  Настроить библиотеки.
                </li>
                <li className="nav-link">
                  <i class="bi bi-check-circle"></i>
                  Связать Fronend и Backend
                </li>
                <li className="nav-link">
                  <i class="bi bi-check-circle"></i>
                  Deploy приложений.
                </li>
                <li className="nav-link">
                  <i class="bi bi-check-circle"></i>
                  <span className="">Запуск  и тестирование.</span>
                </li>
                <li className="nav-link">
                  <i class="bi bi-check-circle"></i>
                  <span className="">Корректиро́вка ошибок.</span>
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <img src={node} alt="qr link" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EasyDev;
