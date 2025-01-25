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
            <span>Аналитика</span>
          </li>

          <li className="li__block bg_circle">
            <a href="#" className="">
            <i class="bi bi-headset"></i>
            </a>
            <span>Контакты</span>
          </li>
          
  
          
          {/* <li className="li__block ">
            <a href="/login">
            <i class="bi bi-door-closed"></i>
            </a>
            <span>Вход</span>
          </li> */}
          
          <li className="li__block">
            
            <a href="/register">
            <i class="bi bi-bootstrap-reboot"></i>
            </a>
            <span>Регистрация</span>
          </li>
          <li className="li__block">
            
            <a href="/partner">
            <i class="bi bi-person-vcard-fill"></i>
            </a>
            <span>Партнерам</span>
          </li>


        </ul>
      </div>
    </div>
  );
}

export default FooterMenu;
