import React, { Component } from "react";
import { Icon, Panel, Button } from "rsuite";

export class Actions extends Component {
  render() {
    return (
      <Panel shaded bordered className="panel">
        <div style={{ paddingBottom: "15px" }}>
          <Icon style={{ float: "left", paddingRight: "15px", paddingTop: "5px" }} icon="external-link" size="4x" />
          <h3>Actions</h3>
          <p className="no-padding">External Links</p>
        </div>
        <div>
          <div style={{ textAlign: "justify" }}>
            <Button appearance="primary" style={{ margin: "5px 5%", width: "40%" }} href="#">
              <Icon icon="external-link" style={{ color: "#78BE20", paddingRight: "10px" }} />
              Schedule Planner
            </Button>
            <Button appearance="primary" style={{ margin: "5px 5%", width: "40%" }} href="#">
              <Icon icon="external-link" style={{ color: "#78BE20", paddingRight: "10px" }} />
              Request Degree Audit
            </Button>
          </div>
          <div>
            <Button appearance="primary" style={{ margin: "5px 5%", width: "40%" }} href="#">
              <Icon icon="external-link" style={{ color: "#78BE20", paddingRight: "10px" }} />
              Apply for Graduation
            </Button>
            <Button appearance="primary" style={{ margin: "5px 5%", width: "40%" }} href="#">
              <Icon icon="external-link" style={{ color: "#78BE20", paddingRight: "10px" }} />
              Request Transcript
            </Button>
          </div>
        </div>
      </Panel>
    );
  }
}

export default Actions;
