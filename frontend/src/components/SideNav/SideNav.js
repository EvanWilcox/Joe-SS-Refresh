import React from "react";
import { Nav, Sidenav, Icon } from "rsuite";
import { Link } from "react-router-dom";
import placeHolderImage from "../../assets/person.png";

class SideNav extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleToggle() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    const { expanded } = this.state;

    return (
      <div style={{}}>
        {/* For Testing Purposes */}
        {/* <Toggle onChange={this.handleToggle} checked={expanded} /> */}

        <Sidenav
          appearance="inverse"
          expanded={expanded}
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
          style={{ minHeight: "calc(100vh - 76px)", height: "100%", minWidth: "250px" }}
        >
          {/* defaultOpenKeys={["3", "4"]} */}
          <Sidenav.Body>
            <Nav>
              {/* Picture/Student Name/School */}
              <Nav.Item style={{ paddingTop: "10px" }}>
                <img
                  src={placeHolderImage}
                  alt="Headshot"
                  width="140"
                  height="140"
                  style={{ borderRadius: "50%", border: "5px solid #78BE20" }}
                />
                <p style={{ fontSize: "26px", paddingTop: "10px" }}>Evan Wilcox</p>
                <p>Student | Missouri S&T</p>
              </Nav.Item>

              {/* Dashboard Button */}
              <Link to="/">
                <Nav.Item
                  eventKey="1"
                  icon={<Icon icon="dashboard" style={{ color: "#78BE20" }} />}
                >
                  Dashboard
                </Nav.Item>
              </Link>

              {/* Personal Button */}
              <Link to="/personal">
                <Nav.Item eventKey="2" icon={<Icon icon="user" style={{ color: "#78BE20" }} />}>
                  Personal
                </Nav.Item>
              </Link>

              {/* Academics Button */}
              <Link to="/academics">
                <Nav.Item
                  eventKey="3"
                  icon={<Icon icon="mortar-board" style={{ color: "#78BE20" }} />}
                >
                  Academics
                </Nav.Item>
              </Link>

              {/* Finance Button */}
              <Link to="/finance">
                <Nav.Item eventKey="4" icon={<Icon icon="money" style={{ color: "#78BE20" }} />}>
                  Finance
                </Nav.Item>
              </Link>

              {/* Benefits & Resources Button */}
              <Link to="/resources">
                <Nav.Item eventKey="5" icon={<Icon icon="link" style={{ color: "#78BE20" }} />}>
                  Benefits & Resources
                </Nav.Item>
              </Link>

              {/* Settings Button */}
              <Link to="/settings">
                <Nav.Item eventKey="6" icon={<Icon icon="gear" style={{ color: "#78BE20" }} />}>
                  Settings
                </Nav.Item>
              </Link>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    );
  }
}

export default SideNav;
