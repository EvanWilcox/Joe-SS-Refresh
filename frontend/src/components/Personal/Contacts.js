import React, { Component } from "react";
import { Panel, Icon, Button } from "rsuite";

export class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          primary: true,
          name: "Father Name",
          relationship: "Father",
          number: "(636) 123 - 4567",
          extension: "n/a",
          country: "1",
        },
        {
          primary: true,
          name: "Mother Name",
          relationship: "Mother",
          number: "(636) 123 - 5678",
          extension: "n/a",
          country: "1",
        },
        {
          primary: false,
          name: "Brother Name",
          relationship: "Brother",
          number: "(636) 123 - 6789",
          extension: "n/a",
          country: "1",
        },
        {
          primary: false,
          name: "Sister Name",
          relationship: "Sister",
          number: "(636) 123 - 7890",
          extension: "n/a",
          country: "1",
        },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Panel bordered shaded className="panel">
        <Button appearance="primary" style={{ display: "block", width: "120px", marginBottom: "5px" }}>
          <Icon icon="plus" style={{ color: "#78BE20", paddingRight: "5px" }} />
          Add Contact
        </Button>
        <div className="header-bar">
          <div style={{ textAlign: "left", marginLeft: "9%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Primary</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "4.7%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Contact Name</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "8.8%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Relationship</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "5%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Number</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "7.4%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Ext</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "5.5%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Country</strong>
            </p>
          </div>
        </div>
        {data.map((item, key) => (
          <Panel key={key} bordered style={{ marginTop: "10px" }}>
            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ width: "8%", textAlign: "center", marginTop: "8px" }}>
                <Icon icon={item.type === "Primary" ? "" : "pencil"} size="lg" />
              </div>
              <div style={{ width: "8%", marginTop: "5px" }}>
                <Icon
                  icon="check-circle"
                  size="2x"
                  style={{ padding: "0px", margin: "0px", color: item.primary ? "#78BE20" : "#DCE3E4" }}
                />
              </div>
              <div style={{ width: "15%", marginTop: "5px" }}>
                <strong>{item.name}</strong>
              </div>
              <div style={{ width: "10%", marginTop: "5px" }}>
                <strong>{item.relationship}</strong>
              </div>
              <div style={{ width: "11%", marginTop: "5px" }}>
                <strong>{item.number}</strong>
              </div>
              <div style={{ width: "7%", marginTop: "5px" }}>
                <strong>{item.extension}</strong>
              </div>
              <div style={{ width: "10%", marginTop: "5px" }}>
                <strong>{item.country}</strong>
              </div>
            </div>
          </Panel>
        ))}
      </Panel>
    );
  }
}

export default Contacts;
