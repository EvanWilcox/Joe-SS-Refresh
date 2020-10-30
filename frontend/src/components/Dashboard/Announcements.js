import React, { Component } from "react";
import { Icon } from "rsuite";

export class Announcements extends Component {
  constructor(props) {
    super(props);

    // Replace this with an api pull from our fake database
    this.state = {
      data: [
        {
          title: "Lorem ipsum dolor",
          text:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          img: "",
          link: "https://calendar.mst.edu/event/concrete_castles_and_tornados",
        },
        {
          title: "Lorem ipsum dolor",
          text:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          img: "",
          link: "https://mst.edu",
        },
        {
          title: "Lorem ipsum dolor",
          text:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          img: "",
          link: "https://mst.edu",
        },
        {
          title: "Lorem ipsum dolor",
          text:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          img: "",
          link: "https://mst.edu",
        },
        {
          title: "Lorem ipsum dolor",
          text:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          img: "",
          link: "https://mst.edu",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div style={{ paddingBottom: "15px" }}>
          <Icon style={{ float: "left", paddingRight: "15px" }} icon="bullhorn" size="4x" />
          <h3>Announcements</h3>
        </div>

        <div style={{ height: "360px", width: "100%", overflow: "auto", marginTop: "10px" }}>
          {this.state.data.map((item) => (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div style={{ float: "left" }}>
                <img
                  width="160"
                  height="100"
                  alt=""
                  style={{
                    borderRadius: "10px",
                    border: "2px solid #BEBEBE",
                    margin: "0px 12px 24px 12px",
                  }}
                />
              </div>

              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <br />
                <br />
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Announcements;
