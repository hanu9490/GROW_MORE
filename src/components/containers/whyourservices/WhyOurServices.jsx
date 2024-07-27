import React from "react";
import { whyOurServicesIcons } from "../../../assets/icons/icons";
import ServicesMinicard from "./ServicesMinicard";
import "./WhyOurServices.css";

const minicardData = [
  {
    title: "Quality Comes First",
    img: whyOurServicesIcons.qualityFirst,
  },
  {
    title: "Flexible Time",
    img: whyOurServicesIcons.flexibleTime,
  },
  {
    title: "On-time Delivery",
    img: whyOurServicesIcons.ontimeDelivery,
  },
  {
    title: "Transparent Costs",
    img: whyOurServicesIcons.transparentCosts,
  },
  {
    title: "Quick Scale-up",
    img: whyOurServicesIcons.quickscaleUp,
  },
  {
    title: "Flexible Cooperation",
    img: whyOurServicesIcons.flexibleCooperation,
  },
];

const WhyOurServices = () => {
  return (
    <div className="our-services-container">
      <div className="our-services-inner">
        <div className="img-con">
          <img
            className="img1"
            src={whyOurServicesIcons.Rectangle17}
            alt="WhyourServices.png1"
          />
          <img
            className="img2"
            src={whyOurServicesIcons.Rectangle18}
            alt="WhyourServices.png2"
          />
        </div>
        <div className="why-our-services-text">
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
              <img src={whyOurServicesIcons.charmTick} alt="" />
              <p>Provide Responsive Web Design & Mobile Development.</p>
            </div>
            <div className="bottom-para-element">
              <img src={whyOurServicesIcons.charmTick} alt="" />
              <p>E-commerce Solutions & Online Stores</p>
            </div>
            <div className="bottom-para-element">
              <img src={whyOurServicesIcons.charmTick} alt="" />
              <p>User Experience (UX) & User Interface (UI) Design</p>
            </div>
            <div className="bottom-para-element">
              <img src={whyOurServicesIcons.charmTick} alt="" />
              <p>Data Science & Predictive Analytics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyOurServices;
