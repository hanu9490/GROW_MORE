import React from "react";
import JobCard from "./JobCard";
import FeatureOfInternship from "./FeatureOfInternship";
import InternshipAccordion from "./InternshipAccordion";
import { jobData } from "../../../utils/Utils";
import { useSelector } from "react-redux";
const Internship = () => {
  const { jobPostings, loading } = useSelector((state) => state?.job_posting);
  if (loading) {
    return <div>Loading...</div>;
  }

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
        {jobPostings?.map((item) => {
          return (
            <JobCard
              title={item.title}
              overview={item.overview}
              active={item.active}
            />
          );
        })}
      </div>
      <div>
        <FeatureOfInternship />
        <InternshipAccordion />
      </div>
    </div>
  );
};

export default Internship;
