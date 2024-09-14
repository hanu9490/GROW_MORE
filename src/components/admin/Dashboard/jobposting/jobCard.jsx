import React, { useState } from "react";
import "./AdminJobCard.css";
import { useDispatch, useSelector } from "react-redux";
import { JobService } from "../../../../services/JobPostingService";
import { getJobPostingSuccess } from "../../../../redux-store/slices/JobPostingSlice";
import EditJobModal from "./EditJobModal"; // Import the modal component

const JobCard = ({ title, overview, active, id }) => {
  const dispatch = useDispatch();
  const { jobPostings, loading } = useSelector((state) => state?.job_posting);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const deleteJobHandler = async () => {
    let payload = {
      id: id,
    };
    const response = await JobService.DeleteJob({
      payload,
    });
    if (response.status === 200) {
      const res = await JobService.GetJob();
      if (res.status === 200) {
        dispatch(getJobPostingSuccess(res.data));
      }
    }
  };

  const handleEditOpen = () => {
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
  };

  const handleSave = async (updatedJob) => {
    // Handle save logic, such as updating the job details in your state or sending it to the backend
    console.log("Updated Job:", updatedJob);

    // Simulating API call to update job details
    const response = await JobService.EditJob(updatedJob);
    if (response.status === 200) {
      const res = await JobService.GetJob();
      if (res.status === 200) {
        dispatch(getJobPostingSuccess(res.data));
      }
    }

    handleEditClose();
  };

  return (
    <div className="job-card">
      <h2 className="job-title">{title}</h2>
      <p className="job-overview">
        {overview &&
          overview.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        <p className="job-status">{active ? "Active" : "Inactive"}</p>
      </p>

      <div className="button-con">
        <button className="apply-button" onClick={handleEditOpen}>
          Edit
        </button>
        <button className="apply-button" onClick={deleteJobHandler}>
          Delete
        </button>
      </div>

      <EditJobModal
        open={editModalOpen}
        onClose={handleEditClose}
        onSave={handleSave}
        job={{ title, overview, active, id }}
      />
    </div>
  );
};

export default JobCard;
