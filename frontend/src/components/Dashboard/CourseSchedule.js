import React, { Component } from "react";
import { Icon, Panel, Button } from "rsuite";

export class CourseSchedule extends Component {
  constructor(props) {
    super(props);

    // Replace with pull from API
    this.state = {
      data: [
        {
          class: "COMP SCI 3200 - 101",
          code: "LEC 70537",
          title: "Intro Numerical Methods",
          days: "Tues, Thurs",
          time: "9:30AM - 10:45AM",
          location: "Computer Science 120",
        },
        {
          class: "COMP SCI 4096 - 101",
          code: "LEC 70370",
          title: "Software Syst Development",
          days: "Wed",
          time: "4:00PM - 6:30PM",
          location: "Computer Science 120",
        },
        {
          class: "COMP SCI 5001 - 103",
          code: "LEC 71824",
          title: "Intro to AR/VR",
          days: "Tues, Thurs",
          time: "11:00AM - 12:15PM",
          location: "Arranged",
        },
        {
          class: "COMP SCI 5402 - 102",
          code: "LEC 72814",
          title: "Intro to Data Mining",
          days: "Mon, Wed, Fri",
          time: "1:00PM - 1:50PM",
          location: "Arranged",
        },
        {
          class: "COMP SCI 4610 - 101",
          code: "LEC 69420",
          title: "Intro to Cyber Security",
          days: "Tues, Thurs",
          time: "2:00PM - 3:15PM",
          location: "Arranged",
        },
      ],
    };
  }

  render() {
    const { data } = this.state;
    const { height } = this.props;

    return (
      <Panel shaded bordered className="panel">
        <div>
          <div style={{ width: "70%", float: "left" }}>
            <Icon style={{ float: "left", paddingRight: "15px" }} icon="calendar" size="4x" />
            <h3>Course Schedule</h3>
            <p className="no-padding">Fall 2020</p>
          </div>
          <div>
            <Button
              appearance="primary"
              style={{ display: "block", width: "20%", minWidth: "120px", marginBottom: "5px", maxWidth: "120px" }}
              href="#"
            >
              <Icon icon="plus" style={{ color: "#78BE20", paddingRight: "5px" }} />
              Add to gCal
            </Button>
            <Button
              appearance="primary"
              style={{ display: "block", width: "20%", minWidth: "120px", maxWidth: "120px" }}
              href="#"
            >
              <Icon icon="plus" style={{ color: "#78BE20", paddingRight: "5px" }} />
              Add to iCal
            </Button>
          </div>
        </div>

        <div style={{ height: height, width: "100%", overflow: "auto" }}>
          {data.map((item, key) => (
            <Panel key={key} bordered className="class">
              <div style={{ width: "100%" }}>
                <div style={{ width: "50%", float: "left" }}>
                  <h5>{item.class}</h5>
                  <p className="no-padding">({item.code})</p>
                  <p className="no-padding">{item.title}</p>
                </div>
                <div>
                  <p className="no-padding">{item.days}</p>
                  <p className="no-padding">{item.time}</p>
                  <p className="no-padding">{item.location}</p>
                </div>
              </div>
            </Panel>
          ))}
        </div>
      </Panel>
    );
  }
}

export default CourseSchedule;
