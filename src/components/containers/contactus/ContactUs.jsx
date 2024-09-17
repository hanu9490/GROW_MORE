import React, { useState } from "react";
import { contactUsIcons } from "../../../assets/icons/icons";
import "./ContactUS.css";
import { ContactService } from "../../../services/ContactService";
import {
  setLoading,
  setError,
  setCreatedContact,
} from "../../../redux-store/slices/ContactSlice";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../toast/Toast";

const ContactUs = () => {
  const dispatch = useDispatch();
  const { loading, createdContact, error } = useSelector(
    (state) => state.contact
  );
  let contactState = useSelector((state) => state.contact);

  // State to manage form input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const [errors, setErrors] = useState({});
  const [successToast, setSuccessToast] = useState(false);

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
    if (!formData.query) {
      errors.query = "Message is required";
    }
    return errors;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setSuccessToast(false);
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    dispatch(setLoading(true));

    ContactService.CreateContactUs(formData)
      .then((response) => {
        if (response.status === 201) {
          dispatch(setCreatedContact(response.data));

          // Reset the form data
          setFormData({
            name: "",
            email: "",
            query: "",
          });
          setSuccessToast(true);
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
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
              name="query"
              value={formData.query}
              onChange={handleInputChange}
            />
            {errors.query && <p className="error">{errors.query}</p>}
          </div>
          <button className="submit-btn" type="submit">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      {successToast && <Toast msg={createdContact?.message} />}
      {error && <Toast msg={error} />}
    </div>
  );
};

export default ContactUs;
