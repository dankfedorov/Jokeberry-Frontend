// import Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandPage from "pages/LandPage";
import LoginPage from "pages/LoginPage";
import Dashboard from "pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import RegisterPage from "./pages/RegisterPage";
import Smallfooter from "components/Smallfooter";
import VideoStart from "components/VideoStart";
import VideoBlog from "../src/pages/VideoBlog";
import AboutProject from "components/About";
import FooterMenu from "components/FooterMenu";
import UserList from "components/UserList";
import HeaderDash from "components/HeaderDash";
import Documentation from "pages/Documentation";


// Компоненты страниц
const Home = () => {
  const isAuthenticated = Boolean(localStorage.getItem("authToken")); // Пример проверки
  // Тернарный оператор
  const status = (isAuthenticated === true) ? "пройдена.Клиент в системе." : "не пройдена.Клиент не в системе.";
  console.log("Авторизация " + status);
   return (
    <div >
      <Header/>
      <LandPage />  
      <Footer />
      <FooterMenu />
    </div>
  );
};

const About = () => {
  const isAuthenticated = Boolean(localStorage.getItem("authToken")); // Пример проверки
  // Тернарный оператор
  const status = (isAuthenticated === true) ? "пройдена.Клиент в системе." : "не пройдена.Клиент не в системе.";
  console.log("Авторизация " + status);
   return (
    <div >
      <Header/>
      <AboutProject />
      <Footer />     
    </div>
  );
};

const Dash = () => {
  // (Protected:)
  return (
    <div>
      {/* <Header/> */}
      <Dashboard />
      <Smallfooter />
    </div>
  );
};
const Login = () => {
  return (
    <div>
      <Header/>
      <LoginPage />
    </div>
  );
};
const Register = () => {
  return (
    <div>
       <Header/>
      <RegisterPage />
    </div>
  );
};
const VideoPage = () => {
  return (
    <div>
       <Header/>
       <VideoBlog />
      
    </div>
  );
};

const ErrorAuth = () => {
  return (
    <div className="">
      <Header />
      <h2>Извините, необходимо пройти авторизацию.</h2> 
    </div>
  );
};


const App = () => {
  const isAuthenticated = Boolean(localStorage.getItem("authToken")); // Пример проверки
  // console.log("Авторизирация:", isAuthenticated);
  // Тернарный оператор
  const status = (isAuthenticated === true) ? "пройдена.Клиент в системе." : "не пройдена.Клиент не в системе.";
  console.log("Авторизация " + status);
  
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/video" Component={VideoPage} />        
        <Route path="/about" Component={About} />        
        {/* <Route path="/users" Component={Dash} />         */}
        
             
        <Route path="/dashboard" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
               {/* <Header/> */}
               <HeaderDash /> 
               <Dashboard />
               {/* <Smallfooter /> */}
            </ProtectedRoute>
          }
        />
        <Route path="/documentation" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
               {/* <Header/> */}
               <HeaderDash /> 
               <Documentation />
               {/* <Smallfooter /> */}
            </ProtectedRoute>
          }
        />
        
        <Route path="/admin" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
               <Header/>  
               <UserList/>
               <Smallfooter />
          </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
