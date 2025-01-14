import React from "react";
import "../assets/styles/switchtheme.css";

function SwithTheme() {
  return (
    <div>
     <i class="bi bi-brightness-high"></i>
      <label class="switch">
     
        <input type="checkbox" />
        <span class="slider round"></span>
      
      </label>
      
    </div>
  );
}

export default SwithTheme;
