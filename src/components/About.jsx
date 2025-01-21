import React from "react";
import robot2 from "../assets/images/robot2.png";

function Intro() {
  return (
    <div>
      <section id="About" className="about ">
        <div className="container container__about">
          <div className="row d-flex align-items-center justify-content-between ">
            <div className="col-md-8">
              <span className="p-1">
                <h3 className="mb-2">О проекте</h3>
                <p className="mb-2">
                  Данный проект направлен на разработку полнофункционального
                  веб-приложения, состоящего из фронтэнд и бэкэнд частей.{" "}
                </p>
                <p className="mb-2">
                  Выбранная платформа <span className="bluebold">REACT</span> обеспечит максимальную
                  производительность, безопасность и масштабируемость, что
                  позволит успешно справляться с растущими потребностями
                  пользователя.
                </p>
                <p className="mb-2">
                  Фронтэнд создан с использованием современных технологий,
                  таких как  HTML, CSS и JavaScript, обеспечивая удобный и
                  интуитивно понятный интерфейс для пользователей.
                </p>

                <p>
                  В бэкэнд части реализована логика работы приложения,
                  управление данными и взаимодействие с базой данных, 
                  реализована <span className="bluebold">JWT регистрации/авторизация</span> что обеспечиваться с помощью языков программирования, таких как
                  Javascript и дополнитлеьных библиотекой таких как Node.js на
                  платформе React и c кучей динтеренсых библиотек.
                </p>

                <hr></hr>
                <p className="mb-4">
                  Далее для того чтобы получить доступ к материалам, Вам
                  необходимо пройти авторизацию.
                </p>
                <p className="mb-4">
                  Простой пример <span className="bluebold">"JWT авторизации"</span> покажет вам возможности
                  работы связок между <b>frontend и backend</b> частями.
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
