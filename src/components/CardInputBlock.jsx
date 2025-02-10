import React, { useState } from "react";
import "../assets/styles/sendform.css";

const CardInputBlock = () => {
  const [ItemData, setFormData] = useState({
    id_item: "",
    description: "",
    photos: "",
    createdAt: "",
    pricein: "",
    priceout: "",
    status: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...ItemData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // предотвращаем перезагрузку страницы

    try {
      const response = await fetch(
        "https://dankfedorov-server-9b2d.twc1.net/api/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ItemData), // передаем данные формы
        }
      );
      console.log("Отправили");
      if (!response.ok) {
        throw new Error("Ошибка отправки данных");
      }
      const result = await response.json();
      console.log("Успех:", result);

      setIsSuccess(true); // Успех регистрации -- тут не понятно нужен ли этот вариант

      setTimeout(() => {
        window.location.reload(); // Перезагрузка страницы
        window.location = "/sklad";
      }, 100);
    } catch (error) {
      window.location.reload(); // Перезагрузка страницы
      alert("Опс...ошибка...Нужен админ.\n Пожалуйста, проверьте ваши данный.");
    }
  };

  return (
    <div className="container__cardinputblock">
    <div className="table-responsive small ">
      <p className="m-3 text-small12">Таблица для заполнения</p>
      <table class="table table-striped table-sm text-small12">
        <thead>
          <tr>
            <th scope="col" className="col-md-1">№</th>
            <th scope="col" className="col-md-3">Наименование</th>
            <th scope="col" className="col-md-1">Image</th>
            <th scope="col" className="col-md-1">Pricein</th>
            <th scope="col" className="col-md-1">Priceout</th>
            <th scope="col" className="col-md-1 ">Status</th>
          </tr>
        </thead>
        <tbody>
  
          <tr >
            <td className="col-md-1"><input type="text" name="id_item" className="" placeholder="id_item" value={ItemData.id_item} onChange={handleChange}/></td>
            <td className="col-md-3"><input type="text" name="description" className="" placeholder="название" value={ItemData.description} onChange={handleChange}/></td>
            <td className="col-md-1"><input type="text" name="photos" className="" placeholder="фотография" value={ItemData.photos} onChange={handleChange}/></td>
            <td className="col-md-1"><input type="text" name="createdAt" className="" placeholder="pricein" value={ItemData.createdAt} onChange={handleChange}/></td>
            <td className="col-md-1"><input type="text" name="pricein" className="" placeholder="priceout" value={ItemData.pricein} onChange={handleChange}/></td>
            <td className="col-md-1"><input type="text" name="priceout" className="" placeholder="status" value={ItemData.priceout} onChange={handleChange}/></td>
           
          </tr>
          </tbody>
        
      </table>
      <div className="btn-block p-1">
        <button id="submitBtn" className="btn btn-success " type="submit">Добавить запись</button> 
        <button id="delBtn" className="btn btn-danger" type="del">Удалить запись</button> 
        </div>
    </div>
    </div>

    
  );
};

export default CardInputBlock;
