import React from "react";
import person from "../assets/images/person.png";
import basket from "../assets/images/basket.png";
import "../assets/styles/partnerlinks.css";

function PartnerLinks() {
  return (
    <div>
      <section className="partnerlinks">
        <ul className="container__partnerlinks">
          
          <li className="partnerlinks-item">
            <a href="/partner" className="toplink-link menu__icon ">
              <img src={person} alt="Profile" className="" title="only partners"/>
            </a>
          </li>
          <li className="partnerlinks-item">
            <a href="/partner" className="toplink-link menu__icon ">
              <img src={basket} alt="Profile" className="" title="basket"/>
            </a>
          </li>

        </ul>

      </section>
    </div>
  );
}

export default PartnerLinks;
