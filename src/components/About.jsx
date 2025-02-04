import React from "react";
import robot2 from "../assets/images/robot2.png";

function Intro() {
  return (
    <div>
      <section id="About" className="about ">
        <div className="container container__about">
          <h2 className="text-center mb-0">О проекте</h2>
          <p className="text-center mb-4">Frontend и Backend</p>

          <div className="row d-flex align-items-center justify-content-between ">
            <div className="col-md-8">
              <span className="p-1">
                <p className="mb-3">
                  Данный проект направлен на разработку полнофункционального
                  веб-приложения, состоящего из фронтенд- и бэкенд-частей.
                </p>
                <p className="mb-3">
                  Выбранная платформа React обеспечит максимальную
                  производительность, безопасность и масштабируемость, что
                  позволит успешно справляться с растущими потребностями
                  пользователей.
                </p>
                <p className="mb-3">
                  Фронтенд создан с использованием современных технологий, таких
                  как HTML, CSS и JavaScript, обеспечивая удобный и интуитивно
                  понятный интерфейс для пользователей.
                </p>

                <p>
                  В бэкенд-части реализована логика работы приложения,
                  управление данными и взаимодействие с базой данных.
                  Реализована JWT-регистрация/авторизация, что обеспечивается с
                  помощью языков программирования, таких как JavaScript, и
                  дополнительных библиотек, таких как Node.js на платформе
                  React, а также множества различных библиотек.
                </p>

                <hr></hr>
                <p className="mb-4">
                  Далее, для того чтобы получить доступ к материалам, вам
                  необходимо пройти авторизацию.
                </p>
                <p className="mb-4">
                  Простой пример{" "}
                  <b><a href="/login" class="footer-link">
                    JWT-авторизации{" "}
                  </a></b> покажет вам возможности взаимодействия между фронтенд- и
                  бэкенд-частями.
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
