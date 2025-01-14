import React from "react";
import "../assets/styles/switchtheme.css";




function SwithTheme() {
  
  return (
    <div>
     <i className="bi bi-brightness-high" ></i>
      <label className="switch" id="switch">
        <input type="checkbox" />
        <span className="slider round" ></span>
      
      </label>
      
    </div>
  );
}

export default SwithTheme;
