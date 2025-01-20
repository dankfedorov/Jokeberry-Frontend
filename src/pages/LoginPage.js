import React, { useState } from "react";
import "../assets/styles/sendform.css";

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // предотвращаем перезагрузку страницы

    try {
      const response = await fetch(
        "https://dankfedorov-server-9b2d.twc1.net/api/login",
        {
          // const response = await fetch("http://localhost:5000/api/login", {
          // const response = await fetch('https://188.130.154.26:5000/api/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // передаем данные формы
        }
      );

      console.log("Отправили");
      if (!response.ok) {
        throw new Error("Ошибка отправки данных");
      }
      const result = await response.json();
      console.log("Успех:", result);

      const token = { result };
      localStorage.setItem("authToken", JSON.stringify(token));

      const username = JSON.parse(localStorage.getItem("token"));
      localStorage.setItem("id", JSON.stringify(result.id));
      localStorage.setItem("username", JSON.stringify(result.username));

      setIsSuccess(true); // Успех регистрации -- тут не понятно нужен ли этот вариант
      // console.log(setIsSuccess);
      setTimeout(() => {
        window.location.reload(); // Перезагрузка страницы
        // alert("Авторизация прошла успешно! Спасибо.");
        // window.location = "/dashboard";
        window.location = "/dashboard";
      }, 100);
    } catch (error) {
      window.location.reload(); // Перезагрузка страницы
      alert(
        "Авторизоваться не удалось. Некорректный идентификатор доступа.\n Пожалуйста, проверьте ваши данный <<< Имя или пароль >>>"
      );
    }
  };

  return (
    <div className="container__login d-flex ">
      
        <div className="text-center card-block">

          <div className="">
            <div className="p-3">
              <h4>ВХОД В АККАУНТ</h4>
              <p className="login__descr mb-1">
                Введите свои учётные данные<br></br> для доступа к аккаунту.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-floating">
                  <input
                    type="text"
                    name="username"
                    className="form-control mb-2 text-muted"
                    placeholder="Ваш логин"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <label className="form__label">Имя или email</label>
                </div>

                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control mb-2"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  <label className="form__label">Password</label>
                </div>

                <button className="w-100 btn mb-1" type="submit">
                  Войти
                </button>
              </form>
              
              {/* <a className="btn card-block__btn-link" href="/admin">ДЕМО ВХОД</a> */}
            </div>
          </div>

        </div>
      </div>

  );
};

export default MyForm;
