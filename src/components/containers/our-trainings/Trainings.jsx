import React from "react";
import TrainingCard from "./TrainingCard";

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
    </div>
  );
};

export default Trainings;
