import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import JobCard from "./jobCard";
import { JobService } from "../../../../services/JobPostingService";
import {
  setLoader,
  setJobs,
} from "../../../../redux-store/slices/JobPostingSlice";
import { checkAuth, logout } from "../../../../utils/JwtAuth";

import "./AdminJobCard.css";
import Loader from "../../../containers/loader/Loader";
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
  const { alljobs, loading } = useSelector((state) => state?.job_posting);

  useEffect(() => {
    const getJobList = async () => {
      dispatch(setLoader(true));
      const response = await JobService.GetJob();
      if (response.status === 200) {
        dispatch(setJobs(response.data));
      }
    };
    getJobList();
  }, [dispatch]);

  return (
    <div className="admin-job-card-container">
      {alljobs?.length > 0 &&
        alljobs?.map((job) => {
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
      {loading && <Loader />}
    </div>
  );
};

export default JobListingScreen;
