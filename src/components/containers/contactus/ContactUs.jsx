import React from "react";
import { contactUsIcons } from "../../../assets/icons/icons";
import { RiMessage2Line } from "react-icons/ri";
import "./ContactUS.css";

const ContactUs = () => {
  return (
    <div className="contactus-main-container">
      <div className="contact-us-container">
        <div className="contact-us-header">
          <img
            src={contactUsIcons.contactUs}
            alt="Contact Icon"
            className="contact-icon"
          />
          <span>CONTACT US</span>
        </div>
        <h1 className="main-heading">Let's Discuss Your Project</h1>
        <p className="description">
          Struggling with IT challenges?{" "}
          <span className="highlight">GrowMore</span> offers a helping hand!
          Schedule a free consultation to discuss your unique project needs. Our
          passionate team will collaborate with you to craft solutions that
          unlock your business potential.
        </p>
        <hr className="divider" />
        <div className="contact-info">
          <div className="phone">
            <img
              src={contactUsIcons.callService}
              alt="Phone Icon"
              className="phone-icon"
            />
            <div className="phone-inner-con">
              <span>Call Us At :</span>
              <span className="phone-number">+91-917-788-5911</span>
            </div>
          </div>
          <div className="social-media">
            <span>Follow Us On Social Media</span>
            <div className="social-icons">
              <img src={contactUsIcons.facebook} alt="Facebook" />
              <img src={contactUsIcons.twitter} alt="Twitter" />
              <img src={contactUsIcons.linkedin} alt="LinkedIn" />
              <img src={contactUsIcons.youtube} alt="YouTube" />
              <img src={contactUsIcons.facebook} alt="Facebook" />
            </div>
          </div>
        </div>
      </div>
      <div className="contactus-input-container">
        <h1 className="input-heading">Contact Form</h1>
        <input placeholder="Enter your Name" type="text" />
        <input placeholder="Enter your Email" type="email" />
        <textarea placeholder="Type Your Message Here"></textarea>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;
