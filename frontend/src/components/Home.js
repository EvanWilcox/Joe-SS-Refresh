import React, { Component } from "react";
// import { useRouteMatch } from "react-router-dom";

import { Breadcrumb } from "rsuite";

class Home extends Component {
  render() {
    // let { path, url } = useRouteMatch();

    return (
      <div className="Home">
        <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>
        Home Page
      </div>
    );
  }
}

export default Home;
