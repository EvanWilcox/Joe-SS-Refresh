import React, { Fragment } from "react";
import "./Header.css";
// import Banner from "./Banner";
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
            <Nav.Item style={{ fontSize: "30px" }}>Joe'SS Portal</Nav.Item>

            {/* Search Bar */}
            <div style={{ float: "right", padding: "10px" }}>
              <InputGroup style={{ width: "400" }}>
                <Input placeholder="Search" />
                <InputGroup.Button>
                  <Icon icon="search" />
                </InputGroup.Button>
              </InputGroup>
            </div>
          </Nav>

          {/* Log Out Button */}
          <Nav pullRight>
            <Link to="/logout">
              <Nav.Item
                icon={<Icon icon="sign-out" style={{ color: "#78BE20" }} />}
                style={{ paddingRight: "10px" }}
              >
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
