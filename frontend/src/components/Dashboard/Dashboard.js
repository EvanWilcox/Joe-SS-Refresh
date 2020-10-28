import React, { Component } from "react";
import "./Dashboard.css";

import { Panel, Grid, Row, Col, Icon } from "rsuite";

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
                  <Panel
                    shaded
                    bordered
                    className="panel"
                    // header={
                    //   <div>
                    //     <div style={{ display: "inline-block" }}>
                    //       <Icon icon="bullhorn" size="2x" />
                    //     </div>
                    //     <div style={{ display: "inline-block", paddingLeft: "8px" }}>
                    //       <h3>Announcements</h3>
                    //     </div>
                    //   </div>
                    // }
                    style={{ height: "50vh" }}
                  >
                    {/* <Announcements /> */}
                  </Panel>
                </Row>
                <Row>
                  {/* Action Items */}
                  <Panel
                    shaded
                    bordered
                    className="panel"
                    header={<h3>Action Items</h3>}
                    style={{ height: "35vh" }}
                  >
                    {/* <ActionItems /> */}
                  </Panel>
                </Row>
              </Grid>
            </Col>
            <Col xs={12}>
              <Row>
                {/* Academic Progress */}
                <Panel
                  shaded
                  bordered
                  className="panel"
                  header={<h3>Academic Progress</h3>}
                  style={{ height: "30vh" }}
                >
                  {/* <AcademicProgress /> */}
                </Panel>
              </Row>
              <Row>
                {/* Course Schedule */}
                <Panel
                  shaded
                  bordered
                  className="panel"
                  header={<h3>Course Schedule </h3>}
                  style={{ height: "55vh" }}
                >
                  {/* <CourseSchedule /> */}
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
