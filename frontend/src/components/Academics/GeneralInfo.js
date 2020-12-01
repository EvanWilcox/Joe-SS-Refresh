import React, { Component } from "react";
import { Icon, Panel } from "rsuite";

export class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      advisor: "Clayton Price",
      departmentChair: "Dr. Bruce McMillin",
      summerEnrollmentDate: "April 1, 2021",
      fallEnrollmentDate: "April 1, 2021",
    };
  }

  render() {
    const { advisor, departmentChair, summerEnrollmentDate, fallEnrollmentDate } = this.state;

    return (
      <Panel shaded bordered className="panel">
        <div style={{ paddingBottom: "15px" }}>
          <Icon style={{ float: "left", paddingRight: "15px" }} icon="info" size="4x" />
          <h3>General Info</h3>
          <p className="no-padding">General Info</p>
        </div>
        <div>
          <Panel bordered className="">
            <div style={{ width: "100%" }}>
              <div style={{ width: "50%", float: "left" }}>
                <p className="no-padding">
                  <strong>Advisor</strong>
                </p>
                <p className="no-padding">
                  <strong>Department Chair</strong>
                </p>
                <p className="no-padding">
                  <strong>Enrollment Date (Summer)</strong>
                </p>
                <p className="no-padding">
                  <strong>Enrollment Date (Fall)</strong>
                </p>
              </div>
              <div>
                <p className="no-padding">{advisor}</p>
                <p className="no-padding">{departmentChair}</p>
                <p className="no-padding">{summerEnrollmentDate}</p>
                <p className="no-padding">{fallEnrollmentDate}</p>
              </div>
            </div>
          </Panel>
        </div>
      </Panel>
    );
  }
}

export default GeneralInfo;
