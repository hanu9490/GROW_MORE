import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import FeatureOfInternship from "./FeatureOfInternship";
import InternshipAccordion from "./InternshipAccordion";
// import { jobData } from "../../../utils/Utils";
import { useSelector, useDispatch } from "react-redux";
import { JobService } from "../../../services/JobPostingService";
import { setLoading } from "../../../redux-store/slices/ContactSlice";
import Loader from "../loader/Loader";
const Internship = () => {
  const dispatch = useDispatch();
  const [jobData, setJobData] = useState([]);
  const { loading } = useSelector((state) => state?.job_posting);

  useEffect(() => {
    const fetchJobData = async () => {
      dispatch(setLoading(true));
      const response = await JobService.GetJob();
      if (response.status === 200) {
        setJobData(response.data);
      }
    };
    fetchJobData();
  }, []);
  console.log(loading);
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
        {jobData.length > 0 &&
          jobData?.map((item) => {
            return (
              <JobCard
                title={item.title}
                overview={item.overview}
                active={item.active}
              />
            );
          })}
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
