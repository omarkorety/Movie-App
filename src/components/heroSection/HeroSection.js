import React from "react";
import HeaderImg from "./Hero.jpg";
import "../Styles/portfolio.css";
const HeroSection = () => {
  return (
    <section className="dark-bg" id="hero">
      <div className="container">
        <div className="text-white d-flex flex-column h-100 text-center justify-content-center">
          <h1 className="fs-1">Yasser Shehab</h1>
          <h4>MEARN Stack Developer</h4>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
