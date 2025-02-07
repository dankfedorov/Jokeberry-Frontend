import React, { useEffect, useState } from "react";
import axios from "axios";


function FromApi() {
  const [items, setItems] = useState([]);

  // Получение данных с сервера
  useEffect(() => {
    // axios.get("http://localhost:5000/api/items")
    axios.get("https://dankfedorov-server-9b2d.twc1.net/api/users")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="table-responsive small">
      <p className="very-small">Список пользователей</p>
      <table class="table table-striped table-sm ">
        <thead>
          <tr>
            <th scope="col" ># id</th>
            <th scope="col" >username</th>
            {/* <th scope="col">hash password</th> */}
            <th scope="col" >status</th>
          </tr>
        </thead>
        <tbody>
  
         {items.map((item) => (
          <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.username}</td>
            {/* <td className="very-small">{item.password}</td> */}
            <td>{item.roles}</td>
          
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
