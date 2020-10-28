import React, { Component } from "react";
import "./Dashboard.css";

import AcademicProgress from "./AcademicProgress";
import ActionItems from "./ActionItems";
import Announcements from "./Announcements";
import CourseSchedule from "./CourseSchedule";

import { Panel, Grid, Row, Col } from "rsuite";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Grid fluid>
                <Row>
                  {/* Announcements */}
                  <Panel shaded bordered className="panel" style={{}}>
                    <Announcements />
                  </Panel>
                </Row>
                <Row>
                  {/* Action Items */}
                  <Panel shaded bordered className="panel" style={{ height: "35vh" }}>
                    <ActionItems />
                  </Panel>
                </Row>
              </Grid>
            </Col>
            <Col xs={12}>
              <Row>
                {/* Academic Progress */}
                <Panel shaded bordered className="panel" style={{ height: "30vh" }}>
                  <AcademicProgress />
                </Panel>
              </Row>
              <Row>
                {/* Course Schedule */}
                <Panel shaded bordered className="panel" style={{ height: "55vh" }}>
                  <CourseSchedule />
                </Panel>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;