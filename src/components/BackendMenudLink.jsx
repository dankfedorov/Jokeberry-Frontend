import React from "react";
import NavItem from "../components/NavItem";
import backendlink from "../components/data/backendlink";

function BackendMenudLink() {
  return (
    <div>
      <hr></hr>
      <ul class="nav flex-column mb-1">
        <p className="very-small">Backend</p>
        {backendlink.map((nav) => (
          <NavItem key={nav._id} nav={nav} />
        ))}
      </ul>
    </div>
  );
}

export default BackendMenudLink;
