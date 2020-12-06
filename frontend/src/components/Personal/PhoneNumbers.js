import React, { Component } from "react";
import {
  Panel,
  Icon,
  Button,
  Modal,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  CheckboxGroup,
} from "rsuite";

class PhoneNumbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      data: [
        {
          type: "Mobile",
          number: "(636) 123 - 4567",
          extension: "n/a",
          country: "1",
          preferred: true,
        },
        {
          type: "Home",
          number: "(636) 123 - 5678",
          extension: "n/a",
          country: "1",
          preferred: false,
        },
        {
          type: "Father",
          number: "(636) 123 - 6789",
          extension: "n/a",
          country: "1",
          preferred: false,
        },
        {
          type: "Mother",
          number: "(636) 123 - 7890",
          extension: "n/a",
          country: "1",
          preferred: false,
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

    if (this.state.formValue.type !== "" && this.state.formValue.name !== "") {
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
            <Modal.Title>{this.state.key < data.length ? "Edit " : "Add "}Phone Number</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form fluid onChange={this.handleChange} formValue={this.state.formValue}>
              <FormGroup>
                <ControlLabel>Type</ControlLabel>
                <FormControl name="type" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Number</ControlLabel>
                <FormControl name="number" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Extension</ControlLabel>
                <FormControl name="extension" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Country Code</ControlLabel>
                <FormControl name="country" />
              </FormGroup>
              <FormControl name="checkbox" accepter={CheckboxGroup}>
                <Checkbox value="preferred">Preferred?</Checkbox>
              </FormControl>
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
          style={{ display: "block", width: "130px", marginBottom: "5px" }}
        >
          <Icon icon="plus" style={{ color: "#78BE20", paddingRight: "5px" }} />
          Add Number
        </Button>
        <div className="header-bar">
          <div style={{ textAlign: "left", marginLeft: "9%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Type</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "7.8%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Number</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "7.4%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Ext</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "5.5%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Country</strong>
            </p>
          </div>
          <div style={{ textAlign: "left", marginLeft: "6.5%" }}>
            <p style={{ padding: "5px 0px" }}>
              <strong>Preferred</strong>
            </p>
          </div>
        </div>
        {data.map((item, key) => (
          <Panel key={key} bordered style={{ marginTop: "10px" }}>
            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ width: "8%", textAlign: "center", marginTop: "5px" }}>
                <button className="edit-btn" key={key} onClick={() => this.open(key)}>
                  {item.type !== "Primary" ? <Icon icon="pencil" size="lg" /> : null}
                </button>
              </div>
              <div style={{ width: "10%", marginTop: "5px" }}>
                <strong>{item.type}</strong>
              </div>
              <div style={{ width: "11%", marginTop: "5px" }}>
                <strong>{item.number}</strong>
              </div>
              <div style={{ width: "7%", marginTop: "5px" }}>
                <strong>{item.extension}</strong>
              </div>
              <div style={{ width: "10%", marginTop: "5px" }}>
                <strong>{item.country}</strong>
              </div>
              <div style={{ marginTop: "5px" }}>
                <Icon
                  icon="check-circle"
                  size="2x"
                  style={{ padding: "0px", margin: "0px", color: item.preferred ? "#78BE20" : "#DCE3E4" }}
                />
              </div>
            </div>
          </Panel>
        ))}
      </Panel>
    );
  }
}

export default PhoneNumbers;
