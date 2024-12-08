// import Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { HashRouter as Router, Route,Routes } from 'react-router-dom';

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandPage from "pages/LandPage";
import LoginPage from "pages/LoginPage";
import Dashboard from "pages/Dashboard";
import ToggleBtn from "components/ToggleBtn";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterPage from "./pages/RegisterPage";

// Компоненты страниц
const Home = () => {
  return (
    <div>
      <Header/>
      <LandPage />
      <Footer />
    </div>
  );
};

const Dash = () => {
  return (
    <div>
      <Header/>
      <Dashboard />
      <Footer/>
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

const Statistic = () => {
  return (
    <div className="">
      <Header />
      <h2>Извините, необходимо пройти авторизацию.</h2>
    
    </div>
  );
};


const App = () => {
  const isAuthenticated = Boolean(localStorage.getItem("authToken")); // Пример проверки
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/admin" Component={Dash} />        
        
      
       
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              {Dash}
            </ProtectedRoute>
          }
        />
       
      </Routes>
    </Router>
  );
};

export default App;
