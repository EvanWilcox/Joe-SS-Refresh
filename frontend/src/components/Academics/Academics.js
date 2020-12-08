import React, { Component } from "react";
import { Nav } from "rsuite";
import { CourseSchedule } from "../Dashboard/CourseSchedule";
import { NavLink, Switch, Route } from "react-router-dom";

import AcademicProgress from "../Dashboard/AcademicProgress";
import GeneralInfo from "./GeneralInfo";
import Actions from "./Actions";
import CourseHistory from "./CourseHistory";
import CourseCredits from "./CourseCredits";
import TestCredits from "./TestCredits";

export class Academics extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <Nav appearance="">
            <Nav.Item>
              <NavLink
                exact
                to="/academics"
                className="nav-text"
                activeClassName="active-link"
                style={{ textDecoration: "none" }}
              >
                Overview
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                to="/academics/coursehistory"
                className="nav-text"
                activeClassName="active-link"
                style={{ textDecoration: "none" }}
              >
                Course History
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                to="/academics/transfercredit"
                className="nav-text"
                activeClassName="active-link"
                style={{ textDecoration: "none" }}
              >
                Transfer Credit
              </NavLink>
            </Nav.Item>
          </Nav>
        </div>

        <Switch>
          <Route exact path="/academics">
            <div style={{ width: "100%" }}>
              <div style={{ float: "left", width: "50%", minWidth: "600px" }}>
                <CourseSchedule height="615px" />
              </div>
              <div style={{ float: "left", width: "50%", minWidth: "600px" }}>
                <GeneralInfo />
                <Actions />
                <AcademicProgress />
              </div>
            </div>
          </Route>

          <Route path="/academics/coursehistory" component={CourseHistory} />
          <Route path="/academics/transfercredit">
            <div style={{ maxHeight: 780, width: "100%", overflow: "auto" }}>
              <CourseCredits />
              <TestCredits />
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Academics;
