import React, { Component } from "react";
import "rsuite/lib/styles/index.less";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container, Content, Footer } from "rsuite";

import Header from "./Header";
import Sidenav from "./SideNav";

import Home from "./Home";
import Profile from "./Profile";

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
                <div style={{ float: "left" }}>
                  {/* Side Nav Bar */}
                  <Sidenav />
                </div>
                {/* Main Content */}
                <div style={{ flexGrow: "1" }}>
                  <Switch>
                    <Route path="/profile">
                      <Profile />
                    </Route>
                    <Route path="/resources">{/* <Resources /> */}</Route>
                    <Route path="/settings">{/* <Settings /> */}</Route>
                    <Route path="/">
                      <Home />
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
