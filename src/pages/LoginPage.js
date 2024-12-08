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
        "http://188.130.154.26:5000/api/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // передаем данные формы
        }
      );
      console.console.log("Отправили");
      if (!response.ok) {
        throw new Error("Ошибка отправки данных");
      }
      const result = await response.json();
      console.log("Успех:", result);
      setIsSuccess(true); // Успех регистрации
      setTimeout(() => {
        window.location.reload(); // Перезагрузка страницы
      }, 100);
      alert("Регистрация прошла успешно.Спасибо.");
    } catch (error) {
      alert("Произошла ошибка при регистрации. Попробуйте еще раз.");
    }
  };

  return (
    <div className="container container__login d-flex justify-content-center align-items-center vh-100">
      <div className="row ">
        <div className="col-md-4 mb-1 text-center"></div>

        <div className="col-md-4 text-center card-block">
          <div className="p-0">
            <h6>Добро пожаловать!</h6>
            
            <form onSubmit={handleSubmit}>
              <p className="mb-0">Нет аккаунта? </p>
              <p className="small mb-2">
                {" "}
                Вы можете
                <a href="/register">
                  <b> пройти регистрацию.</b>
                </a>
              </p>

              <div className="form-floating">
                <input
                  type="text"
                  name="username"
                  className="form-control mb-2 text-muted"
                  placeholder="Ваш логин"
                  value={formData.username}
                  onChange={handleChange}
                />
                <label>Username</label>
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
                <label>Password</label>
              </div>

              <button className="w-100 btn mb-2" type="submit">
                Войти
              </button>
              <p className="text-center mb-4 ">
                {" "}
                Вернуться назад /<a href="/"> back to home </a>
              </p>
            </form>

            <p className="mt-0 mb-0 small">JOKEBERRY &copy; 2025</p>
            <a className="btn mb-2" href="/admin">
            === ДЕМО ВХОД ===
          </a>
          
          </div>
        </div>

        <div className="col-md-4"></div>

      </div>
    </div>
  );
};

export default MyForm;
