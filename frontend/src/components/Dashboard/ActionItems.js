import React, { Component } from "react";
import { Icon, Panel } from "rsuite";

class ActionItems extends Component {
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
      ],
    };
  }

  render() {
    return (
      <Panel shaded bordered className="panel">
        <div>
          <div style={{ paddingBottom: "15px" }}>
            <Icon style={{ float: "left", paddingRight: "15px" }} icon="clock-o" size="4x" />
            <h3>Action Items</h3>
            <p className="no-padding">{this.state.data.length} Items</p>
          </div>

          <div style={{ height: "212px", width: "100%", overflow: "auto" }}>
            {this.state.data.map((item, key) => (
              <Panel key={key} bordered className="item">
                <div>
                  <div style={{ width: "80%", display: "inline-block" }}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                  <div style={{ width: "20%", float: "right", textAlign: "right" }}>
                    <Icon
                      icon="check-circle"
                      size="3x"
                      style={{ color: item.complete ? "#78BE20" : "#DCE3E4", padding: "5px 15px" }}
                    />
                  </div>
                </div>
              </Panel>
            ))}
          </div>
        </div>
      </Panel>
    );
  }
}

export default ActionItems;
