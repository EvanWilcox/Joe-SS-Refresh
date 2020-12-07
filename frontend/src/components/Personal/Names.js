import React, { Component } from "react";
import { Panel, Icon, Button, Modal, Form, FormGroup, FormControl, ControlLabel } from "rsuite";

export class Names extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      data: [
        {
          type: "Primary",
          name: "Christopher Lee Gu",
        },
        {
          type: "Nickname",
          name: "Chris",
        },
        {
          type: "Degree",
          name: "Christopher Lee Gu",
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
      this.setState({ show: true, formValue: {}, key: key });
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
      <Panel bordered shaded className="panel panel-table">
        <Modal show={this.state.show} onHide={this.close} size="xs">
          <Modal.Header>
            <Modal.Title>{this.state.key < data.length ? "Edit " : "Add "}Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form fluid onChange={this.handleChange} formValue={this.state.formValue}>
              <FormGroup>
                <ControlLabel>Type</ControlLabel>
                <FormControl name="type" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl name="name" />
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
          style={{ display: "block", width: "110px", marginBottom: "5px" }}
        >
          <Icon icon="plus" style={{ color: "#78BE20", paddingRight: "5px" }} />
          Add Name
        </Button>

        <div className="header-bar">
          <div style={{ width: "8.8%" }}></div>
          <div style={{ width: "10%", minWidth: "90px", textAlign: "left" }}>
            <p className="header-bar-text">Type</p>
          </div>
          <div style={{ textAlign: "left" }}>
            <p className="header-bar-text">Name</p>
          </div>
        </div>

        <div className="table-container">
          {data.map((item, key) => (
            <Panel key={key} bordered style={{ marginTop: "10px", marginRight: "10px" }}>
              <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "8%", textAlign: "center" }}>
                  <button className="edit-btn" key={key} onClick={() => this.open(key)}>
                    {item.type !== "Primary" ? <Icon icon="pencil" size="lg" /> : null}
                  </button>
                </div>
                <div style={{ width: "10%" }}>
                  <strong>{item.type}</strong>
                </div>
                <div>
                  <strong>{item.name}</strong>
                </div>
              </div>
            </Panel>
          ))}
        </div>
      </Panel>
    );
  }
}

export default Names;
