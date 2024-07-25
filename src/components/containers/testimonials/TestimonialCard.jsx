import React from "react";

import { testimonialsImg } from "../../../assets/icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const TestimonialCard = () => {
  return (
    <div className="testimonials-item">
        <div className="info">
          <img
            style={{ width: "100px" }}
            src={testimonialsImg.hanuClientimg}
            alt=""
          />
          <div className="text-box">
            <h3 className="name">Hanumanth</h3>
            <span className="job">Web Developer</span>
          </div>
        </div>
        <p className="testimonials-discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ad
          assumenda beatae at, iure perferendis sunt facere. Qui, fugiat? Quod
          sed minus
        </p>
        <div className="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
    </div>
  );
};

export default TestimonialCard;
