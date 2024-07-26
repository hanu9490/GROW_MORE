import React from "react";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
const FeatureOfInternship = () => {
  const ItemDetails = [
    {
      title: "Verified Certificates",
      info: "Get Verified Certificates to prove your hard work!",
      logo: <DocumentScannerIcon color="primary"  sx={{ fontSize: 60 }} />,
    },
    {
      title: "Networking",
      info: "Tap into our network and increase your chances of placements.",
      logo: <Diversity2Icon color="primary"  sx={{ fontSize: 60 }} />,
    },
    {
      title: "Hands-on experience",
      info: "Gain practical experience by working on real-world projects.",
      logo: <VolunteerActivismIcon color="primary"  sx={{ fontSize: 60 }} />,
    },
    {
      title: "High Quality Content",
      info: "Great Content to prepare students for their future careers.",
      logo: <AutoAwesomeMotionIcon color="primary"  sx={{ fontSize: 60 }} />,
    },
  ];
  return (
    <div className="features-of-internship-container">
      <div className="h1">Features</div>
      <div className="h2">Features of internship</div>
      <div className="menu-items">
        {ItemDetails.map((item) => (
          <div className="item">
            <div className="icon">{item.logo}</div>
            <div className="heading1">{item.title}</div>
            <div className="heading2">{item.info}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureOfInternship;
