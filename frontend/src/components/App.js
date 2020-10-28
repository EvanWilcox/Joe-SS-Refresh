import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "rsuite/lib/styles/index.less";
import { Container, Content, Footer } from "rsuite";

import Sidenav from "./SideNav/SideNav";
import { Dashboard, Personal, Header } from "./index";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          {/* Header */}
          <Header />
          <Container>
            <Content>
              <div className="container" style={{ display: "flex" }}>
                {/* Side Nav Bar */}
                <div style={{ float: "left" }}>
                  <Sidenav />
                </div>

                {/* Main Content */}
                <div style={{ flexGrow: "1", padding: "5px", backgroundColor: "#f0f0f0" }}>
                  <Switch>
                    <Route path="/profile">
                      <Personal />
                    </Route>
                    <Route path="/resources">{/* <Resources /> */}</Route>
                    <Route path="/settings">{/* <Settings /> */}</Route>
                    <Route path="/">
                      <Dashboard />
                    </Route>
                  </Switch>
                </div>
              </div>
            </Content>
          </Container>
          <Footer>
            {/* Bottom Green Line */}
            <div
              style={{
                width: "100%",
                height: "10px",
                background: "#78BE20",
              }}
            />
          </Footer>
        </Container>
      </Router>
    );
  }
}

export default App;
