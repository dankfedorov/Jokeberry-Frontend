import React from 'react';
import avatar from "../assets/images/superuser.jpg";

function IntroInfo() {
  return (
    <div>
       <section id="introinfo" className="introinfo">
      <div className=" container__introinfo">
        <h2 className="text-center mb-0">Добро пожаловать !</h2>
        <p className="text-center mb-4">вступление</p>

        <div className="row ">
          <div className="col-md-7">
          <p className="p-2"><b>Привет, спасибо что зашли на мой проект создание сайта на React!</b></p>
          <p className="p-2">В этом проекте я стремился продемонстрировать мощные возможности библиотеки для создания интерактивных и отзывчивых пользовательских интерфейсов. </p>
          <p className="p-2">Мы реализовали JWT авторизацию для безопасного доступа пользователей к приложению, а также наладили взаимодействие с базой данных и серверной частью, построенной на Node.js. </p>
          <p className="p-2">Используя компоненты и эффективное управление состоянием, я создал динамичное приложение, которое обеспечивает отличное пользовательское взаимодействие и быструю загрузку.</p>
            <p className="p-2">Я надеюсь, что этот проект вдохновит вас на использование React в ваших собственных разработках. </p>
          </div>

          <div className="col-md-5">
            <p className="p-2"><b></b></p>
            <img src={avatar} alt="автор блога Даниил" aria-label="Jokeberry блог" className="rounded-circle"/> 
            <p className="p-2">Автор блога Даниил</p>
            
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default IntroInfo
