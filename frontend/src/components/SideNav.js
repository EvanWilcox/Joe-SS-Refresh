import React from "react";
import { Nav, Sidenav, Icon, Dropdown } from "rsuite";
import { Link } from "react-router-dom";
import placeHolderImage from "../assets/person.png";

function SideNav() {
  return (
    <div style={{ width: 200, position: "fixed", height: "100%" }}>
      <Sidenav appearance="inverse" style={{ height: "100%" }} defaultOpenKeys={["3", "4"]}>
        <Sidenav.Body>
          <Nav>
            <Nav.Item>
              <img
                src={placeHolderImage}
                alt="Headshot"
                width="120"
                height="120"
                style={{ border: "5px solid #dfc463" }}
              />
            </Nav.Item>

            <Link to="/">
              <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                Dashboard
              </Nav.Item>
            </Link>

            <Dropdown eventKey="2" title="Personal" icon={<Icon icon="lock" />}>
              <Dropdown.Item eventKey="2-1">Info</Dropdown.Item>
              <Dropdown.Item eventKey="2-2">Devices</Dropdown.Item>
            </Dropdown>
            <Dropdown eventKey="3" title="Academics" icon={<Icon icon="book" />}>
              <Dropdown.Item eventKey="3-1">Course Schedule</Dropdown.Item>
              <Dropdown.Item eventKey="3-2">Grades</Dropdown.Item>
              <Dropdown.Item eventKey="3-3">Add/Drop Class</Dropdown.Item>
              <Dropdown.Item eventKey="3-4">Transcript</Dropdown.Item>
              <Dropdown.Item eventKey="3-5">Degree Audit</Dropdown.Item>
            </Dropdown>

            <Dropdown eventKey="4" title="Finance" icon={<Icon icon="money" />}>
              <Dropdown.Item eventKey="4-1">Payments</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">Financial Aid</Dropdown.Item>
            </Dropdown>

            <Nav.Item eventKey="5" icon={<Icon icon="heartbeat" />}>
              Benefits
            </Nav.Item>
            <Nav.Item eventKey="6" icon={<Icon icon="link" />}>
              Resources
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}

export default SideNav;
