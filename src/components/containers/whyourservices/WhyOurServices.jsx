import React from "react";
import { icons } from "../../../assets/icons/icons";
import ServicesMinicard from "./ServicesMinicard";
import "./WhyOurServices.css";

const minicardData = [
  {
    title: "Quality Comes First",
    img: icons.qualityFirst,
  },
  {
    title: "Flexible Time",
    img: icons.flexibleTime,
  },
  {
    title: "On-time Delivery",
    img: icons.ontimeDelivery,
  },
  {
    title: "Transparent Costs",
    img: icons.transparentCosts,
  },
  {
    title: "Quick Scale-up",
    img: icons.quickscaleUp,
  },
  {
    title: "Flexible Cooperation",
    img: icons.flexibleCooperation,
  },
];

const WhyOurServices = () => {
  return (
    <div className="our-services-container">
      <div className="our-services-inner">
        <div className="img-con">
          <img
            className="img1"
            src={icons.Rectangle17}
            alt="WhyourServices.png1"
          />
          <img
            className="img2"
            src={icons.Rectangle18}
            alt="WhyourServices.png2"
          />
        </div>
        <div className="text-con">
          <h1>Why Our Services are Better than Others ?</h1>
          <p>
            Our objective is to offer a high-quality service and a dependable
            source of income to our investors while simultaneously minimizing
            any potential risks and automating and simplifying the
            relationships.
          </p>
          <div className="minicards-container">
            {minicardData.map((data, index) => {
              return <ServicesMinicard key={index} data={data} />;
            })}
          </div>
          <div className="services-bottom-container">
            <div className="bottom-para-element">
              <img src={icons.charmTick} alt="" />
              <p>Provide Responsive Web Design & Mobile Development</p>
            </div>
            <div className="bottom-para-element">
              <img src={icons.charmTick} alt="" />
              <p>E-commerce Solutions & Online Stores</p>
            </div>
            <div className="bottom-para-element">
              <img src={icons.charmTick} alt="" />
              <p>User Experience (UX) & User Interface (UI) Design</p>
            </div>
            <div className="bottom-para-element">
              <img src={icons.charmTick} alt="" />
              <p>Data Science & Predictive Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyOurServices;
