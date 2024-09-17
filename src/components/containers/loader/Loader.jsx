import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  const loaderStyle = {
    position: "fixed", // Fixes the loader to the viewport
    top: 0,
    left: 0,
    width: "100vw", // Full viewport width
    height: "100vh", // Full viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none", // Allows interaction with underlying elements
    zIndex: 9999, // Ensure the loader is on top, but you can adjust this or remove it
  };

  return (
    <div style={loaderStyle}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

export default Loader;
