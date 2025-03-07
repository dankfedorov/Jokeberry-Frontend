import React from "react";
import "../assets/styles/footer.css";
import robot5 from "../assets/images/robot5.png";
import pluspic from "../assets/images/16plus.png";
import "../assets/styles/pulsetag.css";


function Footer() {
  return (
    <footer id="footer" className="footer section-offset">

      <div className="container">
        
        <div className="row footer__background flex p-2">
          <div className="col-md-3 footer__block">
            <a href="/Dashboard" className="logo d-flex align-items-center p-1">
              {/* <img src={logo} /> */}
              <span className="d-lg-block">JOKEBERRY</span>
            </a>
          </div>
          <div className="col-md-4 footer__block ">
            <p className="footer__descr so-small">© 2024–2025<br></br> aвтор Федоров Даниил. </p>
            <p className="footer__descr mb-2 so-small">
              Проект сделан в рамках учебной программы.<br></br>
            </p>
          </div>
          <div className="col-md-2 footer__block mb-4">
            <ul class="footer__block link_box">
              <li>
                <a href="/" class="footer-link">
                  Главная
                </a>
              </li>
              <li>
                <a href="/about" class="footer-link">
                  О проекте
                </a>
              </li>
         
                   
              <li>
                <a href="/sklad" class="footer-link">
                Авторизация
                </a>

              </li>
            </ul>
          </div>
          <div className="col-md-3 footer__block">
            <p className="so-small">Связь с нами</p>
            <ul class="footer__block right-block">
              <li>
                <a
                  href="https://t.me/JokeBerry_Bot"
                  target="_blank"
                  class="footer-link "
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    class="bi bi-telegram element"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://t.me/JokeBerry_Bot" target="_blank" rel="noreferrer" class="footer-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    class="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                </a>
              </li>
         
            </ul>

            
          </div>
          </div>

          <div className="row footer__background flex p-3">
            <div className="col-md-3 ">
              
              <img src={pluspic} className="" alt=""/>
              
            </div>
            <div className="col-md-4">
              <p class="footer__descr so-small">
                Предоставляя свои персональные данные пользователь даёт согласие
                на обработку, хранение и использование своих персональных данных
                на основании ФЗ № 152-ФЗ «О персональных данных» от 27.07.2006
                г.
              </p>
            </div>
            <div className="col-md-2">
              <p class="footer__descr so-small ">
                Представленная на&nbsp;сайте информация носит справочный
                характер и&nbsp;не&nbsp;является публичной офертой.
              </p>
            </div>
            <div className="col-md-3"> <img src={robot5} className="" alt=""/></div>
          </div>

        
      </div>
    </footer>
  );
}

export default Footer;
