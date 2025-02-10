import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div>
      <div className="container-fluid container_breadcrumbs">
          <Link to="/">Home</Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;  
            
            return isLast ? (
              <span key={name}> / {name}</span>
            ) : (
              <span key={name}>
                / <Link to={routeTo}>{name}</Link>
              </span>
            );

          })}

       
      </div>
      <hr></hr>
    </div>
  );
};

export default Breadcrumbs;
