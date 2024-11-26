import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FromApi() {
    const [items, setItems] = useState([]);

  // Получение данных с сервера
  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="">
        {items.map((item) => (
          <p key={item._id}>Имя:{item.username} status:{item.roles}</p>
        ))}
    </div>
  );

}

export default FromApi;
