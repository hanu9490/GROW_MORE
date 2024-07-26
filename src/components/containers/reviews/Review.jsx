import React from "react";
import "./Reviews.css";
import { testimonialsImg } from "../../../assets/icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Tester = ({text, name, position }) => {
  return (
      <div className="testimonial-content">
        <div className="testimonial-text">
          <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
          <p>{text}</p>
        </div>
        <div className="testimonial-author">
          <img
            src={testimonialsImg.hanuClientimg}
            alt={name}
            className="testimonial-image"
          />
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-position">{position}</p>
        </div>
      </div>
  );
};

export default Tester;
