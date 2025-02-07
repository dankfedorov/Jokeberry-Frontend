import React, { useEffect, useState } from "react";
import axios from "axios";


function FromApi() {
  const [items, setItems] = useState([]);


  // Получение данных с сервера
  useEffect(() => {
    // axios.get("http://localhost:5000/api/items")
    axios.get("https://dankfedorov-server-9b2d.twc1.net/api/sklad")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });     
  }, []);

 

  return (
    <div className="table-responsive small ">
      <p className="m-3">Таблица</p>
      <p className="m-3">Склад</p>
      <table class="table table-striped table-sm very-small">
        <thead>
          <tr>
            <th scope="col" className="col-md-1">номер</th>
            <th scope="col" className="col-md-2">описание</th>
            <th scope="col" className="col-md-1">дата записи</th>
            <th scope="col" className="col-md-1">фоторафия</th>
            <th scope="col" className="col-md-1">pricein</th>
            <th scope="col" className="col-md-1">priceout</th>
            <th scope="col" className="col-md-1">cтатус</th>
          </tr>
        </thead>
        <tbody>
  
         {items.map((item) => (
          <tr key={item._id}>
            <td className="col-md-1">{item.id_item}</td>
            <td className="col-md-2">{item.description}</td>
            <td className="col-md-1">{item.createdAt}</td>
            <td className="col-md-1">{item.photos}</td>
            <td className="col-md-1">{item.pricein}</td>
            <td className="col-md-1">{item.priceout}</td>
            <td className="col-md-1">{item.status}</td>
          </tr>
        ))}
    
        </tbody>
      </table>
    </div>
    // <div className="small">
    //   <span>Получаем данные:</span>
        // {items.map((item) => (
        //   <p key={item._id}>Имя:{item.username} status:{item.roles}</p>
        // ))}
    // </div>
  );
}

export default FromApi;
