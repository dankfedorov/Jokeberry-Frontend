import React, { useState, useEffect } from 'react';
import '../assets/styles/weatherapi.css'

const DataDisplay = () => {
  // Состояние для хранения данных и состояния загрузки
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect для выполнения запроса после рендера компонента
  useEffect(() => {
    fetch('http://api.weatherapi.com/v1/current.json?key=f9879f320969482882754659242311&q=Moscow&aqi=no')  // Пример URL, замените на ваш сервер
      .then(response => response.json())  // Преобразуем ответ в формат JSON
      .then(data => {
        setData(data);  // Сохраняем данные в состояние
        setLoading(false);  // Завершаем загрузку
      })
      .catch(error => {
        setError(error);  // Если произошла ошибка
        setLoading(false);  // Завершаем загрузку
      });
  }, []); // Пустой массив означает, что запрос будет выполнен один раз при монтировании компонента
  const object = data;
  // Преобразуем объект в массив
  const array = [object];
  console.log("Data recived")

  // Условный рендеринг в зависимости от состояния загрузки или ошибки
  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div> <code>Ops !</code> нам не дали данные на погоду... {error.message}</div>;
  }

  return (
    <div >
      {/* <p className='small'>https://jsonplaceholder.typicode.com/posts</p> */}
      {/* <p className="small"><pre>{JSON.stringify(data, null, 2)}</pre></p> */}
      <h4 className='p-1' aria-label='API Weather'>API Weather</h4>
      {array.map(item => (
          <span className='weather' key={item.id}>
            <p className='p-0'>Город: {item.location.name}<br></br>
              {item.current.last_updated}<br></br>
              Температура: <b>{item.current.temp_c}</b> С<br></br>
              Ветер: {item.current.wind_kph} м/c<br></br>
              Давление: {item.current.pressure_mb}</p> <br></br>
          </span>
        ))}
     
    </div>
  );
};

export default DataDisplay;
