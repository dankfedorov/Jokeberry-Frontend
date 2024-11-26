import React, { useState, useEffect } from 'react';
import '../assets/styles/weatherapi.css'

const RatesDisplay = () => {
  // Состояние для хранения данных и состояния загрузки
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect для выполнения запроса после рендера компонента
  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')  // Пример URL, замените на ваш сервер
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
    return <div> <code>Ops !</code> OPS !... {error.message}</div>;
  }

  return (
    <div >
      {/* <p className='small'>https://jsonplaceholder.typicode.com/posts</p> */}
      {/* <p className="small"><pre>{JSON.stringify(data, null, 2)}</pre></p> */}
      <h3 className='weather small'>API данные - курсы валют ЦБ РФ</h3>
      <p className='small'>только забрал с <a href='https://www.cbr-xml-daily.ru/daily_json.js'>cbr</a></p>
      {array.map(item => (
          <span className='rates' key={item.id}>
            <p className='p-0'>USd: {item.Valute.USD.Value} </p>
            <p className='p-0'>EUR: {item.Valute.EUR.Value} </p>
            <p className='p-0'>CNY: {item.Valute.CNY.Value} </p>
            <p className='p-0'>GBR: {item.Valute.GBP.Value} </p>
          </span>
        ))}
     
    </div>
  );
};

export default RatesDisplay;
