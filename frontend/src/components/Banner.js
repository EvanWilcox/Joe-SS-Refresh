import React from "react";
import logo from "../assets/mst_logo.gif";
import refresh from "../assets/refresh.png";

function Banner() {
  return (
    <div>
      <div style={{ width: "100%", background: "#0f6014" }}>
        <img src={logo} align="center" alt="Logo" />
        <img
          src={refresh}
          align="center"
          alt="Logo"
          style={{ paddingLeft: "15px", paddingTop: "10px" }}
        />
      </div>
      <div style={{ width: "100%", height: "10px", background: "#dfc463" }}></div>
    </div>
  );
}

export default Banner;
