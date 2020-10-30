import React, { Component } from "react";
import { Icon, Panel } from "rsuite";

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
          class: "COMP SCI 3200 - 101",
          code: "LEC 70537",
          title: "Intro Numerical Methods",
          days: "Tues, Thurs",
          time: "9:30AM - 10:45AM",
          location: "Computer Science 120",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div style={{ paddingBottom: "15px" }}>
          <Icon style={{ float: "left", paddingRight: "15px" }} icon="calendar" size="4x" />
          <h3>Course Schedule</h3>
          <p class="no-padding">Fall 2020</p>
        </div>

        <div style={{ height: "400px", width: "100%", overflow: "auto" }}>
          {this.state.data.map((item) => (
            <Panel bordered className="class">
              <div style={{ width: "100%" }}>
                <div style={{ width: "50%", float: "left" }}>
                  <h5>{item.class}</h5>
                  <p class="no-padding">({item.code})</p>
                  <p class="no-padding">{item.title}</p>
                </div>
                <div>
                  <p class="no-padding">{item.days}</p>
                  <p class="no-padding">{item.time}</p>
                  <p class="no-padding">{item.location}</p>
                </div>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    );
  }
}

export default CourseSchedule;
