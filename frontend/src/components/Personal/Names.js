import React, { Component } from "react";
import { Panel, Icon, Button } from "rsuite";

export class Names extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          type: "Primary",
          name: "Christopher Lee Gu",
        },
        {
          type: "Nickname",
          name: "Chris",
        },
        {
          type: "Degree",
          name: "Christopher Lee Gu",
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
          Add Name
        </Button>
        <div className="header-bar">
          <div style={{ textAlign: "left", marginLeft: "9%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Type</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "7.8%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Name</strong>
            </p>
          </div>
        </div>
        {data.map((item, key) => (
          <Panel key={key} bordered style={{ marginTop: "10px" }}>
            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ width: "8%", textAlign: "center" }}>
                <Icon icon={item.type === "Primary" ? "" : "pencil"} size="lg" />
              </div>
              <div style={{ width: "10%" }}>
                <strong>{item.type}</strong>
              </div>
              <div>
                <strong>{item.name}</strong>
              </div>
            </div>
          </Panel>
        ))}
      </Panel>
    );
  }
}

export default Names;
