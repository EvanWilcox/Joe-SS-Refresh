import React, { Component } from "react";
import "rsuite/lib/styles/index.less";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Sidenav from "./SideNav";

import Home from "./Home";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Sidenav />

          <div
            style={{
              position: "fixed",
              top: "150px",
              right: "0",
              width: "calc(100% - 250px)",
              height: "calc(100% - 150px)",
              backgroundColor: "#F0F0F0",
            }}
          >
            <Switch>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/settings">{/* <Settings /> */}</Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>

        <div
          style={{
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%",
            height: "10px",
            background: "#dfc463",
          }}
        ></div>
      </div>
    );
  }
}

export default App;
