import React from "react";

function FooterMenu() {
  return (
    <div>
      <div className="row footermenu">
        <ul className="container__footermenu ">
         
    
          <li className="li__block">
            <a href="/">
              <i class="bi bi-house"></i>
            </a>
            <span>Главная</span>
          </li>

          <li className="li__block">
            <a href="/dashboard">
            <i class="bi bi-bar-chart"></i>
            </a>
            <span>Dashboard</span>
          </li>

          <li className="li__block bg_circle">
            <a href="/docs" className="">
            <i class="bi bi-info-circle"></i>
            </a>
            <span>ИНФО</span>
          </li>
              
        
          <li className="li__block">
            
            <a href="/register">
            <i class="bi bi-bootstrap-reboot"></i>
            </a>
            <span>Регистрация</span>
          </li>
          <li className="li__block">
            
            <a href="/sklad">
            <i class="bi bi-person-bounding-box"></i>
            </a>
            <span>Партнерам</span>
          </li>


        </ul>
      </div>
    </div>
  );
}

export default FooterMenu;
