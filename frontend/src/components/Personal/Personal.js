import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { Breadcrumb } from "rsuite";

export class Profile extends Component {
  render() {
    // let { path, url } = useRouteMatch();

    return (
      <div style={{ textAlign: "center" }}>
        <Breadcrumb>
          <NavLink to="/">Home</NavLink>
          <Breadcrumb.Item active>Profile</Breadcrumb.Item>
        </Breadcrumb>
        Profile
      </div>
    );
  }
}

export default Profile;
