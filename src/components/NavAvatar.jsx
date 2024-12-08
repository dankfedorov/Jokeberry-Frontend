import React from "react";
import userImg from '../assets/images/userimg.png';
import menu from '../assets/images/menu.png';
import "../assets/styles/nav.css"

function NavAvatar() {
  return (    
  <li className="nav-item dropdown">
    <a href="#" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
      {/* <i className="bi bi-box-arrow-in-right"></i> */}
      {/* <img src={menu} alt="Profile" className='rounded-circle' /> */}
      <img src={menu} alt="Profile" className='' />
      <span className="d-none d-md-block dropdown-toggle ps-2"> User</span>
    </a>

    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
      
      <li className="dropdown-header">
      <h6>user: Superuser</h6>
      <span>ID:321456412</span>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a href="/login" className="dropdown-item d-flex align-items-center" >
        <i class="bi bi-door-closed"></i>
        <span>Вход / Регистрация</span>
        </a>
        
      </li>
      <li>
        <hr className='dropdown-divider' />
      </li>
 
      <li>
        <hr className='dropdown-divider' />
      </li>
 
      <li>
        <a href="user-profile.html" className="dropdown-item d-flex align-items-center" >
        <i className="bi bi-person"></i>
        <span>Профиль</span>
        </a>
        
      </li>
      <li>
        <hr className='dropdown-divider' />
      </li>

      <li>
        <a href="user-profile.html" className="dropdown-item d-flex align-items-center" >
        <i className="bi bi-gear"></i>
        <span>Настройка</span>
        </a>
        
      </li>
      <li>
        <hr className='dropdown-divider' />
      </li>
      <li>
        <a href="#" className="dropdown-item d-flex align-items-center" >
        <i className="bi bi-question-circle"></i>
         <span>Нужна помощь ?</span >
         </a>
      </li>
      <li>
        <hr className='dropdown-divider' />
      </li>

      <li>
        <a href="/" className="dropdown-item d-flex align-items-center" >
        <i className="bi bi-box-arrow-right"></i>
         <span>Выход</span >
         </a>
      </li>


    </ul>
  </li>
  );
}

export default NavAvatar;
