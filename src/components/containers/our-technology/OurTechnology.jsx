import React from "react";
import "./OurTechnology.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const OurTechnology = () => {
  return (
    <div className="our-technology-container">
      <div className="our-technology-left">
        <h4>Nationwide Service, Local Expertise</h4>
        <h1>
          Our technology allows you to offer the latest software to your
          possible customers!
        </h1>
        <button className="cta-button">
          More About Us <span>→</span>
        </button>
      </div>
      <div className="our-technology-right">
        <p>
          Improve efficiency, leverage tech, and provide better customer
          experiences with the modern technology services available all over the
          world. Our skilled personnel, utilizing the latest processing
          software, combined with decades of experience.
        </p>
        <div className="features">
          <div className="features-con">
            <p>
              <FontAwesomeIcon className="tick-icon" icon={faCheck} />
              <span>Eliminate Repeat Entry</span>
            </p>
            <p>
              <FontAwesomeIcon className="tick-icon" icon={faCheck} /> Simplify
              Communication
            </p>
          </div>
          <div className="features-con">
            <p>
              <FontAwesomeIcon className="tick-icon" icon={faCheck} /> Drive
              Business Process
            </p>
            <p>
              <FontAwesomeIcon className="tick-icon" icon={faCheck} /> Speed Up
              Transactions
            </p>
          </div>
          <div className="features-con">
            <p>
              <FontAwesomeIcon className="tick-icon" icon={faCheck} /> Structure
              Data & Docs
            </p>
            <div className="feature-con">
              <p>
                <FontAwesomeIcon className="tick-icon" icon={faCheck} />
                Automate Workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTechnology;
