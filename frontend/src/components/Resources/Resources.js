import React, { Component } from "react";
import { Panel, Button } from "rsuite";

class Resources extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <div style={{ width: "", float: "left", margin: "0px" }}>
          <Panel shaded bordered className="panel" style={{ width: "350px" }}>
            <h3 style={{ margin: "0px 5%" }}>General Resources</h3>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Registrar
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Cashier's Office
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Fitness Center
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Student Parking
            </Button>
          </Panel>

          <Panel shaded bordered className="panel" style={{ width: "350px" }}>
            <h3 style={{ margin: "0px 5%" }}>News and Events</h3>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Events Calendar
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Campus News
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Student News
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Research News
            </Button>
          </Panel>
        </div>
        <div style={{ width: "", float: "left", margin: "0px" }}>
          <Panel shaded bordered className="panel" style={{ width: "350px" }}>
            <h3 style={{ margin: "0px 5%" }}>Online Resources</h3>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Library
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Canvas
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              S&T Email
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Career Opportunities
            </Button>
          </Panel>

          <Panel shaded bordered className="panel" style={{ width: "350px" }}>
            <h3 style={{ margin: "0px 5%" }}>Involvement</h3>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Organizations
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Volunteerism
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Greek Life
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Find Your Fit
            </Button>
          </Panel>
        </div>
        <div style={{ width: "", float: "left", margin: "0px" }}>
          <Panel shaded bordered className="panel" style={{ width: "350px" }}>
            <h3 style={{ margin: "0px 5%" }}>Help and Safety</h3>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Campus Police
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Health and Wellbeing
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              IT Help Desk
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              S&T Alert
            </Button>
          </Panel>

          <Panel shaded bordered className="panel" style={{ width: "350px" }}>
            <h3 style={{ margin: "0px 5%" }}>Other</h3>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              myHR
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Official Policies
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Dinning Options
            </Button>
            <Button appearance="primary" className="resource-btn" style={{ textAlign: "left" }} href="#">
              Residential Life
            </Button>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Resources;
