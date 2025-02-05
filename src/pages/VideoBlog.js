import React from "react";
import "../assets/styles/videopage.css";
import VideoStart from "components/VideoStart";


function VidePage() {
  return (
    <>

      <section id="part2" className="text-white text-center video-blog ">
        <div className="container container__video">
          <div className="row d-flex align-items-center justify-content-between ">
          <h2 className="mb-2 h2__video">Интро.</h2>
             <VideoStart/>        
          </div>
        </div>
      </section>
    
      <section id="part2" className="text-white text-center video-blog ">
        <div className="container container__video">
          <div className="row d-flex align-items-center justify-content-between ">
          <h2 className="mb-2 h2__video">1.Draw Создание архитектуры сайта.</h2>
          <iframe title="Video" width="50%" height="550" src="https://rutube.ru/play/embed/f1e2bd72fcb35fe0c3651e147274d7df/" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen />
          </div>
        </div>
      </section>
      
    </>
  );
}

export default VidePage;
