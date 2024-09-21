import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ApplyJob.css";
import { JobApplicationService } from "../../../services/JobApplicationSer";
import {
  setLoader,
  fetchJobApplicationsFailure,
} from "../../../redux-store/slices/JobApplicationSlice";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../toast/Toast";
import Loader from "../loader/Loader";

const ApplyJob = () => {
  const { jobTitle } = useParams();
  const dispatch = useDispatch();
  let { loading, error } = useSelector((state) => state.job_application);

  const [formData, setFormData] = useState({
    jobTitle: jobTitle,
    fullName: "",
    email: "",
    phone: "",
    education: "",
    percentage: "",
    totalExp: "",
    resume: null,
    coverLetter: "",
    terms: false,
  });

  const [jobApplySuccess, setJobApplySuccess] = useState(false);
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
  const ApplyJobAPI = async (payload) => {
    setJobApplySuccess(false);
    try {
      dispatch(setLoader(true));
      const response = await JobApplicationService.ApplyForJob(payload);
      if (response.status === 201) {
        // dispatch(fetchJobApplicationsSuccess(response.data));
        dispatch(setLoader(false));
        setJobApplySuccess(true);
      } else {
        dispatch(fetchJobApplicationsFailure(response.data));
      }
    } catch (error) {
      dispatch(fetchJobApplicationsFailure(error.message));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const data = new FormData();
    data.append("jobTitle", formData.jobTitle);
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("highestEducation", formData.education);
    data.append("percentage", formData.percentage);
    data.append("totalExp", formData.totalExp || "");
    data.append("coverLetter", formData.coverLetter);
    data.append("resume", formData.resume);

    // Call the API
    await ApplyJobAPI(data);

    jobApplySuccess &&
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        education: "",
        percentage: "",
        resume: null,
        coverLetter: "",
        totalExp: "",
        terms: false,
      });
  };

  return (
    <div className="apply-screen">
      <h1>Apply for {jobTitle}</h1>
      <form className="apply-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
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
          <label htmlFor="totalExp">Total Experience (in years)</label>
          <input
            type="number"
            id="totalExp"
            name="totalExp"
            value={formData.totalExp}
            step="0.1"
            min="0"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleChange}
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

      {jobApplySuccess && (
        <Toast msg="Job application submitted successfully" />
      )}
      {loading && <Loader />}
      {error && <Toast msg={error.error} />}
    </div>
  );
};

export default ApplyJob;
