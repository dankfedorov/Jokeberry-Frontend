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
import Dashboard from "pages/Dashboard";
import PartnerPage from "pages/PartnerPage";

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
import Documentation from "pages/Documentation";
import SidebarMenu from "components/SidebarMenu";
import TableView from "components/TableView";
import Architect from "components/Architect";
import UserData from "components/UserData";
import Users from "components/Users";
import ErrorPage from "pages/ErrorPage";
import Toastify from "./components/Toastify";
import ShowRoom from "pages/ShowRoom";


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

const Docs = () => {
  return (
    <div>
      <HeaderDash />
      <Documentation />
      <FooterMenu />

    </div>
  );
};

const CodeGenerator = () => {
  return (
    <div>
      <HeaderDash/>
      <Dashboard />
      
    </div>
  );
};

const Dash = () => {
  // (Protected:)
  return (
    <div>
      {/* <Header/> */}
      <Dashboard />
      <FooterMenu />
      <Smallfooter />
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
      <HeaderDash />
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

// const Sklad = () => {
//   return (
//     <div>
//       <Sklad />
//       </div>
//   );
// };

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
        <Route path="/docs" Component={Docs} />
        <Route path="/error" Component={Errorpage} />

        

        


        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <HeaderDash />
              <Dashboard />
             
            </ProtectedRoute>
          }
        />

        <Route
          path="/sklad"
          element={
            <ProtectedPartner isAuthenticated={isAuthenticated}>
             <HeaderDash />
             <ShowRoom />
             <FooterMenu />
            </ProtectedPartner>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
