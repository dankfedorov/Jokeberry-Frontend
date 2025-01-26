import React from "react";
import architect_img from "../assets/images/architect_img.jpg";
import robot3 from "../assets/images/robot3.png";
import robot4 from "../assets/images/robot4.png";

function Architect() {
  return (
    <>
    <section id="architect" className="architect "> 

      <div className=" container__architect">
        <h2  className="text-center mb-0">Архитектура проекта</h2>
        <p className="text-center mb-4">Frontend и Backend</p>


        <div className="row ">
          <div className="col-md-6">
            <p className="p-2">
              <b>Архитектура сайта</b>  – это своеобразный «каркас», на котором строится интернет-ресурс. 
              Он определяет, как различные элементы сайта взаимодействуют друг с другом, обеспечивая его функциональность, 
              удобство и привлекательность. </p>
              <p className="p-2">
              Понимание архитектуры сайта помогает создать сбалансированную и гармоничную структуру, 
              которая будет легко восприниматься пользователями и эффективно выполнять свои задачи.
            </p>
                   
          </div>

          <div className="col-md-6">
                       
            <p className="p-2">
              Клиенты видят только результат – красивый интерфейс и удобные функции, 
              но за всем этим стоит сложная работа, которая позволяет обеспечить плавный 
              и эффективный опыт использования. 
              </p>
              <p className="p-2">
              Правильная архитектура сайта и гармоничное
               взаимодействие фронтэнда с бэкэндом – это залог успеха вашего проекта в интернете, 
               а значит, важный шаг к достижению поставленных целей.
            </p>
          </div>
        </div>
        </div>
        </section>

       
     
      </>
   
  );
}

export default Architect;
