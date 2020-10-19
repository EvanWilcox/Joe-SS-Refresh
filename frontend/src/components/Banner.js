import React from "react";
import image from "../assets/mst_logo.gif";

function Banner() {
  return (
    <div style={{ width: "100%", background: "#0f6014" }}>
      <img src={image} align="center" alt="Logo" />
    </div>
  );
}

export default Banner;
