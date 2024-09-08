import React, { useState } from "react";
import emailjs from "emailjs-com";
import { contactUsIcons } from "../../../assets/icons/icons";
import "./ContactUS.css";

const ContactUs = () => {
  // State to manage form input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form validation
  const validate = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Send email via emailjs
      emailjs
        .send(
          "buehjyl", // Replace with your service ID
          "j7s28fh", // Replace with your template ID
          formData,
          "bN1KiPV45vYoY_gvHd74Q" // Replace with your user ID
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
        })
        .catch((err) => {
          console.error("FAILED...", err);
        });

      // Clear the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="contactus-main-container" id="contact">
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
            </div>
          </div>
        </div>
      </div>
      <div className="contactus-input-container">
        <h1 className="input-heading">Contact Form</h1>
        <form onSubmit={handleSubmit} className="apply-form">
          <div className="form-group">
            <input
              placeholder="Enter your Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <input
              placeholder="Enter your Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <textarea
              placeholder="Type Your Message Here"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
          {isSubmitted && (
            <p className="success-message">Form submitted successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
