import React from "react";
import Info from "./components/info.jsx";
import About from "./components/about.jsx";
import Interests from "./components/interests.jsx";
import Footer from "./components/footer.jsx";
import rectangle from "./assets/Rectangle90.png";

export default function App() {
  return (
    <div className="container">
      <img src={rectangle} alt="Janet Image" />
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
