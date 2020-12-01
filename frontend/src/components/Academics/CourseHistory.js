import React, { Component } from "react";
import { Panel, Icon } from "rsuite";

export class CourseHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: [
        {
          status: "complete",
          grade: "A",
          units: "3.00",
          term: "2016 Fall Semester",
          course: "COMP SCI 1570",
          description: "Intro to Programming",
        },
        {
          status: "complete",
          grade: "A",
          units: "3.00",
          term: "2016 Fall Semester",
          course: "COMP SCI 1570",
          description: "Intro to Programming",
        },
        {
          status: "in-progress",
          grade: "A",
          units: "3.00",
          term: "2016 Fall Semester",
          course: "COMP SCI 1570",
          description: "Intro to Programming",
        },
      ],
    };
  }

  render() {
    const { classes } = this.state;

    return (
      <Panel shaded bordered className="panel">
        <div className="header-bar">
          <div style={{ textAlign: "left", marginLeft: "1%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Status</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "2%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Grade</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "2%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Units</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "3%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Term</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "9.5%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Course</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "8.6%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Description</strong>
            </p>
          </div>
        </div>
        <div style={{ maxHeight: 690, width: "100%", overflow: "auto" }}>
          {classes.map((item, key) => (
            <Panel key={key} bordered style={{ margin: "5px 0px", padding: "0px", width: "99%" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                }}
              >
                <div style={{ width: "5%", textAlign: "left" }}>
                  <Icon
                    icon="circle"
                    style={{ color: item.complete !== "complete" ? "#78BE20" : "yellow", paddingLeft: "10px" }}
                    size="lg"
                  ></Icon>
                </div>
                <div style={{ width: "4%", textAlign: "left" }}>
                  <strong>{item.grade}</strong>
                </div>
                <div style={{ width: "5%", textAlign: "left" }}>
                  <strong>{item.units}</strong>
                </div>
                <div style={{ width: "12%", textAlign: "left" }}>
                  <strong>{item.term}</strong>
                </div>
                <div style={{ width: "12%", textAlign: "left" }}>
                  <strong>{item.course}</strong>
                </div>
                <div style={{ width: "12%", textAlign: "left" }}>
                  <strong>{item.description}</strong>
                </div>
              </div>
            </Panel>
          ))}
        </div>
      </Panel>
    );
  }
}

export default CourseHistory;
