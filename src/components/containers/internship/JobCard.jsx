import React from "react";
import "./JobCard.css";
import { useNavigate } from "react-router-dom";

const JobCard = ({ title, overview, active }) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate(`/apply/${title.replace(/\s+/g, "-").toLowerCase()}`);
  };

  return (
    <div className="job-card">
      <h2 className="job-title">{title}</h2>
      <p className="job-overview">
        {overview &&
          overview.map((item) => {
            return <div key={item}>{item}</div>;
          })}
      </p>

      <div className="button-con">
        {active ? (
          <button className="apply-button" onClick={handleApplyClick}>
            Apply
          </button>
        ) : (
          <button className="closed-button" disabled>
            Closed
          </button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
