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
            <span>HOME</span>
          </li>


          <li className="li__block ">
            <a href="/present" className="">
            <i class="bi bi-info-circle"></i>
            </a>
            <span>PRE</span>
          </li>

          <li className="li__block bg_circle">
            <a href="/register">
            <i class="bi bi-menu-down"></i>
            </a>
            <span>REG</span>
          </li>              
        
          <li className="li__block">
            
            <a href="/video">
            <i class="bi bi-camera-video"></i>
            </a>
            <span>VIDEO</span>
          </li>
          <li className="li__block">
            
            <a href="/sklad">
            <i class="bi bi-person-bounding-box"></i>
            </a>
            <span>LOGIN</span>
          </li>


        </ul>
      </div>
    </div>
  );
}

export default FooterMenu;
