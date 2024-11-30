// import Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandPage from "pages/LandPage";
import LoginPage from "pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <LandPage /> */}
      <Footer />
    </div>
  );
}

export default App;
