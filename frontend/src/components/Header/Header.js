import React, { Fragment } from "react";
import "./Header.css";

import { Navbar, Nav, Icon, Input, InputGroup } from "rsuite";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Fragment>
      <div
        style={{
          left: 0,
          top: 0,
          width: "100%",
          height: "10px",
          background: "#78BE20",
        }}
      />
      <Navbar appearance="inverse">
        <Navbar.Body>
          <Nav>
            {/* Hamburger & Title */}
            <Nav.Item>
              <Icon icon="bars" size="2x" />
            </Nav.Item>
            <Nav.Item>
              <p style={{ fontSize: "25px" }}>Joe'SS Portal</p>
            </Nav.Item>

            {/* Search Bar */}
            <div style={{ float: "right", padding: "10px", width: "calc(100vw - 370px)" }}>
              <InputGroup style={{ width: "100%", border: "2px solid #003B49" }}>
                <Input
                  placeholder="Search"
                  style={{
                    border: "2px solid #002B36",
                    backgroundColor: "#002B36",
                    color: "white",
                  }}
                />
                <InputGroup.Button style={{ backgroundColor: "#002B36" }}>
                  <Icon icon="search" style={{ color: "#78BE20" }} />
                </InputGroup.Button>
              </InputGroup>
            </div>
          </Nav>

          {/* Log Out Button */}
          <Nav pullRight>
            <Link to="/logout">
              <Nav.Item icon={<Icon icon="sign-out" style={{ color: "#78BE20" }} />} style={{ paddingRight: "10px" }}>
                Log Out
              </Nav.Item>
            </Link>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </Fragment>
  );
}

export default Header;
