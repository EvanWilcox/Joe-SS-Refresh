import React, { Component } from "react";
import { Icon, Panel } from "rsuite";

export class Announcements extends Component {
  constructor(props) {
    super(props);

    // Replace this with an api pull from our fake database
    this.state = {
      data: [
        {
          title: "Announcement",
          text: "Here is some new information you might want to know about!",
          img: "",
          link: "https://mst.edu",
        },
        {
          title: "Announcement",
          text: "Campus events is having a fundraiser for COVID-19 relief. ",
          img: "",
          link: "https://mst.edu",
        },
        {
          title: "Announcement",
          text: "Did you know some students are redesigning Joe’SS? Here’s the new look...",
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
    const { data } = this.state;

    return (
      <Panel shaded bordered className="panel">
        <div>
          <div style={{ paddingBottom: "15px" }}>
            <Icon style={{ float: "left", paddingRight: "15px" }} icon="bullhorn" size="4x" />
            <h3>Announcements</h3>
            <p className="no-padding">{data.length} Items</p>
          </div>

          <div style={{ maxHeight: "360px", width: "100%", overflowY: "auto" }}>
            {data.map((item, key) => (
              <div key={key} style={{ width: "100%", height: "120px" }}>
                <div style={{ float: "left", width: "170px" }}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img
                      width="160"
                      height="100"
                      alt=""
                      style={{
                        borderRadius: "10px",
                        border: "2px solid #BEBEBE",
                      }}
                    />
                  </a>
                </div>
                <div style={{ float: "left", width: "calc(100% - 170px)" }}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </a>
                </div>
              </div>
            ))}

            {/* // <div key={key}>
              //   <a href={item.link} target="_blank" rel="noopener noreferrer">
              //     <div style={{ float: "left" }}>
              //       <img
              //         width="160"
              //         height="100"
              //         alt=""
              //         style={{
              //           borderRadius: "10px",
              //           border: "2px solid #BEBEBE",
              //           margin: "0px 12px 24px 12px",
              //         }}
              //       />
              //     </div>

              //     <div style={{ float: "left", width: "70%" }}>
              //       <h4>{item.title}</h4>
              //       <p>{item.text}</p>
              //       <br />
              //       <br />
              //     </div>
              //   </a>
              // </div> */}
          </div>
        </div>
      </Panel>
    );
  }
}

export default Announcements;
