import React, { Component } from "react";
import { Panel, Icon, Button } from "rsuite";

export class Addresses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          type: "Primary",
          address: "825 Wellesley Place Dr",
          city: "Chesterfield",
          state: "MO",
          zipCode: "63017-0747",
          county: "Saint Louis",
        },
        {
          type: "Major",
          address: "825 Wellesley Place Dr",
          city: "Chesterfield",
          state: "MO",
          zipCode: "63017-0747",
          county: "Saint Louis",
        },
        {
          type: "Local",
          address: "2023 Vichy Rd",
          city: "Rolla",
          state: "MO",
          zipCode: "65401-2017",
          county: "Phelps",
        },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Panel bordered shaded className="panel">
        <Button appearance="primary" style={{ display: "block", width: "125px", marginBottom: "5px" }}>
          <Icon icon="plus" style={{ color: "#78BE20", paddingRight: "5px" }} />
          Add Address
        </Button>
        <div className="header-bar">
          <div style={{ textAlign: "left", marginLeft: "9%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Type</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "7.8%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Address</strong>
            </p>
          </div>
        </div>
        {data.map((item, key) => (
          <Panel key={key} bordered style={{ marginTop: "10px" }}>
            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ width: "8%", textAlign: "center" }}>
                <Icon icon={"pencil"} size="lg" style={{ marginTop: "20px" }} />
              </div>
              <div style={{ width: "10%", marginTop: "20px" }}>
                <strong>{item.type}</strong>
              </div>
              <div>
                <p className="no-padding">
                  <strong>{item.address}</strong>
                </p>
                <p className="no-padding">
                  <strong>
                    {item.city}, {item.state} {item.zipCode}
                  </strong>
                </p>
                <p className="no-padding">
                  <strong>{item.county}</strong>
                </p>
              </div>
            </div>
          </Panel>
        ))}
      </Panel>
    );
  }
}

export default Addresses;
