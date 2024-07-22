import React from "react";
import Card from "../../common/Card";
import WebDevCardCoverImage from '../../../assets/icons/whatwedoIcons/web-development.png';
import DataAnalysisCardCoverImage from '../../../assets/icons/whatwedoIcons/data-analysis.png';

const WhatWeDo = () => {
  const cardData = [
    {
        image: WebDevCardCoverImage,
        heading: "Card Heading",
        paragraph: "This is some information about the card. It is very informative and interesting.",
        link: "#"
    },
    {
        image: DataAnalysisCardCoverImage,
        heading: "Card Heading",
        paragraph: "This is some information about the card. It is very informative and interesting.",
        link: "#"
    },
    {
        image: WebDevCardCoverImage,
        heading: "Card Heading",
        paragraph: "This is some information about the card. It is very informative and interesting.",
        link: "#"
    },
    {
        image: DataAnalysisCardCoverImage,
        heading: "Card Heading",
        paragraph: "This is some information about the card. It is very informative and interesting.",
        link: "#"
    },
    {
        image: WebDevCardCoverImage,
        heading: "Card Heading",
        paragraph: "This is some information about the card. It is very informative and interesting.",
        link: "#"
    },
    {
        image: DataAnalysisCardCoverImage,
        heading: "Card Heading",
        paragraph: "This is some information about the card. It is very informative and interesting.",
        link: "#"
    }
];
  return (
    <>
    <div className="what-we-do-card-heading-container">
        <p className="what-we-do-card-heading1">WHAT WE DO</p>
        <div className="what-we-do-card-heading2">We Offer Top-Notch Services</div>
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



