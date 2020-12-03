import React, { Component } from "react";

import { Nav } from "rsuite";
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
  }

  render() {
    const { active } = this.state;
    return (
      <div>
        <div className="nav-bar">
          <Nav appearance="">
            <Nav.Item>
              <NavLink to="/personal/demographics" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-text">Demographics</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/personal/names" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-text">Names</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/personal/addresses" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-text">Addresses</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/personal/phonenumbers" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-text">Phone Numbers</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/personal/emails" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-text">Email Addresses</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/personal/contacts" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-text">Contacts</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/personal/permissions" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-text">Permissions</p>
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
