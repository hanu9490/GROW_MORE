import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import JobCard from "./jobCard";
import { JobService } from "../../../../services/JobPostingService";
import { getJobPostingSuccess } from "../../../../redux-store/slices/JobPostingSlice";
import { checkAuth, logout } from "../../../../utils/JwtAuth";

import "./AdminJobCard.css";
const JobListingScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await checkAuth();
      } catch (error) {
        console.error("Authentication failed:", error);
        logout();
      }
    };

    verifyAuth();
  }, []);
  const { jobPostings, loading } = useSelector((state) => state?.job_posting);

  useEffect(() => {
    const getJobList = async () => {
      const response = await JobService.GetJob();
      if (response.status === 200) {
        dispatch(getJobPostingSuccess(response.data));
      }
    };
    getJobList();
  }, [dispatch]);

  return (
    <div className="admin-job-card-container">
      {jobPostings &&
        jobPostings?.map((job) => {
          return (
            <JobCard
              key={job.id}
              title={job.title}
              overview={job.overview}
              active={job.active}
              id={job._id}
            />
          );
        })}
      {loading && <h1>Loading...</h1>}
    </div>
  );
};

export default JobListingScreen;
