import React from 'react'
import FromApi from "./FromApi";

function UserList() {
  return (
          <div id="users" className="wrapper wrapper-content  animated fadeInRight">
            <div className="row container__users bg-block">
              <div className="col-sm-12 white-bg ">
                <div className="ibox">
                  <div className="ibox-content">
                    {/* <span className="text-muted small pull-right">
                      updated: <i className="fa fa-clock-o"></i> 10:00 am -
                      10.12.2024
                    </span> */}
                    <h3 className="users__h3"></h3>
    
                    <div className="row">
    
                      <div className="col-sm-12">
                        <FromApi />
                      </div>
    
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end of row */}
          </div>
  )
}

export default UserList