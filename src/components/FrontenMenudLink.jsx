import React from "react";
import NavItem from "../components/NavItem";
import frontendlink from "../components/data/frontendlink";


function FrontenMenudLink() {
  return (
    <div>
      <hr></hr>
      <ul class="nav flex-column">
        <p className="very-small">Frontend</p>
        {frontendlink.map((nav) => (
          <NavItem key={nav._id} nav={nav} />
        ))}
      </ul>
    </div>
  );
}

export default FrontenMenudLink;
