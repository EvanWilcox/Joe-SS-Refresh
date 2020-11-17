import React, { Component } from "react";
import "./Dashboard.css";

import AcademicProgress from "./AcademicProgress";
import ActionItems from "./ActionItems";
import Announcements from "./Announcements";
import CourseSchedule from "./CourseSchedule";

import { Grid, Row, Col } from "rsuite";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Grid fluid>
                <Row>
                  <Announcements />
                </Row>
                <Row>
                  <ActionItems />
                </Row>
              </Grid>
            </Col>
            <Col xs={12}>
              <Row>
                <AcademicProgress />
              </Row>
              <Row>
                <CourseSchedule />
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
