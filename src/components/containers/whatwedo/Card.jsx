// import React from "react";
// import { BorderBeam } from "../../../magicui/BorderBeam";

// const Card = ({ image, link, paragraph, heading }) => {
//   const cardStyle = {
//     width: "100%",
//     border: "1px solid #ddd",
//     borderRadius: "5px",
//     padding: "0",
//     boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
//     textAlign: "left",
//     backgroundColor: "#fff",
//     height: "100%",
//     position: "relative", // Add relative positioning to enable absolute positioning of BorderBeam
//   };

//   const headingStyle = {
//     fontSize: "20px",
//     color: "#212ea0",
//     margin: "10px",
//     fontFamily: "Poppins-semi-bold",
//   };

//   const paragraphStyle = {
//     fontSize: "16px",
//     color: "#666",
//     margin: "10px",
//   };

//   const linkStyle = {
//     display: "inline-block",
//     color: "#212ea0",
//     textDecoration: "none",
//     margin: "10px",
//     fontSize: "14px",
//   };

//   const imageStyle = {
//     width: "100%",
//     height: "auto",
//     display: "block",
//   };

//   return (
//     <div
//       className="card-container relative h-auto w-full rounded-xl"
//       style={cardStyle}
//     >
//       {/* BorderBeam effect */}
//       <BorderBeam className="absolute inset-0 rounded-[inherit]" />

//       {/* Card Content */}
//       <img className="card-image" style={imageStyle} src={image} alt="Card" />
//       <h1 style={headingStyle}>{heading}</h1>
//       <p style={paragraphStyle}>{paragraph}</p>
//       <a style={linkStyle} href={link}>
//         Read More →
//       </a>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { BorderBeam } from "../../../magicui/BorderBeam";

const Card = ({ image, link, paragraph, heading }) => {
  const cardStyle = {
    width: "100%",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "0",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    backgroundColor: "#fff",
    position: "relative", // Add relative positioning to enable absolute positioning of BorderBeam
    height: "auto", // Adjust for responsive height
    maxWidth: "500px", // Optional max width for larger screens
    margin: "0 auto", // Center the card on larger screens
  };

  const headingStyle = {
    fontSize: "1.25rem", // Relative font size for better responsiveness
    color: "#212ea0",
    margin: "0.5rem",
    fontFamily: "Poppins-semi-bold",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    color: "#666",
    margin: "0.5rem",
  };

  const linkStyle = {
    display: "inline-block",
    color: "#212ea0",
    textDecoration: "none",
    margin: "0.5rem",
    fontSize: "0.875rem",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
  };

  const cardContainerClass = {
    className: "card-container relative h-auto w-full rounded-xl",
  };

  const borderBeamClass = {
    className: "absolute inset-0 rounded-[inherit]",
  };

  return (
    <div {...cardContainerClass} style={cardStyle}>
      {/* BorderBeam effect */}
      <BorderBeam {...borderBeamClass} />

      {/* Card Content */}
      <img className="card-image" style={imageStyle} src={image} alt="Card" />
      <h1 style={headingStyle}>{heading}</h1>
      <p style={paragraphStyle}>{paragraph}</p>
      <a style={linkStyle} href={link}>
        Read More →
      </a>
    </div>
  );
};

export default Card;
