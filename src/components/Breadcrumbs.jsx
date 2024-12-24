import React from "react";

function Breadcrumbs() {
  return (
    <div>
      <div id="users" class="wrapper">
        <div class="row">
          <div class="col-sm-12">
            <h3 className="users__h3">Breadcrumbs</h3>
            <ol class="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a>/ App Views</a>
              </li>
              <li class="active">
                <strong>/ Clients</strong>
              </li>
            </ol>
          </div>
        </div>{" "}
        {/* end of row */}
      </div>
    </div>
  );
}

export default Breadcrumbs;
