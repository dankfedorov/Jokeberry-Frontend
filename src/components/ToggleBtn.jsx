import React from "react";
import "../assets/styles/togglebtn.css";
import { SortDownAlt } from "react-bootstrap-icons";

function ToggleBtn() {
  const handleToggleSideBar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };

  return (

 <span>menu</span> 
  );
}

export default ToggleBtn;

