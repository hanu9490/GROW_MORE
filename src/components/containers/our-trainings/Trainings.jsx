import React from "react";
import TrainingCard from "./TrainingCard";
import SoftwareCoachingCard from "./SoftwareCoachingCard";

const Trainings = () => {
  return (
    <div
      style={{
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Our Trainings</h1>
      <TrainingCard />
      <h1>Software Coaching</h1>
      <SoftwareCoachingCard />
    </div>
  );
};

export default Trainings;
