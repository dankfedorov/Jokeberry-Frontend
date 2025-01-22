import React, { useState } from "react";
// import "../assets/styles/sendform.css";
import "../assets/styles/loginpartner.css";

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    encryption: "",
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
        window.location = "/partner";
      }, 100);
    } catch (error) {
      window.location.reload(); // Перезагрузка страницы
      alert(
        "Авторизоваться не удалось. Некорректный идентификатор доступа.\n Пожалуйста, проверьте ваши данный <<< Имя или пароль >>>"
      );
    }
  };

  return (
    <div className="container__login d-flex p-2">
      <div className="text-center ">
        
        <div className="card-block">
          
          <div className="p-3">
            <h4 className="container__login__h4">PERSONAL ONLY</h4>
            <h4 className="container__login__h4">ВХОД ДЛЯ СВОИХ</h4>
            <p className="login__descr mb-1">Извините, система с ограниченным доступом и каскадным шифрованием.
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
                <label className="form__label">Your Name</label>
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

              <div className="form-floating">
                <input
                  type="password"
                  className="form-control mb-2"
                  name="encryption"
                  value={formData.encryption}
                  onChange={handleChange}
                  placeholder="encryption"
                />
                <label className="form__label">Multiple encryption</label>
              </div>

              <button id="submitBtn" className="w-100 btn mb-2" type="submit">
              SECURE ENTER            
              </button>
             
            </form>
           
            {/* <a className="btn card-block__btn-link" href="/admin">ДЕМО ВХОД </a> */}
          </div>
        </div>

        <a href="/" className="mb-1 small" type="submit">
          <span className="">ВЕРНУТЬСЯ НАЗАД </span>
        </a>
        <p className="very-small">2025 JOKEBERRY.RU </p>
      </div>
    </div>
  );
};

export default MyForm;
