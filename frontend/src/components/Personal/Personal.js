import React, { Component } from "react";

import { Content, Nav } from "rsuite";
import { Switch, Route, NavLink } from "react-router-dom";

import Demographics from "./Demographics";
import Names from "./Names";
import Addresses from "./Addresses";
import PhoneNumbers from "./PhoneNumbers";
import Emails from "./Emails";
import Contacts from "./Contacts";
import Permissions from "./Permissions";

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
        <div className="nav-bar">
          <Nav appearance="" active={active} onSelect={this.handleSelect}>
            <Nav.Item eventKey="1">
              <NavLink to="/personal/demographics" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-item">Demographics</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="2">
              <NavLink to="/personal/names" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-item">Names</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="3">
              <NavLink to="/personal/addresses" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-item">Addresses</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="4">
              <NavLink to="/personal/phonenumbers" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-item">Phone Numbers</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="5">
              <NavLink to="/personal/emails" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-item">Email Addresses</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="6">
              <NavLink to="/personal/contacts" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-item">Contacts</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item eventKey="7">
              <NavLink to="/personal/permissions" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-item">Permissions</p>
              </NavLink>
            </Nav.Item>
          </Nav>
        </div>

        <div>
          <Switch>
            <Route path="/personal/demographics" component={Demographics} />
            <Route path="/personal/names" component={Names} />
            <Route path="/personal/addresses" component={Addresses} />
            <Route path="/personal/phonenumbers" component={PhoneNumbers} />
            <Route path="/personal/emails" component={Emails} />
            <Route path="/personal/contacts" component={Contacts} />
            <Route path="/personal/permissions" component={Permissions} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Profile;
