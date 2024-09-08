import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ApplyJob.css";

const ApplyJob = () => {
  const { jobTitle } = useParams();

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    percentage: "",
    resume: null,
    coverLetter: "",
    terms: false,
  });

  // State for toast message visibility
  const [toastVisible, setToastVisible] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to localStorage
    localStorage.setItem("jobApplication", JSON.stringify(formData));

    // Show success toast
    setToastVisible(true);

    // Clear form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      education: "",
      percentage: "",
      resume: null,
      coverLetter: "",
      terms: false,
    });

    // Hide the toast after a few seconds
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <div className="apply-screen">
      <h1>Apply for {jobTitle}</h1>
      <form className="apply-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="education">Highest Education</label>
          <select
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="highschool">High School</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="percentage">Percentage/CGPA</label>
          <input
            type="number"
            id="percentage"
            name="percentage"
            value={formData.percentage}
            step="0.01"
            min="0"
            max="100"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows="5"
            value={formData.coverLetter}
            onChange={handleChange}
          />
        </div>
        <div className="form-group terms">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>
        <button type="submit">Submit Application</button>
      </form>

      {toastVisible && (
        <div className="toast">
          <p>Application successfully submitted!</p>
        </div>
      )}
    </div>
  );
};

export default ApplyJob;
