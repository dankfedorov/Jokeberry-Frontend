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
    // window.location = "/login";
    e.preventDefault(); // предотвращаем перезагрузку страницы
    try {
      const response = await fetch("https://dankfedorov-server-9b2d.twc1.net/api/registration", {
      // const response = await fetch("http://localhost:5000/api/registration", {
        // const response = await fetch("https://188.130.154.26:5000/api/registration",{ // надо https
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // передаем данные формы
      });
      console.log("Отправили даные...");
      if (!response.ok) {
        alert("Упс... ошибка. Возможно логин " + `${formData.username} уже есть в системе.\n` + "Перейдите на страницу входа или создайте новый.");
        throw new Error("Ошибка отправки данных, возможно такой логин уже есть.");
        }
      const result = await response.json();

      console.log("Успех:", [result], formData.username);
      
      setIsSuccess(true); // Успех регистрации
      alert("Здравствуйте: " + `${formData.username}\n `  + "Регистрация прошла успешно. Спасибо.\n Вы будете перенаправлены на страницу входа.");
      
      window.location = "/login";
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container__login d-flex p-2">
      <div className="text-center">
        
        <div className="card-block">
          
          <div className="p-3">
            <h4 className="container__login__h4">Регистрация</h4>
            <p className="login__descr mb-1">Пройдите регистрацию, чтобы продолжить.
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
                <label className="form__label">ВАШЕ ИМЯ</label>
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

              <button id="submitBtn" className="btn-reset w-100 btn mb-2" type="submit">
                Регистрация
              </button>
             
            </form>
           
            {/* <a className="btn card-block__btn-link" href="/admin">ДЕМО ВХОД </a> */}
          </div>
        </div>

        <a href="/login" className="mb-1 small" type="submit">
        <i class="bi bi-info-circle"></i>
          <span className=""> Есть аккааунт? Вход в систему</span>
        </a>
        <p className="very-small">2025 JOKEBERRY.RU </p>
      
      </div>
    </div>
  );
};

export default MyForm;
