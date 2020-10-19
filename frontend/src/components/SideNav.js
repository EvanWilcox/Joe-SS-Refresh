import React from "react";
import { Nav, Sidenav, Icon, Dropdown } from "rsuite";
import { Link } from "react-router-dom";
import placeHolderImage from "../assets/person.png";

function SideNav() {
  return (
    <div style={{ width: 250, top: "150px", position: "fixed", height: "100%" }}>
      <Sidenav appearance="inverse" style={{ height: "100%" }}>
        {/* defaultOpenKeys={["3", "4"]} */}
        <Sidenav.Body>
          <Nav>
            <Nav.Item style={{ paddingTop: "10px" }}>
              <img
                src={placeHolderImage}
                alt="Headshot"
                width="140"
                height="140"
                style={{ borderRadius: "50%", border: "5px solid #dfc463" }}
              />
              <div style={{ fontSize: "26px", paddingTop: "10px" }}>Evan Wilcox</div>
              <div>Student | Missouri S&T</div>
            </Nav.Item>

            <Link to="/">
              <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                Dashboard
              </Nav.Item>
            </Link>

            <Dropdown eventKey="2" title="Personal" icon={<Icon icon="user" />}>
              <Dropdown.Item eventKey="2-1">Info</Dropdown.Item>
            </Dropdown>

            <Dropdown eventKey="3" title="Academics" icon={<Icon icon="mortar-board" />}>
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

            <Nav.Item eventKey="5" icon={<Icon icon="link" />}>
              Benefits & Resources
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}

export default SideNav;
