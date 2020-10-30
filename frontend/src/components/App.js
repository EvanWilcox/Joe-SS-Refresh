import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "rsuite/lib/styles/index.less";
import { Container } from "rsuite";

import {
  Sidenav,
  Header,
  Dashboard,
  Personal,
  Academics,
  Finance,
  Resources,
  Settings,
} from "./index";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          {/* Header */}
          <Header />

          <div className="container" style={{ display: "flex", overflowX: "hidden" }}>
            {/* Side Nav Bar */}
            <div style={{ minHeight: "calc(100vh - 76px)", height: "100%", float: "left" }}>
              <Sidenav />
            </div>

            {/* Main Content */}
            <div style={{ flexGrow: "1", padding: "5px", backgroundColor: "#f0f0f0" }}>
              <Switch>
                <Route path="/personal">
                  <Personal />
                </Route>
                <Route path="/academics">
                  <Academics />
                </Route>
                <Route path="/finance">
                  <Finance />
                </Route>
                <Route path="/resources">
                  <Resources />
                </Route>
                <Route path="/settings">
                  <Settings />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </div>
          </div>

          {/* Bottom Green Line */}
          <div
            style={{
              width: "100%",
              height: "10px",
              background: "#78BE20",
            }}
          />
        </Container>
      </Router>
    );
  }
}

export default App;
