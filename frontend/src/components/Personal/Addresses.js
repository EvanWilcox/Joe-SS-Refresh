import React, { Component } from "react";
import { Panel, Icon, Button, Modal, Form, FormGroup, ControlLabel, FormControl } from "rsuite";

export class Addresses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [
        {
          type: "Primary",
          address: "825 Wellesley Place Dr",
          city: "Chesterfield",
          state: "MO",
          zipCode: "63017-0747",
          county: "Saint Louis",
        },
        {
          type: "Major",
          address: "825 Wellesley Place Dr",
          city: "Chesterfield",
          state: "MO",
          zipCode: "63017-0747",
          county: "Saint Louis",
        },
        {
          type: "Local",
          address: "2023 Vichy Rd",
          city: "Rolla",
          state: "MO",
          zipCode: "65401-2017",
          county: "Phelps",
        },
      ],
    };

    this.confirm = this.confirm.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.delete = this.delete.bind(this);
  }

  confirm() {
    const newData = this.state.data;
    newData[this.state.key] = this.state.formValue;

    if (
      this.state.formValue.type !== "" &&
      this.state.formValue.address !== "" &&
      this.state.formValue.city !== "" &&
      this.state.formValue.state !== "" &&
      this.state.formValue.zipCode !== "" &&
      this.state.formValue.county !== ""
    ) {
      this.setState({ show: false, data: newData });
    }
  }

  close() {
    this.setState({ show: false });
  }

  open(key) {
    if (key < this.state.data.length) {
      this.setState({ show: true, formValue: this.state.data[key], key: key });
    } else {
      this.setState({
        show: true,
        formValue: {},
        key: key,
      });
    }
  }

  delete() {
    let newData = this.state.data;
    newData.splice(this.state.key, 1);

    this.setState({ show: false, data: newData });
  }

  handleChange(value) {
    this.setState({
      formValue: value,
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Panel bordered shaded className="panel">
        <Modal show={this.state.show} onHide={this.close} size="xs">
          <Modal.Header>
            <Modal.Title>{this.state.key < data.length ? "Edit " : "Add "}Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form fluid onChange={this.handleChange} formValue={this.state.formValue}>
              <FormGroup>
                <ControlLabel>Type</ControlLabel>
                <FormControl name="type" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Address</ControlLabel>
                <FormControl name="address" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>City</ControlLabel>
                <FormControl name="city" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>State</ControlLabel>
                <FormControl name="state" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Zip Code</ControlLabel>
                <FormControl name="zipCode" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>County</ControlLabel>
                <FormControl name="county" />
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            {this.state.key !== data.length && (
              <Button onClick={this.delete} appearance="primary" color="red" style={{ float: "left" }}>
                Delete
              </Button>
            )}
            <Button onClick={this.confirm} appearance="primary">
              Confirm
            </Button>
            <Button onClick={this.close} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Button
          appearance="primary"
          onClick={() => this.open(data.length)}
          style={{ display: "block", width: "125px", marginBottom: "5px" }}
        >
          <Icon icon="plus" style={{ color: "#78BE20", paddingRight: "5px" }} />
          Add Address
        </Button>
        <div className="header-bar">
          <div style={{ textAlign: "left", marginLeft: "9%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Type</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "7.8%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Address</strong>
            </p>
          </div>
        </div>
        {data.map((item, key) => (
          <Panel key={key} bordered style={{ marginTop: "10px" }}>
            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ width: "8%", textAlign: "center" }}>
                <button className="edit-btn" key={key} onClick={() => this.open(key)}>
                  {item.type !== "Primary" ? <Icon icon="pencil" size="lg" style={{ marginTop: "20px" }} /> : null}
                </button>
              </div>
              <div style={{ width: "10%", marginTop: "20px" }}>
                <strong>{item.type}</strong>
              </div>
              <div>
                <p className="no-padding">
                  <strong>{item.address}</strong>
                </p>
                <p className="no-padding">
                  <strong>
                    {item.city}, {item.state} {item.zipCode}
                  </strong>
                </p>
                <p className="no-padding">
                  <strong>{item.county}</strong>
                </p>
              </div>
            </div>
          </Panel>
        ))}
      </Panel>
    );
  }
}

export default Addresses;
