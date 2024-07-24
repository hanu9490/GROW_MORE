import React from "react";
import dark_arrow from "../../../assets/icons/heroSection/dark-arrow.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section nav-container" id="hero">
      <div className="hero-text">
        <h1>Transforming your Bussiness with Emerging Technoligies</h1>
        <p>
          Our team of experts will help you to achieve your business goals with
          the latest technologies
        </p>
        <button>
          Explore More
          <img src={dark_arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
