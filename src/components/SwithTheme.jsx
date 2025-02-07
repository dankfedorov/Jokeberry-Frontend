import React, { useState } from 'react';
import LeftSideMenu from './LeftSideMenu';
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
      <i className="bi bi-badge-ar"></i>
      </div>
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>

      <ul class="nav flex-column mb-1">
          <p className="very-small">Разделы сайта</p>
          {navList.map((nav) => (
            <NavItem key={nav._id} nav={nav} />
          ))}
        </ul>

      </div>
    </div>
  );
};

export default SwitchSlider;