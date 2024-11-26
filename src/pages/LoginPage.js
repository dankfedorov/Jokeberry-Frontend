import React, { useState } from "react";
import "../assets/styles/sendform.css";


const MyForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // предотвращаем перезагрузку страницы

    try {
      const response = await fetch("http://localhost:5000/auth/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // передаем данные формы
      });
    
      if (!response.ok) {
        throw new Error("Ошибка отправки данных");
      }
     
      const result = await response.json();
      console.log("Успех:", result);
    
  } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return (

    <div className="container d-flex justify-content-center align-items-center vh-100">
      
      <div className="card p-4" >
      <h6 >Добро пожаловать!</h6>
      <p className="mt-1 mb-3 text-muted">JOKEBERRY &copy; 2025</p>
        <form onSubmit={handleSubmit}>
          <p className="text-center mb-4"> Нет аккаунта? Вы можете 
          <a href="/register"> создать его.</a>
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
            <label >Username</label>
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

          <button className="w-100 btn btn-lg btn-primary mb-2" type="submit">
            Войти
          </button>
          <p className="text-center mb-4 small"> Вернуться назад /   
          <a href="/">  back to home </a> 
          </p>
          <p className="small"> Сейсая я все проверю... а есть ли вы в базе? 
            пойду на сервер и потом посмотрю вас в базе данных <code>MongoDB</code></p>
          
                  
        </form>
      </div>



    </div>
  );
};

export default MyForm;
