import React, { Component } from "react";
import { Icon, Progress, Panel } from "rsuite";

export class AcademicProgress extends Component {
  constructor(props) {
    super(props);

    this.state = { major: "Computer Science", creditsComplete: 112 };
  }

  render() {
    return (
      <Panel shaded bordered className="panel">
        <div style={{ height: "210px" }}>
          <div style={{ paddingBottom: "15px" }}>
            <Icon style={{ float: "left", paddingRight: "15px" }} icon="mortar-board" size="4x" />
            <h3>Academic Progress</h3>
            <p className="no-padding">Degree Audit Overview</p>
          </div>

          <div style={{ width: "60%", margin: "0 auto" }}>
            <div style={{ float: "left", paddingRight: "20px" }}>
              <Progress.Circle
                percent={Math.round((this.state.creditsComplete / 128) * 100 * 10) / 10}
                style={{ width: "120px" }}
                strokeColor="#78BE20"
              />
            </div>

            <div style={{ padding: "25px" }}>
              <p style={{ fontSize: "18px" }}>
                <strong>{this.state.major} Major</strong>
              </p>
              <h5 style={{ color: "#78BE20" }}>{this.state.creditsComplete} Satisfied</h5>
              <p>of 128 Credit Hours</p>
            </div>
          </div>
        </div>
      </Panel>
    );
  }
}

export default AcademicProgress;
