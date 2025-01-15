import React from "react";
import "../assets/styles/pulsetag.css"

function PulseTag() {
  return (
    <div>
      <div className="pulse__block">
        <div className="pulse">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        
          <button class="pulse__button">
            <a class="pulse__link" href="/login">
              ЖМАХАЙ
            </a>
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default PulseTag;
