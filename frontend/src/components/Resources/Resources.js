import React, { Component } from "react";
import { Panel, Button } from "rsuite";

function ResourceButton(props) {
  return (
    <Button
      appearance="primary"
      className="resource-btn"
      style={{ textAlign: "left", width: "90%", margin: "5px 5%" }}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.label}
    </Button>
  );
}

class Resources extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <div style={{ float: "left" }}>
          <Panel shaded bordered className="panel" style={{ width: "350px", paddingRight: "10px" }}>
            <h3 style={{ margin: "0px 5%" }}>General Resources</h3>
            <ResourceButton label="Registrar" link="https://registrar.mst.edu/" />
            <ResourceButton label="Cashier's Office" link="https://cashier.mst.edu/" />
            <ResourceButton label="Fitness Center" link="https://studentrec.mst.edu/fitness-center/" />
            <ResourceButton label="Student Parking" link="https://police.mst.edu/parking/student-parking/" />
          </Panel>

          <Panel shaded bordered className="panel" style={{ width: "350px", paddingRight: "10px" }}>
            <h3 style={{ margin: "0px 5%" }}>News and Events</h3>
            <ResourceButton label="Events Calendar" link="https://calendar.mst.edu/" />
            <ResourceButton label="Campus News" link="https://news.mst.edu/" />
            <ResourceButton label="Student News" link="https://econnection.mst.edu/category/student-news/" />
            <ResourceButton label="Research News" link="https://news.mst.edu/category/research/" />
          </Panel>
        </div>
        <div style={{ float: "left" }}>
          <Panel shaded bordered className="panel" style={{ width: "350px", paddingRight: "10px" }}>
            <h3 style={{ margin: "0px 5%" }}>Online Resources</h3>
            <ResourceButton label="Library" link="https://library.mst.edu/" />
            <ResourceButton label="Canvas" link="https://canvas.mst.edu/" />
            <ResourceButton label="S&T Email" link="https://it.mst.edu/services/email/student-email/" />
            <ResourceButton label="Career Opportunities" link="https://career.mst.edu/" />
          </Panel>

          <Panel shaded bordered className="panel" style={{ width: "350px", paddingRight: "10px" }}>
            <h3 style={{ margin: "0px 5%" }}>Involvement</h3>
            <ResourceButton label="Organizations" link="https://involvement.mst.edu/organizations/stuorgsites/" />
            <ResourceButton label="Volunteerism" link="https://involvement.mst.edu/volunteer/" />
            <ResourceButton label="Greek Life" link="https://involvement.mst.edu/fraternityandsororitylife/" />
            <ResourceButton label="Find Your Fit" link="https://news.mst.edu/2020/10/finding-the-right-fit/" />
          </Panel>
        </div>
        <div style={{ float: "left" }}>
          <Panel shaded bordered className="panel" style={{ width: "350px", paddingRight: "10px" }}>
            <h3 style={{ margin: "0px 5%" }}>Help and Safety</h3>
            <ResourceButton label="Campus Police" link="https://police.mst.edu/" />
            <ResourceButton label="Health and Wellbeing" link="https://wellbeing.mst.edu/" />
            <ResourceButton label="IT Help Desk" link="https://it.mst.edu/help-desk/" />
            <ResourceButton label="S&T Alert" link="https://mstalert.com/" />
          </Panel>

          <Panel shaded bordered className="panel" style={{ width: "350px", paddingRight: "10px" }}>
            <h3 style={{ margin: "0px 5%" }}>Other</h3>
            <ResourceButton label="myHR" link="https://hr.mst.edu/" />
            <ResourceButton label="Official Policies" link="https://policy.mst.edu/" />
            <ResourceButton label="Dining Options" link="https://reslife.mst.edu/diningoptions/dininglocations/" />
            <ResourceButton label="Residential Life" link="https://reslife.mst.edu/" />
          </Panel>
        </div>
      </div>
    );
  }
}

export default Resources;
