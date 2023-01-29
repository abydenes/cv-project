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
            onChange={(e) => this.props.onChange(e)}
          />
        </label>
        <br />
      </>
    );
  }
}

export default InputField;
