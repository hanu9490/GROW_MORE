import React from "react";
import Card from "./Card";
import WebDevCardCoverImage from "../../../assets/icons/whatwedoIcons/web-development.png";
import DataAnalysisCardCoverImage from "../../../assets/icons/whatwedoIcons/data-analysis.png";
const WhatWeDo = () => {
  const cardData = [
    {
      image: WebDevCardCoverImage,
      heading: "App Development",
      paragraph:
        "We specialize in creating powerful and user-friendly mobile applications tailored to your business needs.",
      link: "services",
    },
    {
      image: DataAnalysisCardCoverImage,
      heading: "Data Science Solutions",
      paragraph:
        "Leverage data-driven insights with our advanced data science services to enhance decision-making and strategy.",
      link: "services",
    },
    {
      image: WebDevCardCoverImage,
      heading: "Website Development",
      paragraph:
        "We build responsive and visually appealing websites that deliver an excellent user experience across all devices.",
      link: "services",
    },
    {
      image: DataAnalysisCardCoverImage,
      heading: "Application Deployment",
      paragraph:
        "Our deployment services ensure that your applications are efficiently and securely launched into production environments.",
      link: "services",
    },
    {
      image: WebDevCardCoverImage,
      heading: "Application Maintenance",
      paragraph:
        "We offer reliable application maintenance services to keep your software updated, secure, and running smoothly.",
      link: "services",
    },
    {
      image: DataAnalysisCardCoverImage,
      heading: "IT Consultancy",
      paragraph:
        "Our expert IT consultants provide guidance on optimizing your technology infrastructure and achieving business goals.",
      link: "services",
    },
  ];

  return (
    <>
      <div className="what-we-do-card-heading-container">
        <p className="what-we-do-card-heading1">WHAT WE DO</p>
        <div className="what-we-do-card-heading2">
          We Offer Top-Notch Services
        </div>
      </div>
      <div className="what-we-do-card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            heading={card.heading}
            paragraph={card.paragraph}
            link={card.link}
          />
        ))}
      </div>
    </>
  );
};

export default WhatWeDo;
