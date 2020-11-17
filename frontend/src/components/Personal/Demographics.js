import React, { Component } from "react";
import { Panel } from "rsuite";

class Demographics extends Component {
  render() {
    return (
      <div>
        <Panel shaded bordered className="panel" style={{ width: "100px", float: "left" }}>
          Left
        </Panel>
        <Panel shaded bordered className="panel" style={{ width: "100px" }}>
          Right
        </Panel>
      </div>
    );
  }
}

export default Demographics;
