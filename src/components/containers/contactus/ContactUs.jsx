import React from "react";
import { contactUsIcons } from "../../../assets/icons/icons";
import "./ContactUS.css";

const ContactUs = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to store form validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validate = () => {
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // If no errors, log the form data
      console.log("Form Data:", formData);

      // Optionally clear the form after submission
      setFormData({ name: "", email: "", message: "" });
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
