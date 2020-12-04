import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { Nav, Panel, Button, Icon } from "rsuite";

export class Finance extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          term: "Missouri S&T 2016-2017",
          scholarships: [
            {
              description: "Bright Flight",
              category: "Scholarship",
              offeredAmount: 3000,
              acceptedAmount: 3000,
            },
            {
              description: "Trustees Scholarship",
              category: "Scholarship",
              offeredAmount: 3500,
              acceptedAmount: 3500,
            },
            {
              description: "University Scholarship",
              category: "Scholarship",
              offeredAmount: 2000,
              acceptedAmount: 2000,
            },
            {
              description: "CS Department Scholarship",
              category: "Scholarship",
              offeredAmount: 250,
              acceptedAmount: 250,
            },
          ],
        },
        {
          term: "Missouri S&T 2017-2018",
          scholarships: [
            {
              description: "Bright Flight",
              category: "Scholarship",
              offeredAmount: 3000,
              acceptedAmount: 3000,
            },
            {
              description: "Trustees Scholarship",
              category: "Scholarship",
              offeredAmount: 3500,
              acceptedAmount: 3500,
            },
            {
              description: "University Scholarship",
              category: "Scholarship",
              offeredAmount: 2000,
              acceptedAmount: 2000,
            },
            {
              description: "CS Department Scholarship",
              category: "Scholarship",
              offeredAmount: 250,
              acceptedAmount: 250,
            },
          ],
        },
        {
          term: "Missouri S&T 2018-2019",
          scholarships: [
            {
              description: "Bright Flight",
              category: "Scholarship",
              offeredAmount: 3000,
              acceptedAmount: 3000,
            },
            {
              description: "Trustees Scholarship",
              category: "Scholarship",
              offeredAmount: 3500,
              acceptedAmount: 3500,
            },
            {
              description: "University Scholarship",
              category: "Scholarship",
              offeredAmount: 2000,
              acceptedAmount: 2000,
            },
            {
              description: "CS Department Scholarship",
              category: "Scholarship",
              offeredAmount: 250,
              acceptedAmount: 250,
            },
          ],
        },
        {
          term: "Missouri S&T 2019-2020",
          scholarships: [
            {
              description: "Bright Flight",
              category: "Scholarship",
              offeredAmount: 3000,
              acceptedAmount: 3000,
            },
            {
              description: "Trustees Scholarship",
              category: "Scholarship",
              offeredAmount: 3500,
              acceptedAmount: 3500,
            },
            {
              description: "University Scholarship",
              category: "Scholarship",
              offeredAmount: 2000,
              acceptedAmount: 2000,
            },
            {
              description: "CS Department Scholarship",
              category: "Scholarship",
              offeredAmount: 250,
              acceptedAmount: 250,
            },
          ],
        },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <div className="nav-bar">
          <Nav appearance="">
            <Nav.Item>
              <NavLink exact to="/finance" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-text">Overview</p>
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/finance/financialaid" activeClassName="active-link" style={{ textDecoration: "none" }}>
                <p className="nav-text">Financial Aid</p>
              </NavLink>
            </Nav.Item>
          </Nav>
        </div>

        <Switch>
          <Route exact path="/finance">
            <div style={{ width: "100%" }}>
              <div style={{ width: "400px", float: "left" }}>
                <Panel shaded bordered className="panel">
                  <h4>TouchNet</h4>
                  <p>Use TouchNet to:</p>
                  <ul>
                    <li>Edit direct deposition information</li>
                    <li>View tax information</li>
                    <li>View and pay your bill</li>
                    <li>View latest statements</li>
                    <li>Grant others access</li>
                    <li>View billing history and receipts</li>
                    <li>Setup billing text alerts</li>
                    <li>And more!</li>
                  </ul>
                  <Button appearance="primary" className="touchNet-btn" href="#">
                    <Icon icon="external-link" style={{ color: "#78BE20", paddingRight: "10px" }} />
                    Proceed to TouchNet
                  </Button>
                </Panel>

                <Panel shaded bordered className="panel">
                  <h4>Billing Dates</h4>
                  <p>Fall 2020</p>
                  <div className="header-bar">
                    <div style={{ textAlign: "left", marginLeft: "20px" }}>
                      <p style={{ padding: "5px 0px" }}>
                        <strong>Bill</strong>
                      </p>
                    </div>
                    <div style={{ textAlign: "left", marginLeft: "125px" }}>
                      <p style={{ padding: "5px 0px" }}>
                        <strong>Due Date</strong>
                      </p>
                    </div>
                  </div>

                  <Panel bordered style={{ marginBottom: "5px" }}>
                    <div style={{ width: "100%" }}>
                      <div style={{ width: "50%", float: "left" }}>
                        <strong> July 15</strong>
                      </div>
                      <div>
                        <strong>August 10th</strong>
                      </div>
                    </div>
                  </Panel>

                  <Panel bordered style={{ marginBottom: "5px" }}>
                    <div style={{ width: "100%" }}>
                      <div style={{ width: "50%", float: "left" }}>
                        <strong> August 15</strong>
                      </div>
                      <div>
                        <strong>September 10th</strong>
                      </div>
                    </div>
                  </Panel>

                  <Panel bordered style={{ marginBottom: "5px" }}>
                    <div style={{ width: "100%" }}>
                      <div style={{ width: "50%", float: "left" }}>
                        <strong> September 15</strong>
                      </div>
                      <div>
                        <strong>October 10th</strong>
                      </div>
                    </div>
                  </Panel>

                  <Panel bordered style={{ marginBottom: "5px" }}>
                    <div style={{ width: "100%" }}>
                      <div style={{ width: "50%", float: "left" }}>
                        <strong> October 15</strong>
                      </div>
                      <div>
                        <strong>November 10th</strong>
                      </div>
                    </div>
                  </Panel>
                </Panel>
              </div>
              <div style={{ width: "370px", float: "left" }}>
                <Panel shaded bordered className="panel">
                  <h4>Total Account Balance</h4>
                  <h3>$21,526.00</h3>

                  <h4 style={{ marginTop: "10px" }}>Due Now</h4>
                  <h3>$14,931.74</h3>
                  <Panel bordered style={{ marginTop: "10px" }}>
                    <p>
                      <Icon icon="exclamation-triangle" style={{ color: "#E87722", paddingRight: "5px" }} />
                      Looking for your minimum payment? Review your billing statement to find the minimum amount due
                      each month.
                    </p>
                  </Panel>
                </Panel>
                <Panel shaded bordered className="panel">
                  <div style={{ width: "70%", float: "left", marginBottom: "10px" }}>
                    <Icon
                      style={{ float: "left", paddingRight: "15px", paddingTop: "5px" }}
                      icon="external-link"
                      size="4x"
                    />
                    <h4>Actions</h4>
                    <p className="no-padding">External Links</p>
                  </div>
                  <Button appearance="primary" style={{ width: "80%", margin: "5px 5%", textAlign: "left" }} href="#">
                    Financial Aid
                  </Button>
                  <Button appearance="primary" style={{ width: "80%", margin: "5px 5%", textAlign: "left" }} href="#">
                    Scholarships
                  </Button>
                  <Button appearance="primary" style={{ width: "80%", margin: "5px 5%", textAlign: "left" }} href="#">
                    Start the FAFSA
                  </Button>
                  <Button appearance="primary" style={{ width: "80%", margin: "5px 5%", textAlign: "left" }} href="#">
                    Miner Money Management
                  </Button>
                </Panel>
              </div>
            </div>
          </Route>
          <Route path="/finance/financialaid">
            <div style={{ maxHeight: 780, width: "100%", overflow: "auto" }}>
              {data.map((item, key) => (
                <div>
                  <Panel
                    header={<h4>{item.term}</h4>}
                    style={{ backgroundColor: "white", paddingLeft: "10px", margin: "15px" }}
                    key={key}
                    collapsible
                    shaded
                    bordered
                    defaultExpanded={key === data.length - 1}
                  >
                    <p>Currency used is US Dollar.</p>

                    <div className="header-bar">
                      <div style={{ textAlign: "left", marginLeft: "1.3%" }}>
                        <p className="header-bar-text">Award Description</p>
                      </div>
                      <div style={{ textAlign: "left", marginLeft: "7%" }}>
                        <p style={{ padding: "5px 0px" }}>
                          <strong>Category</strong>
                        </p>
                      </div>
                      <div style={{ textAlign: "left", marginLeft: "6%" }}>
                        <p style={{ padding: "5px 0px" }}>
                          <strong>Offered</strong>
                        </p>
                      </div>
                      <div style={{ textAlign: "left", marginLeft: "6.8%" }}>
                        <p style={{ padding: "5px 0px" }}>
                          <strong>Accepted</strong>
                        </p>
                      </div>
                    </div>

                    {item.scholarships.map((scholarship, key) => (
                      <div>
                        <Panel key={key} bordered style={{ margin: "5px 0px", padding: "0px" }}>
                          <div style={{ width: "100%", display: "flex" }}>
                            <div className="scholarship-item" style={{ width: "15%" }}>
                              <strong>{scholarship.description}</strong>
                            </div>
                            <div className="scholarship-item" style={{ width: "10%" }}>
                              <strong>{scholarship.category}</strong>
                            </div>
                            <div className="scholarship-item" style={{ width: "10%" }}>
                              <strong>{new Intl.NumberFormat().format(scholarship.offeredAmount)}</strong>
                            </div>
                            <div className="scholarship-item" style={{ width: "10%" }}>
                              <strong>{new Intl.NumberFormat().format(scholarship.acceptedAmount)}</strong>
                            </div>
                          </div>
                        </Panel>
                      </div>
                    ))}
                    <div className="header-bar">
                      <div style={{ textAlign: "left", marginLeft: "1.3%" }}>
                        <p style={{ padding: "5px 0px" }}>
                          <strong>Academic Year Totals</strong>
                        </p>
                      </div>
                      <div style={{ textAlign: "left", marginLeft: "15.8%" }}>
                        <p style={{ padding: "5px 0px" }}>
                          <strong>
                            {new Intl.NumberFormat().format(
                              item.scholarships.reduce(function (a, b) {
                                return parseInt(a) + parseInt(b["offeredAmount"]);
                              }, 0)
                            )}
                          </strong>
                        </p>
                      </div>
                      <div style={{ textAlign: "left", marginLeft: "7.6%" }}>
                        <p style={{ padding: "5px 0px" }}>
                          <strong>
                            {new Intl.NumberFormat().format(
                              item.scholarships.reduce(function (a, b) {
                                return parseInt(a) + parseInt(b["acceptedAmount"]);
                              }, 0)
                            )}
                          </strong>
                        </p>
                      </div>
                    </div>
                    <p>
                      Your financial aid award is determined from the information provided on your financial aid
                      application. If there is no financial aid displayed, your application may be in progress. Please
                      check back in a few days.
                    </p>
                  </Panel>
                </div>
              ))}
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Finance;
