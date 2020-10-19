import React from "react";
import image from "../assets/mst_logo.gif";

function Banner() {
  return (
    <div>
      <div style={{ width: "100%", background: "#0f6014" }}>
        <img src={image} align="center" alt="Logo" />
      </div>
      <div style={{ width: "100%", height: "10px", background: "#dfc463" }}></div>
    </div>
  );
}

export default Banner;
