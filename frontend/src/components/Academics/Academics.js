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
  constructor() {
    super();
    this.state = {
      active: "1",
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ active: activeKey });
  }

  render() {
    const { active } = this.state;

    return (
      <div>
        <div className="nav-bar">
          <Nav appearance="" active={active} onSelect={this.handleSelect}>
            <Nav.Item eventKey="1">
              <NavLink exact to="/academics" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-item">Overview</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="2">
              <NavLink to="/academics/coursehistory" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-item">Course History</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="3">
              <NavLink to="/academics/transfercourses" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-item">Transfer Credit</p>
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
