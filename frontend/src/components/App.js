import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "rsuite/lib/styles/index.less";
import { Container } from "rsuite";

import { Sidenav, Header, Dashboard, Personal, Academics, Finance, Resources, Settings } from "./index";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          {/* Header */}
          <Header />

          <div style={{ display: "flex", overflowX: "hidden" }}>
            {/* Side Nav Bar */}
            <div style={{ minHeight: "calc(100vh - 88px)", height: "100%", float: "left" }}>
              <Sidenav />
            </div>

            {/* Main Content */}
            <div style={{ flexGrow: "1", backgroundColor: "#f0f0f0", padding: "15px" }}>
              <Switch>
                <Route path="/personal" component={Personal} />
                <Route path="/academics" component={Academics} />
                <Route path="/finance" component={Finance} />
                <Route path="/resources" component={Resources} />
                <Route path="/settings" component={Settings} />
                <Route path="/" component={Dashboard} />
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
