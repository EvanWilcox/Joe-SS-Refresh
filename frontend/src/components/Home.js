import React, { Component } from "react";
import "./Home.css";
// import { useRouteMatch } from "react-router-dom";

import { Breadcrumb } from "rsuite";

class Home extends Component {
  render() {
    // let { path, url } = useRouteMatch();

    return (
      <div className="Home">
        <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>

        <div className="left-panel">
          <div className="panel" style={{ height: "200px" }}>
            <b>Announcements</b>
            {/* <Announcements /> */}
          </div>
          <div className="panel" style={{ height: "200px" }}>
            <b>Academic Progress</b>
            {/* <AcademicProgress /> */}
          </div>
          <div className="panel" style={{ height: "200px" }}>
            <b>Financial Summary</b>
            {/* <FinancialSummary /> */}
          </div>
        </div>
        <div className="right-panel">
          <div className="panel" style={{ height: "630px" }}>
            <b>Course Schedule</b>
            {/* <CourseSchedule /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
