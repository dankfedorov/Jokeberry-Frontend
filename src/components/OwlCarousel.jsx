import React from "react";
import "../assets/styles/owlcarousel.css";
import img1 from "../assets/images/Figma.png";
import img2 from "../assets/images/CSS.png";
import img3 from "../assets/images/React.png";
import img4 from "../assets/images/MongoDB.png";
import img5 from "../assets/images/Chrome.png";
import img6 from "../assets/images/Html.png";
import img7 from "../assets/images/JS.png";
import img8 from "../assets/images/Bootstrap.png";
import img9 from "../assets/images/Miro.png";
import img10 from "../assets/images/Node.png";

function OwlCarousel() {
  return (
      <div class="owl-carousel ">
        <div class="item">
          <a class="popup-youtube" href="#">
            <img src={img1} /> <i class="fa fa-play" aria-hidden="true"></i>
          </a>
        </div>
        <div class="item">
          <a class="popup-youtube" href="#">
            <img src={img2} /> <i class="fa fa-play" aria-hidden="true"></i>
          </a>
        </div>
        <div class="item">
          <a class="popup-youtube" href="#">
            <img src={img3} /> <i class="fa fa-play" aria-hidden="true"></i>
          </a>
        </div>
        <div class="item">
          <a class="popup-youtube" href="#">
            <img src={img4} /> <i class="fa fa-play" aria-hidden="true"></i>
          </a>
        </div>
        <div class="item">
          <a class="popup-youtube" href="#">
            <img src={img5} /> <i class="fa fa-play" aria-hidden="true"></i>
          </a>
        </div>
        <div class="item">
          <a class="popup-youtube" href="#">
            <img src={img6} /> <i class="fa fa-play" aria-hidden="true"></i>
          </a>
        </div>
        <div class="item">
          <a class="popup-youtube" href="#">
            <img src={img7} /> <i class="fa fa-play" aria-hidden="true"></i>
          </a>
        </div>
        <div class="item">
          <a class="popup-youtube" href="#">
            <img src={img8} /> <i class="fa fa-play" aria-hidden="true"></i>
          </a>
        </div>
        <div class="item">
          <a class="popup-youtube" href="#">
            <img src={img9} /> <i class="fa fa-play" aria-hidden="true"></i>
          </a>
        </div>
        <div class="item">
          <a class="popup-youtube" href="#">
            <img src={img10} /> <i class="fa fa-play" aria-hidden="true"></i>
          </a>
        </div>



      </div>

  );
}

export default OwlCarousel;
