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
import RegisterPage from "./pages/RegisterPage";
import VideoBlog from "../src/pages/VideoBlog";
import AboutProject from "components/About";
import FooterMenu from "components/FooterMenu";
import HeaderDash from "components/HeaderDash";
import PresentPage from "pages/PresentPage";
import ErrorPage from "pages/ErrorPage";


import EasyDev from "components/EasyDev";
import Dashboard from "pages/Dashboard";


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
     <Header />
      <PresentPage />
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
      <Footer />
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
      <HeaderDash />
      <VideoBlog />
      <Footer/>
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
        
        <Route path="/register" Component={Register} />
        <Route path="/video" Component={VideoPage} />
        <Route path="/about" Component={About}/>
        <Route path="/present" Component={Present} />
        <Route path="/error" Component={Errorpage} />


{/* Ограничение доступа */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
             <Header />
             <Dashboard/>
             <FooterMenu />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
