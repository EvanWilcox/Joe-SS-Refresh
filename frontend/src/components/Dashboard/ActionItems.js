import React, { Component } from "react";
import { Icon, Panel } from "rsuite";

import GreenCheck from "../../assets/GreenCheck.png";
import GrayCheck from "../../assets/GrayCheck.png";

export class ActionItems extends Component {
  constructor(props) {
    super(props);

    // Replace this with an api pull from our fake database
    this.state = {
      data: [
        {
          title: "Lorem ipsum dolor",
          text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. ",
          complete: true,
        },
        {
          title: "Lorem ipsum dolor",
          text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. ",
          complete: false,
        },
        {
          title: "Lorem ipsum dolor",
          text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. ",
          complete: false,
        },
        {
          title: "Lorem ipsum dolor",
          text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. ",
          complete: false,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div style={{ paddingBottom: "15px" }}>
          <Icon style={{ float: "left", paddingRight: "15px" }} icon="clock-o" size="4x" />
          <h3>Action Items</h3>
        </div>

        <div style={{ height: "220px", width: "100%", overflow: "auto", marginTop: "10px" }}>
          {this.state.data.map((item) => (
            <Panel bordered className="item">
              <div>
                <div style={{ width: "80%", display: "inline-block" }}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
                <div style={{ width: "20%", float: "right", textAlign: "right" }}>
                  <img
                    src={item.complete ? GreenCheck : GrayCheck}
                    width="40px"
                    style={{ paddingTop: "9px", paddingRight: "5px" }}
                  />
                </div>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    );
  }
}

export default ActionItems;
