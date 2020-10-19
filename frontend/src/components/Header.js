import React from "react";
import Banner from "./Banner";
import { Navbar, Nav, Icon, Input, InputGroup } from "rsuite";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <Banner />
      </Link>

      <Navbar>
        {/* <Navbar.Header></Navbar.Header> */}
        <Navbar.Body>
          <Nav>
            <Link to="/">
              <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
            </Link>

            <Link to="/profile">
              <Nav.Item>Profile</Nav.Item>
            </Link>

            <div style={{ float: "right", padding: "10px" }}>
              <InputGroup style={{ width: "300px" }}>
                <Input placeholder="Search" />
                <InputGroup.Button>
                  <Icon icon="search" />
                </InputGroup.Button>
              </InputGroup>
            </div>
          </Nav>

          <Nav pullRight>
            <Link to="/settings">
              <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
            </Link>
            <Link to="/logout">
              <Nav.Item icon={<Icon icon="sign-out" />}>Log Out</Nav.Item>
            </Link>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </div>
  );
}

export default Header;
