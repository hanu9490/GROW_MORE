import React from "react";
import "./ServicesMinicard.css";

const ServicesMinicard = ({ data }) => {
  const { title, img } = data;
  return (
    <div className="why-our-services-minicard">
      <img src={img} alt="WhyourServices.png3" />
      <h2 className="minicard-title">{title}</h2>
    </div>
  );
};

export default ServicesMinicard;
