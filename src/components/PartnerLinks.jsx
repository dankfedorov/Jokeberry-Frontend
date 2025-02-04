import React from "react";
import person from "../assets/images/person.png";
import "../assets/styles/partnerlinks.css";

function PartnerLinks() {
  return (
    <div>
      <section className="partnerlinks">
        <ul className="container__partnerlinks ">
  
          <li className="partnerlinks-item ">
            <a href="/partner" className="toplink-link menu__icon very-small">         
              <img src={person} alt="Profile" className="" title="only partners"/>
              партнерам
               </a>
               
           </li>

            
        </ul>

      </section>
    </div>
  );
}

export default PartnerLinks;
