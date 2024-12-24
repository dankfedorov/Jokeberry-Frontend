import React from "react";
import "../assets/styles/videopage.css";
import VideoStart from "components/VideoStart";


function VidePage() {
  return (
    <>

       <section id="intro" className="text-white text-center video-blog">
        <div className="container container__video  ">
        
          <div className="row d-flex align-items-center justify-content-between ">
          <h2 className="mb-2 h2__video">Промо блок</h2>
             <VideoStart/>        
          </div>
        </div>
      </section>
    
       <section id="part1" className="text-white text-center video-blog ">
        <div className="container container__video">
          <div className="row d-flex align-items-center justify-content-between ">
          <h2 className="mb-2 h2__video">1.DRAW.IO Создание архитектуры проекта.</h2>
             <VideoStart/>        
          </div>
        </div>
      </section>
       
       <section id="part2" className="text-white text-center video-blog ">
        <div className="container container__video">
          <div className="row d-flex align-items-center justify-content-between ">
          <h2 className="mb-2 h2__video">2.Figma Дизайн макета сайта.</h2>
             <VideoStart/>        
          </div>
        </div>
      </section>

       <section id="part3" className="text-white text-center video-blog ">
        <div className="container container__video">
          <div className="row d-flex align-items-center justify-content-between ">
          <h2 className="mb-2 h2__video">3.Visual studio. Кодинг и верстка сайта.</h2>
             <VideoStart/>        
          </div>
        </div>
      </section>

       <section id="part4" className="text-white text-center video-blog ">
        <div className="container container__video">
          <div className="row d-flex align-items-center justify-content-between ">
          <h2 className="mb-2 h2__video">4.Bootstrap.Использование CSS бибилиотеки.</h2>
             <VideoStart/>        
          </div>
        </div>
      </section>
      
       <section id="part5" className="text-white text-center video-blog ">
        <div className="container container__video">
          <div className="row d-flex align-items-center justify-content-between ">
          <h2 className="mb-2 h2__video">5.React.Фреймворк библиотека.</h2>
             <VideoStart/>        
          </div>
        </div>
      </section>

       <section id="part6" className="text-white text-center video-blog ">
        <div className="container container__video">
          <div className="row d-flex align-items-center justify-content-between ">
          <h2 className="mb-2 h2__video">6.NPM модули для React.</h2>
             <VideoStart/>        
          </div>
        </div>
      </section>
<hr></hr>
       <section id="part7" className="text-white text-center video-blog ">
        <div className="container container__video">
          <div className="row d-flex align-items-center justify-content-between ">
          <h2 className="mb-2 h2__video">7.Node. Создание серверной части</h2>
             <VideoStart/>        
          </div>
        </div>
      </section>

       <section id="part8" className="text-white text-center video-blog ">
        <div className="container container__video">
          <div className="row d-flex align-items-center justify-content-between ">
          <h2 className="mb-2 h2__video">8.База данных MongoDB</h2>
             <VideoStart/>        
          </div>
        </div>
      </section>


    </>
  );
}

export default VidePage;
