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
              <NavLink exact to="/academics" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-text">Overview</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/academics/coursehistory" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-text">Course History</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/academics/transfercourses" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-text">Transfer Credit</p>
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
          <Route path="/academics/transfercourses">
            <CourseCredits />
            <TestCredits />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Academics;
