import React, { Component } from "react";
import { Panel, Checkbox, Radio, RadioGroup, Icon } from "rsuite";

function NotificationItem(props) {
  return (
    <Checkbox style={{ margin: "0px" }} defaultChecked={props.state}>
      {props.label}
    </Checkbox>
  );
}

class Settings extends Component {
  constructor() {
    super();

    this.state = {
      radioListAppearance: "light",
      radioListOther1: "on",
      radioListOther2: "off",
      emailNotifications: [
        { label: "New Announcements", state: true },
        { label: "Incomplete Action Items", state: false },
        { label: "Updated Enrollment Dates", state: true },
        { label: "Notification notification notification", state: false },
        { label: "Notification notification notification", state: true },
        { label: "Notification notification notification", state: false },
        { label: "Notification notification notification", state: true },
        { label: "Notification notification notification", state: false },
      ],
      subscribeNotifications: [
        { label: "Monthly Newsletter", state: false },
        { label: "Offers and Promotions", state: true },
        { label: "newsletter newsletter newsletter", state: false },
        { label: "newsletter newsletter newsletter", state: true },
        { label: "newsletter newsletter newsletter", state: false },
        { label: "newsletter newsletter newsletter", state: true },
        { label: "newsletter newsletter newsletter", state: false },
        { label: "newsletter newsletter newsletter", state: true },
      ],
      callNotifications: [
        { label: "Changes to personal info", state: true },
        { label: "call me call me call me call me", state: false },
        { label: "call me call me call me call me", state: true },
        { label: "call me call me call me call me", state: false },
        { label: "call me call me call me call me", state: true },
        { label: "call me call me call me call me", state: false },
        { label: "call me call me call me call me", state: true },
        { label: "call me call me call me call me", state: false },
      ],
    };
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
    console.log(name, value);
  }

  render() {
    const { emailNotifications, subscribeNotifications, callNotifications } = this.state;

    return (
      <div style={{ maxHeight: 850, width: "100%", overflow: "auto" }}>
        <Panel bordered shaded className="panel" style={{ padding: " 0px 10px 30px 10px" }}>
          <h4 style={{ paddingBottom: "10px" }}>Notifications</h4>
          <Panel
            bordered
            style={{ width: "calc((100% - 60px) / 3)", minWidth: "300px", float: "left", marginRight: "15px" }}
          >
            <h6>Email me about: </h6>
            {emailNotifications.map((item, key) => {
              return <NotificationItem key={key} state={item.state} label={item.label} />;
            })}
          </Panel>
          <Panel
            bordered
            style={{ width: "calc((100% - 60px) / 3)", minWidth: "300px", float: "left", margin: " 0px 15px" }}
          >
            <h6>Subscribe me to: </h6>
            {subscribeNotifications.map((item, key) => {
              return <NotificationItem key={key} state={item.state} label={item.label} />;
            })}
          </Panel>
          <Panel
            bordered
            style={{ width: "calc((100% - 60px) / 3)", minWidth: "300px", float: "left", marginLeft: "15px" }}
          >
            <h6>Call me about: </h6>
            {callNotifications.map((item, key) => {
              return <NotificationItem key={key} state={item.state} label={item.label} />;
            })}
          </Panel>
        </Panel>

        <Panel bordered shaded className="panel" style={{ padding: " 0px 10px 30px 10px" }}>
          <h4 style={{ paddingBottom: "10px" }}>Preferences</h4>
          <Panel
            bordered
            style={{ width: "calc((100% - 60px) / 3)", minWidth: "300px", float: "left", marginRight: "15px" }}
          >
            <h6>Appearance</h6>
            <RadioGroup
              inline
              name="radioList"
              value={this.state.radioListAppearance}
              onChange={(value) => {
                this.handleChange("radioListAppearance", value);
              }}
            >
              <Radio value="light">Light Theme</Radio>
              <Radio value="dark">Dark Theme</Radio>
            </RadioGroup>
          </Panel>
          <Panel
            bordered
            style={{ width: "calc((100% - 60px) / 3)", minWidth: "300px", float: "left", margin: " 0px 15px" }}
          >
            <h6>Other Setting</h6>
            <RadioGroup
              inline
              name="radioListOther1"
              value={this.state.radioListOther1}
              onChange={(value) => {
                this.handleChange("radioListOther1", value);
              }}
            >
              <Radio value="on">On</Radio>
              <Radio value="off">Off</Radio>
            </RadioGroup>
          </Panel>
          <Panel
            bordered
            style={{ width: "calc((100% - 60px) / 3)", minWidth: "300px", float: "left", marginLeft: "15px" }}
          >
            <h6>Other Setting</h6>
            <RadioGroup
              inline
              name="radioListOther2"
              value={this.state.radioListOther2}
              onChange={(value) => {
                this.handleChange("radioListOther2", value);
              }}
            >
              <Radio value="on">On</Radio>
              <Radio value="off">Off</Radio>
            </RadioGroup>
          </Panel>
        </Panel>

        <div style={{ display: "inline", width: "100%" }}>
          <div style={{ float: "left", width: "50%" }}>
            <Panel shaded bordered className="panel" style={{ marginTop: "0px" }}>
              <h4>Credits</h4>
              <br />
              <p>Zach Dautenhahn, Christopher Gu, Samuel Huff, Devinda Senanayaka, Evan Wilcox</p>
              <br />
              <a href="https://github.com/EvanWilcox/Joe-SS-Refresh" target="_blank" rel="noopener noreferrer">
                <Icon icon="github" size="lg" style={{ marginRight: "5px" }} />
                <strong> GitHub</strong>
              </a>
            </Panel>
          </div>
          <div style={{ float: "left", width: "50%" }}>
            <Panel shaded bordered className="panel " style={{ marginTop: "0px", height: "155px" }}></Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
