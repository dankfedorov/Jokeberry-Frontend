import React from "react";
import robot2 from "../assets/images/robot2.png";

function Intro() {
  return (
    <div>
      <section id="intro" className="intro">
        <div className="container container__intro">
          <h2 className="text-center mb-4"></h2>
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-md-8">
              <div className="p-3">
                <span className="p-2">
                  <h2 className="mb-4">Привет дорогой друг !</h2>
                  <p className="mb-4">
                    Я сделал этот сайт, для того чтобы показать возможноcти
                    использования современных инстрментов при работе по созданию{" "}
                    <b>собственных проектов.</b>
                  </p>

                  <p className="mb-4">
                    Сайт создан в формате презентации, где шаг за шагом подробно
                    разбирается структура создания простого веб-сайта, пойдем
                    путем от простого к сложному.
                  </p>

                  <p className="mb-4">
                    Спасибо, что обратили внимание на мой проект — вместе мы
                    добьемся большего!
                  </p>
                  <p className="mb-4">
                    Далее для того чтобы получить доступ к материалам, Вам
                    необходимо пройти авторизацию. Простой пример "JWT
                    авторизации" покажет вам возможности работы связок между{" "}
                    <b>frontend и backend</b> частями.
                  </p>
                  <p className="text-center">
                    <a
                      href="/register"
                      className="nav-link nav-profile d-flex align-items-center "
                    >
                      <span className="d-none d-md-block ps-2 reg-link hero__btn">
                        {" "}
                        Перейти к материалам
                      </span>
                    </a>
                  </p>
                </span>
              </div>
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
