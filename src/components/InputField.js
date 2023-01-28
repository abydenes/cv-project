import React, { Component } from "react";

export class InputField extends Component {
  render() {
    return (
      <>
        <label>
          {this.props.name}:
          <input
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={(e) => this.props.handleChange(e)}
          />
        </label>
        <br />
      </>
    );
  }
}

export default InputField;
