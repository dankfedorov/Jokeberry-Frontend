import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FromApi() {
    const [items, setItems] = useState([]);

  // Получение данных с сервера
  useEffect(() => {
    axios.get('http://188.130.154.26:5000/api/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="small">
      <span>Получаем данные:</span>
        {items.map((item) => (
          <p key={item._id}>Имя:{item.username} status:{item.roles}</p>
        ))}
    </div>
  );

}

export default FromApi;
