import React from "react";
import "./JobCard.css";

const JobCard = ({title, overview, active}) => {
  return (
    <div className="job-card">
      <h2 className="job-title">{title}</h2>
      <p className="job-overview">
        {
            overview &&
            overview.map((item)=>{
                return(
                    <div>{item}</div>
                )
            })
        }
      </p>
      <div className="button-con">
      <button className="apply-button" disabled={active}>Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
