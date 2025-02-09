import React, { useState } from "react";
import NavItem from "../components/NavItem";
import navList from "../components/data/navitem";
import frontendlink from "../components/data/frontendlink";
import backendlink from "../components/data/backendlink";



const SwitchSlider = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <div className="slider" onClick={toggleMenu}>
        {/* <i className="bi bi-badge-ar"></i> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <ul class="nav flex-column mb-1">
          <p className="very-small">Дополнительное меню сайта</p>
          {navList.map((nav) => (
            <NavItem key={nav._id} nav={nav} />
          ))}
        </ul>
        <hr></hr>

        <ul class="nav flex-column">
          <p className="very-small">Frontend</p>
          {frontendlink.map((nav) => (
            <NavItem key={nav._id} nav={nav} />
          ))}
        </ul>
        <ul class="nav flex-column mb-1">
          <p className="very-small">Backend</p>
          {backendlink.map((nav) => (
            <NavItem key={nav._id} nav={nav} />
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default SwitchSlider;
