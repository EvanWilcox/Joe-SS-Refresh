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
              <Nav.Item icon={<Icon icon="home" />} style={{ paddingLeft: "10px" }}>
                Home
              </Nav.Item>
            </Link>

            <Link to="/settings">
              <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
            </Link>

            <div style={{ float: "right", padding: "10px" }}>
              <InputGroup style={{ width: "1590px" }}>
                <Input placeholder="Search" />
                <InputGroup.Button>
                  <Icon icon="search" />
                </InputGroup.Button>
              </InputGroup>
            </div>
          </Nav>

          <Nav pullRight>
            <Link to="/logout">
              <Nav.Item icon={<Icon icon="sign-out" />} style={{ paddingRight: "10px" }}>
                Log Out
              </Nav.Item>
            </Link>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </div>
  );
}

export default Header;
