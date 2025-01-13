import React from "react";
import useravatar from "../assets/images/superuser.jpg";
import { Fragment } from "react";
// import FromApi from "./FromApi";

function Users() {
  const username = JSON.parse(localStorage.getItem('username'));

  return (
    <div>
      <div id="users" className="wrapper wrapper-content  animated fadeInRight">
        <div className="row container__users bg-block">
          <div className="col-sm-8 white-bg ">
            <div className="ibox">
              <div className="ibox-content">
                {/* <span className="text-muted small pull-right">
                  updated: <i className="fa fa-clock-o"></i> 10:00 am -
                  10.12.2024
                </span> */}
                <h3 className="users__h3">Пользователи</h3>
                <p className="small">
                  Список пользователей зарегистрированных в нашей системе.<br></br>
                  Пароль хэширован и сохранен в базе данных <b>MongoDB</b>.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-3 white-bg">
            <div className="row">
              <div className="col-lg-4 text-center">
                <div class="ibox">
                  <div className="ibox-content">
                    <div className="">
                      <img
                        alt="image"
                        class="rounded-circle "
                        src={useravatar}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="ibox">
                  <div className="ibox-content">
                    <p className="small">Пользователь</p>
                    <p className="small">Username:{username}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end of row */}
      </div>



    </div>
  );
}

export default Users;
