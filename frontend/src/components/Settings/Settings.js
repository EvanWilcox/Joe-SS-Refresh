import React, { Component } from "react";
import { Panel, Checkbox, Radio, RadioGroup } from "rsuite";

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
      radioList: "light",
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
      <div>
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
              value={this.state.radioList}
              onChange={(value) => {
                this.handleChange("radioList", value);
              }}
            >
              <Radio value="light">Light Theme</Radio>
              <Radio value="dark">Dark Theme</Radio>
            </RadioGroup>
          </Panel>
        </Panel>
      </div>
    );
  }
}

export default Settings;
