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
          <p className="p-2"><b>Привет! Спасибо, что заглянули на мой проект по созданию сайта на React. </b></p>
          <p className="p-2"><b>Я рад поделиться с вами своими наработками и демонстрировать, как можно строить интерактивные пользовательские интерфейсы с помощью этой библиотеки.</b></p>
          <p className="p-2">В этом проекте я стремился продемонстрировать мощные возможности библиотеки для создания интерактивных и отзывчивых пользовательских интерфейсов. </p>
          <p className="p-2">Реализована <b>JWT авторизация</b> для безопасного доступа пользователей к приложению, а также наладили взаимодействие с базой данных и серверной частью, построенной на Node.js + Express библиотека. </p>
           <p className="p-2">Я надеюсь, что этот проект вдохновит вас на использование React в ваших собственных разработках. </p>
          </div>

          <div className="col-md-5 text-center">
            <p className="p-2"><b></b></p>
            <img src={avatar} alt="автор блога Даниил" aria-label="Jokeberry блог" className="rounded-circle"/> 
            <p className="p-2">Автор проекта <br></br>Даниил Федоров</p>
            
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default IntroInfo
