import React, { Component } from "react";
import { Panel, Icon, Button } from "rsuite";

export class Emails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          type: "UM",
          email: "clg2n4@umsystem.edu",
          preferred: false,
        },
        {
          type: "Alias",
          email: "christophergu@mst.edu",
          preferred: true,
        },
        {
          type: "Google",
          email: "christophergu@gmail.com",
          preferred: false,
        },
        {
          type: "Other",
          email: "chrisisthebest@uiux.com",
          preferred: false,
        },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Panel bordered shaded className="panel">
        <Button appearance="primary" style={{ display: "block", width: "110px", marginBottom: "5px" }}>
          <Icon icon="plus" style={{ color: "#78BE20", paddingRight: "5px" }} />
          Add Email
        </Button>
        <div className="header-bar">
          <div style={{ textAlign: "left", marginLeft: "9%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Type</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "7.8%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Email Address</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "14%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Preferred</strong>
            </p>
          </div>
        </div>
        {data.map((item, key) => (
          <Panel key={key} bordered style={{ marginTop: "10px" }}>
            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ width: "8%", textAlign: "center", marginTop: "5px" }}>
                <Icon icon={item.type === "Primary" ? "" : "pencil"} size="lg" />
              </div>
              <div style={{ width: "10%", marginTop: "5px" }}>
                <strong>{item.type}</strong>
              </div>
              <div style={{ width: "20%", marginTop: "5px" }}>
                <strong>{item.email}</strong>
              </div>
              <div style={{ marginTop: "5px" }}>
                <Icon
                  icon="check-circle"
                  size="2x"
                  style={{ padding: "0px", margin: "0px", color: item.preferred ? "#78BE20" : "#DCE3E4" }}
                />
              </div>
            </div>
          </Panel>
        ))}
      </Panel>
    );
  }
}

export default Emails;
