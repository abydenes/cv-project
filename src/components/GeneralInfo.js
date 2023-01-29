import React, { Component } from "react";

export class GeneralInfo extends Component {
  render() {
    return (
      <section className="general-info">
        <b>General Information</b>
        <form onSubmit={(e) => this.props.onSubmit(e, "generalInfo")}>
          <label>
            Name:
            <input
              type="text"
              name="generalInfo.fullName"
              value={this.props.generalInfo.fullName}
              onChange={this.props.onChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="generalInfo.email"
              value={this.props.generalInfo.email}
              onChange={this.props.onChange}
            />
          </label>
          <br />
          <label>
            Tel:
            <input
              type="tel"
              name="generalInfo.tel"
              value={this.props.generalInfo.tel}
              onChange={this.props.onChange}
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
