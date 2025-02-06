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
            <th scope="col">номер</th>
            <th scope="col">описание</th>
            <th scope="col">дата записи</th>
            {/* <th scope="col">фоторафия</th> */}
            <th scope="col">pricein</th>
            <th scope="col">priceout</th>
            <th scope="col">cтатус</th>
          </tr>
        </thead>
        <tbody>
  
         {items.map((item) => (
          <tr key={item._id}>

            <td>{item.id_item}</td>
            <td>{item.description}</td>
            <td>{item.createdAt}</td>
            {/* <td >{item.photos}</td> */}
            <td>{item.pricein}</td>
            <td>{item.priceout}</td>
            <td>{item.status}</td>
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
