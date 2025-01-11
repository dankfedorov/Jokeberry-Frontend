import React, { useState, useEffect } from "react";
import "../assets/styles/ratesapi.css";

const RatesDisplay = () => {
  // Состояние для хранения данных и состояния загрузки
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect для выполнения запроса после рендера компонента
  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js") // Пример URL, замените на ваш сервер
      .then((response) => response.json()) // Преобразуем ответ в формат JSON
      .then((data) => {
        setData(data); // Сохраняем данные в состояние
        setLoading(false); // Завершаем загрузку
      })
      .catch((error) => {
        setError(error); // Если произошла ошибка
        setLoading(false); // Завершаем загрузку
      });
  }, []); // Пустой массив означает, что запрос будет выполнен один раз при монтировании компонента
  const object = data;
  // Преобразуем объект в массив
  const array = [object];
  console.log("Data recived");

  // Условный рендеринг в зависимости от состояния загрузки или ошибки
  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return (
      <div>
        {" "}
        <code>Ops !</code> OPS !... {error.message}
      </div>
    );
  }

  return (
    <div className="container_rates">
      <div className="row pt text-center">
      <p className="text-center mb-1 small">Курсы валют / данные получены по API ЦБ РФ</p>
        <div className="col-md-3 ">
          {array.map((item) => (
            <div className="rates" key={item.id}>
              <p className="">USD: {item.Valute.USD.Value} </p>
             </div>
          ))}
        </div>
        <div className="col-md-3 ">
          {array.map((item) => (
            <div className="rates" key={item.id}>
               <p className="">EUR: {item.Valute.EUR.Value} </p>
              </div>
          ))}
        </div>
        <div className="col-md-3 ">
          {array.map((item) => (
            <div className="rates" key={item.id}>
               <p className="">CNY: {item.Valute.CNY.Value} </p>
             </div>
          ))}
        </div>
        <div className="col-md-3 ">
          {array.map((item) => (
            <div className="rates" key={item.id}>
              <p className="">GBR: {item.Valute.GBP.Value} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatesDisplay;
