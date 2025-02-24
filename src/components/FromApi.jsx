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
    <div>
    <div className="table-responsive small">
      {/* <p className="text-black">Список пользователей</p> */}
      <table class="table table-striped table-sm ">
        <thead>
          <tr>
            <th scope="col" >username</th>
            <th scope="col" ># id</th>
             <th scope="col" >status</th>
          </tr>
        </thead>
        <tbody>
  
         {items.map((item) => (
          <tr key={item._id}>
              <td>{item.username}</td>
            
              <td>{item._id}</td>
              {/* <td className="very-small">{item.password}</td> */}
            <td>{item.roles}</td>
          
          </tr>
        ))}
    
        </tbody>
      </table>
    </div>

    <div className="">
      <span className="text-black">Все данные о пользователях получаем из базы данных MonogDB по API.</span>
      <p className="text-black">BACKEND сервер транслирует данные в формате JSON и расположен по адресу:</p>
      <a className="text-black" target="_blank" href="https://dankfedorov-server-9b2d.twc1.net/api/users"><b> https://dankfedorov-server-9b2d.twc1.net/api/users</b> </a>
        
    </div>
    </div>
  );
}

export default FromApi;
