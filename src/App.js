// import Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./assets/styles/style.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandPage from "pages/LandPage";
import LoginPage from "pages/LoginPage";
import LoginPartner from "pages/LoginPartner";


import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedPartner from "./components/ProtectedPartner";

import RegisterPage from "./pages/RegisterPage";
import Smallfooter from "components/Smallfooter";
import VideoStart from "components/VideoStart";
import VideoBlog from "../src/pages/VideoBlog";
import AboutProject from "components/About";
import FooterMenu from "components/FooterMenu";
import UserList from "components/UserList";
import HeaderDash from "components/HeaderDash";
import Documentation from "pages/PresentPage";
import SidebarMenu from "components/SidebarMenu";
import TableView from "components/TableView";
import Architect from "components/Architect";
import UserData from "components/UserData";
import Users from "components/Users";
import ErrorPage from "pages/ErrorPage";
import Toastify from "./components/Toastify";
import Sklad from "pages/Sklad";
import SwitchSlider from "components/SwithTheme";


// Компоненты страниц
const Home = () => {
  const isAuthenticated = Boolean(localStorage.getItem("authToken")); // Пример проверки
  // Тернарный оператор
  const status =
    isAuthenticated === true
      ? "пройдена.Клиент в системе."
      : "не пройдена.Клиент не в системе.";
  console.log("Авторизация " + status);
  return (
    <div>
      <Header />
      <LandPage />
      <Footer />
      <FooterMenu />
    </div>
  );
};

const Present = () => {
  return (
    <div>
     <HeaderDash />
      <Documentation />
      <Footer />
      <FooterMenu />

    </div>
  );
};


const About = () => {
  // (Protected:)
  return (
    <div>
      <Header/>
      <AboutProject />
      <Footer/>
      <FooterMenu />
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <Header />
      <LoginPage />
      <FooterMenu />
    </div>
  );
};
const Loginpartner = () => {
  return (
    <div>
      <Header />
      <LoginPartner />
      <FooterMenu />
    </div>
  );
};

const Register = () => {
  return (
    <div>
      <Header />
      <RegisterPage />
      <FooterMenu />
    </div>
  );
};


const VideoPage = () => {
  return (
    <div>
      <Header />
      <VideoBlog />
      <FooterMenu />
    </div>
  );
};

const Errorpage = () => {
  return (
    <div >
    <Header />
     <ErrorPage />
      </div>
  );
};

const App = () => {
  const isAuthenticated = Boolean(localStorage.getItem("authToken")); // Пример проверки
  // console.log("Авторизирация:", isAuthenticated);
  // Тернарный оператор
  const status =
    isAuthenticated === true
      ? "пройдена.Клиент в системе."
      : "не пройдена.Клиент не в системе.";
  console.log("Авторизация " + status);

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/loginpartner" Component={Loginpartner} />
        <Route path="/register" Component={Register} />
        <Route path="/video" Component={VideoPage} />
        <Route path="/about" Component={About}/>
        <Route path="/present" Component={Present} />
        <Route path="/error" Component={Errorpage} />


        <Route
          path="/sklad"
          element={
            <ProtectedPartner isAuthenticated={isAuthenticated}>
             <HeaderDash />
             <Sklad />
             <FooterMenu />
            </ProtectedPartner>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
