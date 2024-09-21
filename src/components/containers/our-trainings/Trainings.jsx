import React from "react";
import TrainingCard from "./TrainingCard";
import SoftwareCoachingCard from "./SoftwareCoachingCard";
import { SoftwareIconsCloud } from "./SoftwareIconCloud";

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
      <TrainingCard />
      <SoftwareCoachingCard />
      <SoftwareIconsCloud />
    </div>
  );
};

export default Trainings;
