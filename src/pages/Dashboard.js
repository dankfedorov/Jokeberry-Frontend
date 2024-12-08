import React from "react";
import "../assets/styles/dashboard.css";
import navList from "../components/data/navitem";
// import navLink from "../components/data/navlink";
import frontendlink from "../components/data/frontendlink";
import backendlink from "../components/data/backendlink";
import NavItem from "../components/NavItem";
import Logo from "components/Logo";
import ToggleBtn from "components/ToggleBtn";
import logo from "../assets/images/logo.png";
import Nav from "../components/Nav";
import Shema from "../assets/images/Shema.png"
import Header from "components/Header";
function Dashboard() {
  return (
    <div>
      
      <div class="container-fluid">
        <div class="row">
                
          <nav
            id="sidebarMenu"
            class="col-md-4 col-lg-3 d-md-block sidebar-nav collapse left-block ">
            <div class="position-sticky pt-3">

            <div className="col-md-2 ">
               
              </div>

              {/* // Формируем списко элементов из json файла */}
              <ul class="nav flex-column">
              <span className="small text-center"> Панель управления</span>
                <li className="nav-item">Frontend</li>
                {frontendlink.map((nav) => (
                  <NavItem key={nav._id} nav={nav} />
                ))}
              </ul>

              <ul class="nav flex-column mb-2">
                {/* Pages block */}
                <li className="nav-item">Backend</li>
                {backendlink.map((nav) => (
                  <NavItem key={nav._id} nav={nav} />
                ))}
                {/* Page block end */}
              </ul>

              <ul class="nav flex-column mb-2">
                {/* Pages block */}
                <li className="nav-item ">Пользователь</li>

                {navList.map((nav) => (
                  <NavItem key={nav._id} nav={nav} />
                ))}
                {/* Page block end */}
              </ul>
            </div>
          </nav>

          <main class="col-md-8  col-lg-9 px-md-4  ">
            {/*  ms-sm-auto */}
            {/* <ToggleBtn /> */}

           {/* <canvas class="my-4 w-100" id="myChart" width="300" height="250"></canvas> */}
            
            
            <div class="table-responsive">
              <table class="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col"># id</th>
                    <th scope="col">user name</th>
                    <th scope="col">hash password</th>
                    <th scope="col">email</th>
                    <th scope="col">status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>SuperUser</td>
                    <td>*************</td>
                    <td>superman@marvel.com</td>
                    <td>superman</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Admin</td>
                    <td>*************</td>
                    <td>wow@mail.ru</td>
                    <td>admin</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Иванов Иван</td>
                    <td>*************</td>
                    <td>user@mail.ru</td>
                    <td>user</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
