import React, { Component } from "react";
import { Panel } from "rsuite";

export class CourseCredits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          modelNumber: "1",
          status: "Posted",
          creditSourceType: "Manual",
          institution: "Missouri S&T",
          sourceInstitution: "Missouri S&T",
          program: "Undergraduate College of Arts & Sci",
          plan: "Computer Science BS",
          credits: [
            {
              transferTerm: "Fall 2016",
              externalTerm: "APR2016",
              catalogNumber: "MATH 1140",
              description: "COLLEGE ALGEBRA",
              units: "3.00",
              grade: "EX",
              status: "Posted",
              equivalentCourse: "MATH 1140",
              equivalentUnits: "3.00",
              equivalentGrade: "EX",
            },
            {
              transferTerm: "Fall 2016",
              externalTerm: "APR2016",
              catalogNumber: "MATH 1160",
              description: "TRIGONOMETRY",
              units: "2.00",
              grade: "EX",
              status: "Posted",
              equivalentCourse: "MATH 1160",
              equivalentUnits: "2.00",
              equivalentGrade: "EX",
            },
          ],
        },
        {
          modelNumber: "2",
          status: "Posted",
          creditSourceType: "Manual",
          institution: "Missouri S&T",
          sourceInstitution: "Advanced Placement",
          program: "Undergraduate College of Arts & Sci",
          plan: "Computer Science BS",
          credits: [
            {
              transferTerm: "Fall 2016",
              externalTerm: "FS2016",
              catalogNumber: "ENGL 1120",
              description: "Exposition And Argu.",
              units: "3.00",
              grade: "EX",
              status: "Posted",
              equivalentCourse: "ENGLISH 1120",
              equivalentUnits: "3.00",
              equivalentGrade: "EX",
            },
          ],
        },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Panel shaded bordered className="panel">
        <h4>Course Credits</h4>
        {data.map((item, key) => (
          <Panel key={key} bordered style={{ marginTop: "10px" }}>
            <div style={{ display: "inline", width: "100%" }}>
              <div style={{ float: "left", width: "10%" }}>
                <strong>Model Nbr, Status</strong>
                <br />
                <strong>Credit Source Type</strong>
              </div>
              <div style={{ float: "left", width: "20%" }}>
                <p>
                  {item.modelNumber}, {item.status}
                  <br />
                  {item.creditSourceType}
                </p>
              </div>
              <div style={{ float: "left", width: "10%" }}>
                <strong>Institution</strong>
                <br />
                <strong>Source Institution</strong>
              </div>
              <div style={{ float: "left", width: "20%" }}>
                <p>
                  {item.institution}
                  <br />
                  {item.sourceInstitution}
                </p>
              </div>
              <div style={{ float: "left", width: "10%" }}>
                <strong>Program</strong>
                <br />
                <strong>Plan</strong>
              </div>
              <div style={{ float: "left", width: "30%", marginBottom: "20px" }}>
                {item.program}
                <br />
                {item.plan}
              </div>
            </div>

            <div className="header-bar" style={{ paddingRight: "25px", paddingLeft: "15px", marginTop: "40px" }}>
              <div style={{ width: "10%", minWidth: "90px", textAlign: "left" }}>
                <p className="header-bar-text">Transfer Term</p>
              </div>
              <div style={{ width: "10%", minWidth: "fit-content(100%)", textAlign: "left" }}>
                <p className="header-bar-text">External Term</p>
              </div>
              <div style={{ width: "10%", minWidth: "fit-content(100%)", textAlign: "left" }}>
                <p className="header-bar-text">Catalog Nbr</p>
              </div>
              <div style={{ width: "15%", minWidth: "fit-content(100%)", textAlign: "left" }}>
                <p className="header-bar-text">Description</p>
              </div>
              <div style={{ width: "7.5%", minWidth: "fit-content(100%)", textAlign: "left" }}>
                <p className="header-bar-text">Units</p>
              </div>
              <div style={{ width: "7.5%", minWidth: "fit-content(100%)", textAlign: "left" }}>
                <p className="header-bar-text">Grade</p>
              </div>
              <div style={{ width: "10%", minWidth: "fit-content(100%)", textAlign: "left" }}>
                <p className="header-bar-text">Status</p>
              </div>
              <div style={{ width: "15%", minWidth: "fit-content(100%)", textAlign: "left" }}>
                <p className="header-bar-text">Equivalent Course</p>
              </div>
              <div style={{ width: "7.5%", minWidth: "fit-content(100%)", textAlign: "left" }}>
                <p className="header-bar-text">Units</p>
              </div>
              <div style={{ width: "7.5%", minWidth: "fit-content(100%)", textAlign: "left" }}>
                <p className="header-bar-text">Grade</p>
              </div>
            </div>

            {item.credits.map((credit, key) => (
              <Panel key={key} bordered style={{ marginTop: "10px" }}>
                <div style={{ width: "100%", display: "flex", textAlign: "left" }}>
                  <div style={{ width: "10%" }}>
                    <strong>{credit.transferTerm}</strong>
                  </div>
                  <div style={{ width: "10%", minWidth: "fit-content(100%)" }}>
                    <strong>{credit.externalTerm}</strong>
                  </div>
                  <div style={{ width: "10%" }}>
                    <strong>{credit.catalogNumber}</strong>
                  </div>
                  <div style={{ width: "15%" }}>
                    <strong>{credit.description}</strong>
                  </div>
                  <div style={{ width: "7.5%" }}>
                    <strong>{credit.units}</strong>
                  </div>
                  <div style={{ width: "7.5%" }}>
                    <strong>{credit.grade}</strong>
                  </div>
                  <div style={{ width: "10%" }}>
                    <strong>{credit.status}</strong>
                  </div>
                  <div style={{ width: "15%" }}>
                    <strong>{credit.equivalentCourse}</strong>
                  </div>
                  <div style={{ width: "7.5%" }}>
                    <strong>{credit.equivalentUnits}</strong>
                  </div>
                  <div style={{ width: "7.5%" }}>
                    <strong>{credit.equivalentGrade}</strong>
                  </div>
                </div>
              </Panel>
            ))}
          </Panel>
        ))}
      </Panel>
    );
  }
}

export default CourseCredits;
