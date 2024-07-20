import React from "react";
import { whyChooseusIcons } from "../../../assets/icons/icons";
import "./WhyChooseusMinicard.css"

const WhyChooseusMinicard = ({icon, title, description}) => {
  return (
    <div className="why-chooseus-minicard-container">
      <img src={icon} alt="Client-Centric" className="icon" />
      <div className="text-content">
        <h3 className="title">{title}</h3>
        <p className="description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseusMinicard;
