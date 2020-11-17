import React, { Component } from "react";
import { Grid, Row, Col, Nav } from "rsuite";
import { CourseSchedule } from "../Dashboard/CourseSchedule";
import { Link, NavLink, Switch, Route } from "react-router-dom";
import AcademicProgress from "../Dashboard/AcademicProgress";

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
      <div className="academics">
        <div style={{ margin: "15px", padding: "10px", background: "white", borderRadius: "8px" }}>
          <Nav appearance="" active={active} onSelect={this.handleSelect}>
            <Nav.Item eventKey="1">
              <NavLink
                to="/academics/overview"
                activeClassName="active-link"
                style={{ textDecoration: "none" }}
              >
                <p className="nav-item">Overview</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="2">
              <NavLink
                to="/academics/coursehistory"
                activeClassName="active-link"
                style={{ textDecoration: "none" }}
              >
                <p className="nav-item">Course History</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="3">
              <NavLink
                to="/academics/transfercourses"
                activeClassName="active-link"
                style={{ textDecoration: "none" }}
              >
                <p className="nav-item">Transfer Credit</p>
              </NavLink>
            </Nav.Item>
          </Nav>
        </div>

        <Switch>
          <Route path="/academics/overview">
            <Grid fluid>
              <Row>
                <Col xs={12}>
                  <Grid fluid>
                    <Row>
                      <CourseSchedule />
                    </Row>
                    <Row></Row>
                  </Grid>
                </Col>
                <Col xs={12}>
                  <Row>
                    <AcademicProgress />
                  </Row>
                  <Row></Row>
                </Col>
              </Row>
            </Grid>
          </Route>
          <Route path="/academics/coursehistory">
            <div style={{ padding: "15px" }}>Course History</div>
          </Route>
          <Route path="/academics/transfercourses">
            <div style={{ padding: "15px" }}>Transfer Courses</div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Academics;
