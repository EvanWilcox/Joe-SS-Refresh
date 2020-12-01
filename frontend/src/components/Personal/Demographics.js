import React, { Component } from "react";
import { Panel, Icon } from "rsuite";

class Demographics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentID: "12345678",
      gender: "Male",
      dateOfBirth: "05/11/1998",
      birthCountry: "United States of America",
      birthState: "Missouri",
      maritalStatus: "Single",
      militaryStatus: "Not Applicable",
      citizenshipStatus: "Native",
      citizenshipCountry: "United States of America",
      visaPermitType: "Not Applicable",
      visaOrPermit: "Not Applicable",
      visaPermitCountry: "Not Applicable",
    };
  }

  render() {
    const { studentID, gender, dateOfBirth, birthCountry, birthState, maritalStatus, militaryStatus } = this.state;
    const { citizenshipStatus, citizenshipCountry, visaPermitType, visaOrPermit, visaPermitCountry } = this.state;

    return (
      <div style={{ width: "100%" }}>
        <div style={{ width: "400px", float: "left" }}>
          <Panel shaded bordered className="panel">
            <h4 style={{ paddingBottom: "10px" }}>General</h4>
            <div style={{ width: "100%" }}>
              <div style={{ width: "50%", float: "left" }}>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  <strong>Student ID</strong>
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  <strong>Gender</strong>
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  <strong>Date of Birth</strong>
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  <strong>Birth Country</strong>
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  <strong>Birth State</strong>
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  <strong>Marital Status</strong>
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  <strong>Military Status</strong>
                </p>
              </div>
              <div style={{ width: "50%", float: "left" }}>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  {studentID}
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  {gender}
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  {dateOfBirth}
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  {birthCountry}
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  {birthState}
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  {maritalStatus}
                </p>
                <p className="no-padding" style={{ paddingBottom: "25px" }}>
                  {militaryStatus}
                </p>
              </div>
            </div>

            <Panel bordered>
              <Icon icon="exclamation-triangle" style={{ color: "#E87722", paddingRight: "5px" }} />
              Contact the registrar’s office to change the above info.
            </Panel>
          </Panel>
        </div>
        <div style={{ width: "400px", float: "left" }}>
          <Panel shaded bordered className="panel">
            <h4 style={{ paddingBottom: "10px" }}>Citizenship</h4>
            <div style={{ width: "100%" }}>
              <div style={{ width: "50%", float: "left" }}>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  <strong>Status</strong>
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  <strong>Country</strong>
                </p>
              </div>
              <div style={{ width: "50%", float: "left" }}>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  {citizenshipStatus}
                </p>
                <p className="no-padding" style={{ paddingBottom: "11px" }}>
                  {citizenshipCountry}
                </p>
              </div>
            </div>

            <h4 style={{ paddingBottom: "10px" }}>Visa/Permit</h4>
            <div style={{ width: "100%" }}>
              <div style={{ width: "50%", float: "left" }}>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  <strong>Type</strong>
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  <strong>Visa/Permit</strong>
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  <strong>Country</strong>
                </p>
              </div>
              <div style={{ width: "50%", float: "left" }}>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  {visaPermitType}
                </p>
                <p className="no-padding" style={{ paddingBottom: "5px" }}>
                  {visaOrPermit}
                </p>
                <p className="no-padding" style={{ paddingBottom: "25px" }}>
                  {visaPermitCountry}
                </p>
              </div>
            </div>

            <Panel bordered>
              <Icon icon="exclamation-triangle" style={{ color: "#E87722", paddingRight: "5px" }} />
              Contact the registrar’s office to change the above info.
            </Panel>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Demographics;
