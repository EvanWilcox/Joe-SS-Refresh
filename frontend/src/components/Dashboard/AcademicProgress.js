import React, { Component } from "react";
import { Icon, Progress } from "rsuite";

export class AcademicProgress extends Component {
  constructor(props) {
    super(props);
    console.log("Hello");
  }

  render() {
    return (
      <div style={{ height: "247px" }}>
        <div style={{ paddingBottom: "15px" }}>
          <Icon style={{ float: "left", paddingRight: "15px" }} icon="mortar-board" size="4x" />
          <h3>Academic Progress</h3>
          <p class="no-padding">Degree Audit Overview</p>
        </div>
        <Progress.Circle percent={75} style={{ width: "120px" }} strokeColor="#78BE20" />
      </div>
    );
  }
}

export default AcademicProgress;
