import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import FeatureOfInternship from "./FeatureOfInternship";
import InternshipAccordion from "./InternshipAccordion";
// import { jobData } from "../../../utils/Utils";
import { useSelector, useDispatch } from "react-redux";
import { JobService } from "../../../services/JobPostingService";
import {
  setLoader,
  setJobs,
} from "../../../redux-store/slices/JobPostingSlice";
import Loader from "../loader/Loader";
const Internship = () => {
  const dispatch = useDispatch();
  const { alljobs, loading } = useSelector((state) => state?.job_posting);

  useEffect(() => {
    const fetchJobData = async () => {
      dispatch(setLoader(true));
      const response = await JobService.GetJob();
      if (response.status === 200) {
        dispatch(setJobs(response.data));
      }
    };
    fetchJobData();
  }, []);
  return (
    <div className="internship-container">
      <div className="intership-text-fields">
        <div className="heading1">Internships</div>
        <div className="heading2">Our Internships</div>
        <div className="heading3">
          Our internships are available in a range of fields, including Web
          Development, Machine Learning, Data Science, and more. Interns will
          have the chance to work on real-world projects, collaborate with
          teams, and gain valuable insights into their respective industries.
        </div>
      </div>
      <div className="job-card-container">
        {alljobs?.length > 0 &&
          alljobs.map((item, index) => (
            <JobCard
              key={index}
              title={item.title}
              overview={item.overview}
              active={item.active}
            />
          ))}

        {loading && <Loader />}
      </div>
      <div>
        <FeatureOfInternship />
        <InternshipAccordion />
      </div>
    </div>
  );
};

export default Internship;
