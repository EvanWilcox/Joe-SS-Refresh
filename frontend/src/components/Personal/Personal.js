import React, { Component } from "react";
import "./Personal.css";

import Demographics from "./Demographics";

import { Panel, Nav } from "rsuite";
import { Link, Switch, Route, NavLink, Redirect } from "react-router-dom";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      active: "1",
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ active: activeKey });
  }

  render() {
    const { active } = this.state;
    return (
      <div className="home">
        <div style={{ margin: "15px", padding: "10px", background: "white", borderRadius: "8px" }}>
          <Nav appearance="" active={active} onSelect={this.handleSelect}>
            <Nav.Item eventKey="1">
              <NavLink
                to="/personal/demographics"
                activeClassName="active-link"
                style={{ textDecoration: "none" }}
              >
                <p className="nav-item">Demographics</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="2">
              <NavLink
                to="/personal/names"
                activeClassName="active-link"
                style={{ textDecoration: "none" }}
              >
                <p className="nav-item">Names</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="3">
              <NavLink
                to="/personal/addresses"
                activeClassName="active-link"
                style={{ textDecoration: "none" }}
              >
                <p className="nav-item">Addresses</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="4">
              <NavLink
                to="/personal/phonenumbers"
                activeClassName="active-link"
                style={{ textDecoration: "none" }}
              >
                <p className="nav-item">Phone Numbers</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="5">
              <NavLink
                to="/personal/emails"
                activeClassName="active-link"
                style={{ textDecoration: "none" }}
              >
                <p className="nav-item">Email Addresses</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="6">
              <NavLink
                to="/personal/contacts"
                activeClassName="active-link"
                style={{ textDecoration: "none" }}
              >
                <p className="nav-item">Contacts</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="7">
              <NavLink
                to="/personal/permissions"
                activeClassName="active-link"
                style={{ textDecoration: "none" }}
              >
                <p className="nav-item">Permissions</p>
              </NavLink>
            </Nav.Item>
          </Nav>
        </div>

        <div style={{ padding: "15px" }}>
          <Switch>
            <Route path="/personal/demographics">Demographics</Route>
            <Route path="/personal/names">Names</Route>
            <Route path="/personal/addresses">Addresses</Route>
            <Route path="/personal/phonenumbers">Phone Numbers</Route>
            <Route path="/personal/emails">Emails</Route>
            <Route path="/personal/contacts">Contacts</Route>
            <Route path="/personal/permissions">Permissions</Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Profile;
