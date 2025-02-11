import React from "react";
import "../assets/styles/dashboard.css";
import Architect from "components/Architect";
import DisignMaket from "components/DisignMaket";
import CodingHtml from "components/CodingHtml";
import "react-calendar/dist/Calendar.css";

import ReactInfo from "components/ReactInfo";
import UserInfo from "components/UserInfo";
import NodeInfo from "components/NodeInfo";
import MongodbInfo from "components/MongodbInfo";
import NpmInfo from "components/NpmInfo";
import JwtAuth from "components/JwtAuth";
import IntroInfo from "components/IntroInfo";
import EasyDev from "components/EasyDev";

function PresentPage() {
  const username = JSON.parse(localStorage.getItem("username"));
  const id = JSON.parse(localStorage.getItem("id"));
  const role = JSON.parse(localStorage.getItem("roles"));

  return (
    <div className="presentpage ">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-2"></div> */}

          <div className="col-md-10 ">
            <IntroInfo/>
            <Architect />
            <DisignMaket />
            <CodingHtml />
            <ReactInfo />

            <NodeInfo/>
            <MongodbInfo/>
            <NpmInfo/>
            <JwtAuth/>
            
          </div>

          <div className="col-md-2 ">
            {/* <UserInfo /> */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default PresentPage;
