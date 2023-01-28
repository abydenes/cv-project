import React, { Component } from "react";
import InputField from "./InputField";

export class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      tel: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <section className="general-info">
        <b>General Information</b>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Tel:
            <input
              type="tel"
              name="tel"
              value={this.state.tel}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default GeneralInfo;
