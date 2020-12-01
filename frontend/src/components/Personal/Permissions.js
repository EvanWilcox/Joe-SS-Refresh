import React, { Component } from "react";
import { Panel, Icon, Button } from "rsuite";

export class Permissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      additionalAuthorizedUsers: [
        {
          name: "Father Name",
          email: "fakefather@emailaddress.com",
          studentAccountInfo: true,
          academicsInfo: true,
          directoryInfo: false,
          financialAid: true,
        },
        {
          name: "Mother Name",
          email: "fakemother@emailaddress.com",
          studentAccountInfo: true,
          academicsInfo: true,
          directoryInfo: false,
          financialAid: true,
        },
      ],
      ferpaUsers: [
        {
          name: "Father Name",
          relationship: "Father",
          number: "(123) 456 - 7890",
        },
        {
          name: "Mother Name",
          relationship: "Mother",
          number: "(636) 123 - 7890",
        },
      ],
    };
  }

  render() {
    const { additionalAuthorizedUsers, ferpaUsers } = this.state;

    return (
      <div style={{ maxHeight: 790, width: "100%", overflow: "auto" }}>
        <Panel bordered shaded className="panel">
          <h4>Additional Authorized Access</h4>
          <p>
            As a Missouri S&T student, you can grant other users direct and authorized online access to your student
            information, which may include, but is not limited to, schedule of classes, grades, financial aid, and
            student financial account information. In authorizing Additional Authorized Access members, you acknowledge
            that the University is not responsible for any unauthorized disclosure of your student information by your
            registered members.
          </p>
          <p>Below is a list of those members to which you have granted access.</p>

          <Button
            appearance="primary"
            style={{ display: "block", width: "130px", marginBottom: "5px", marginTop: "10px" }}
          >
            <Icon icon="plus" style={{ color: "#78BE20", paddingRight: "5px" }} />
            Add Member
          </Button>
          <div className="header-bar">
            <div style={{ textAlign: "left", marginLeft: "9%" }}>
              <p style={{ padding: "5px 0px" }}>
                <strong>Name</strong>
              </p>
            </div>
            <div style={{ textAlign: "left", marginLeft: "7.5%" }}>
              <p style={{ padding: "5px 0px" }}>
                <strong>Email Address</strong>
              </p>
            </div>
            <div style={{ textAlign: "left", marginLeft: "14%" }}>
              <p style={{ padding: "5px 0px" }}>
                <strong>Student Account Info</strong>
              </p>
            </div>
            <div style={{ textAlign: "left", marginLeft: "3%" }}>
              <p style={{ padding: "5px 0px" }}>
                <strong>Academics Info</strong>
              </p>
            </div>
            <div style={{ textAlign: "left", marginLeft: "4%" }}>
              <p style={{ padding: "5px 0px" }}>
                <strong>Directory Info</strong>
              </p>
            </div>
            <div style={{ textAlign: "left", marginLeft: "4%" }}>
              <p style={{ padding: "5px 0px" }}>
                <strong>Financial Aid</strong>
              </p>
            </div>
          </div>
          {additionalAuthorizedUsers.map((item, key) => (
            <Panel key={key} bordered style={{ marginTop: "10px" }}>
              <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "8%", textAlign: "center", marginTop: "8px" }}>
                  <Icon icon={item.type === "Primary" ? "" : "pencil"} size="lg" />
                </div>
                <div style={{ width: "10%", marginTop: "5px" }}>
                  <strong>{item.name}</strong>
                </div>
                <div style={{ width: "20%", marginTop: "5px" }}>
                  <strong>{item.email}</strong>
                </div>
                <div style={{ width: "10%", textAlign: "center", marginTop: "5px" }}>
                  <Icon
                    icon="check-circle"
                    size="2x"
                    style={{ padding: "0px", margin: "0px", color: item.studentAccountInfo ? "#78BE20" : "#DCE3E4" }}
                  />
                </div>
                <div style={{ width: "10%", textAlign: "center", marginTop: "5px" }}>
                  <Icon
                    icon="check-circle"
                    size="2x"
                    style={{ padding: "0px", margin: "0px", color: item.academicsInfo ? "#78BE20" : "#DCE3E4" }}
                  />
                </div>
                <div style={{ width: "10%", textAlign: "center", marginTop: "5px" }}>
                  <Icon
                    icon="check-circle"
                    size="2x"
                    style={{ padding: "0px", margin: "0px", color: item.directoryInfo ? "#78BE20" : "#DCE3E4" }}
                  />
                </div>
                <div style={{ width: "10%", textAlign: "center", marginTop: "5px" }}>
                  <Icon
                    icon="check-circle"
                    size="2x"
                    style={{ padding: "0px", margin: "0px", color: item.financialAid ? "#78BE20" : "#DCE3E4" }}
                  />
                </div>
              </div>
            </Panel>
          ))}
        </Panel>

        <Panel bordered shaded className="panel">
          <h4>FERPA Permission</h4>
          <p>
            The Family Educational Rights and Privacy Act (Buckley Amendment) prohibits access to, or release of,
            educational records or personally identifiable information contained in such records (other than directory
            information) without the written consent of the student or as specified by other exceptions such as
            subpoenas and court orders. Please see this web site for full explanation and regulatory exceptions: <br />
            <a href="http://www.umsystem.edu/ums/rules/collected_rules/information/ch180/180.020_student_records">
              http://www.umsystem.edu/ums/rules/collected_rules/information/ch180/180.020_student_records
            </a>
            .
          </p>
          <p>
            Students may not select subsections of academic records to be released. In other words, a student may not
            give a parent access to billing information, but not to grades. Generally, this release will cover all
            nondirectory information; however, some information such as disciplinary actions may require additional
            permission from the student in a written format. Release of information is not required by law.
          </p>
          <p>
            Also, this release allows verbal access only. Student’s signature will be necessary for any written or
            printed documentation such as grades. All permissions granted will stay in effect until they are removed by
            the student.
          </p>

          <Button
            appearance="primary"
            style={{ display: "block", width: "130px", marginBottom: "5px", marginTop: "10px" }}
          >
            <Icon icon="plus" style={{ color: "#78BE20", paddingRight: "5px" }} />
            Add Member
          </Button>
          <div className="header-bar">
            <div style={{ textAlign: "left", marginLeft: "9%" }}>
              <p style={{ padding: "5px 0px" }}>
                <strong>Name</strong>
              </p>
            </div>
            <div style={{ textAlign: "left", marginLeft: "12.3%" }}>
              <p style={{ padding: "5px 0px" }}>
                <strong>Relationship</strong>
              </p>
            </div>
            <div style={{ textAlign: "left", marginLeft: "4.8%" }}>
              <p style={{ padding: "5px 0px" }}>
                <strong>Phone</strong>
              </p>
            </div>
          </div>
          {ferpaUsers.map((item, key) => (
            <Panel key={key} bordered style={{ marginTop: "10px" }}>
              <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "8%", textAlign: "center", marginTop: "5px" }}>
                  <Icon icon={item.type === "Primary" ? "" : "pencil"} size="lg" />
                </div>
                <div style={{ width: "15%", marginTop: "5px" }}>
                  <strong>{item.name}</strong>
                </div>
                <div style={{ width: "10%", marginTop: "5px" }}>
                  <strong>{item.relationship}</strong>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <strong>{item.number}</strong>
                </div>
              </div>
            </Panel>
          ))}
        </Panel>
      </div>
    );
  }
}

export default Permissions;
