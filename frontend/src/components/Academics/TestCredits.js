import React, { Component } from "react";
import { Panel } from "rsuite";

export class TestCredits extends Component {
  render() {
    return (
      <Panel shaded bordered className="panel">
        <h4>Test Credits</h4>
        <br />
        <p>No Test Credits Found</p>
      </Panel>
    );
  }
}

export default TestCredits;
