import React from "react";
import { Nav, Sidenav, Icon, Dropdown, Toggle } from "rsuite";
import { Link } from "react-router-dom";
import placeHolderImage from "../assets/person.png";

class SideNav extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleToggle() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    const { expanded } = this.state;

    return (
      <div style={{ width: "14vw" }}>
        {/* For Testing Purposes */}
        {/* <Toggle onChange={this.handleToggle} checked={expanded} /> */}

        <Sidenav
          appearance="inverse"
          expanded={expanded}
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
          style={{ minHeight: "calc(100vh - 76px)" }}
        >
          {/* defaultOpenKeys={["3", "4"]} */}
          <Sidenav.Body>
            <Nav>
              {/* Picture/Student Name/School */}
              <Nav.Item style={{ paddingTop: "10px" }}>
                <img
                  src={placeHolderImage}
                  alt="Headshot"
                  width="140"
                  height="140"
                  style={{ borderRadius: "50%", border: "5px solid #dfc463" }}
                />
                <p style={{ fontSize: "26px", paddingTop: "10px" }}>Evan Wilcox</p>
                <p>Student | Missouri S&T</p>
              </Nav.Item>

              {/* Dashboard Button */}
              <Link to="/">
                <Nav.Item
                  eventKey="1"
                  icon={<Icon icon="dashboard" style={{ color: "#78BE20" }} />}
                >
                  Dashboard
                </Nav.Item>
              </Link>

              {/* Dashboard Dropdown */}
              <Dropdown
                eventKey="2"
                title="Personal"
                icon={<Icon icon="user" style={{ color: "#78BE20" }} />}
              >
                <Dropdown.Item eventKey="2-1">Info</Dropdown.Item>
              </Dropdown>

              {/* Academics Dropdown */}
              <Dropdown
                eventKey="3"
                title="Academics"
                icon={<Icon icon="mortar-board" style={{ color: "#78BE20" }} />}
              >
                <Dropdown.Item eventKey="3-1">Course Schedule</Dropdown.Item>
                <Dropdown.Item eventKey="3-2">Grades</Dropdown.Item>
                <Dropdown.Item eventKey="3-3">Add/Drop Class</Dropdown.Item>
                <Dropdown.Item eventKey="3-4">Transcript</Dropdown.Item>
                <Dropdown.Item eventKey="3-5">Degree Audit</Dropdown.Item>
              </Dropdown>

              {/* Finance Dropdown */}
              <Dropdown
                eventKey="4"
                title="Finance"
                icon={<Icon icon="money" style={{ color: "#78BE20" }} />}
              >
                <Dropdown.Item eventKey="4-1">Payments</Dropdown.Item>
                <Dropdown.Item eventKey="4-2">Financial Aid</Dropdown.Item>
              </Dropdown>

              {/* Benefits & Resources Dropdown */}
              <Link to="/resources">
                <Nav.Item eventKey="5" icon={<Icon icon="link" style={{ color: "#78BE20" }} />}>
                  Benefits & Resources
                </Nav.Item>
              </Link>

              {/* Settings Button */}
              <Link to="/settings">
                <Nav.Item eventKey="6" icon={<Icon icon="gear" style={{ color: "#78BE20" }} />}>
                  Settings
                </Nav.Item>
              </Link>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    );
  }
}

export default SideNav;
