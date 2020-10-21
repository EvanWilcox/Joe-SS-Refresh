import React, { Component } from "react";
import "./Home.css";

import { Breadcrumb, Panel, Grid, Row, Col } from "rsuite";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div style={{ backgroundColor: "white" }}>
          <Breadcrumb>
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Grid fluid>
                <Row>
                  <Panel
                    bordered
                    className="panel"
                    header={<h3>Announcements</h3>}
                    style={{ height: "25vh" }}
                  >
                    {/* <Announcements /> */}
                  </Panel>
                </Row>
                <Row>
                  <Panel
                    bordered
                    className="panel"
                    header={<h3>Academic Progress</h3>}
                    style={{ height: "25vh" }}
                  >
                    {/* <AcademicProgress /> */}
                  </Panel>
                </Row>
                <Row>
                  <Panel
                    bordered
                    className="panel"
                    header={<h3>Financial Summary</h3>}
                    style={{ height: "25vh" }}
                  >
                    {/* <FinancialSummary /> */}
                  </Panel>
                </Row>
              </Grid>
            </Col>
            <Col xs={12}>
              <Panel
                bordered
                className="panel"
                header={<h3>Course Schedule</h3>}
                style={{ height: "77vh" }}
              >
                {/* <CourseSchedule /> */}
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
