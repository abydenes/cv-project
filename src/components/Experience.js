import React, { Component } from "react";

export class Experience extends Component {
  render() {
    return (
      <section className="experience">
        <b>Experience</b>
        <form onSubmit={(e) => this.props.onSubmit(e, "experience")}>
          <label>
            Company Name:
            <input
              type="text"
              name="experience.companyName"
              value={this.props.experience.companyName}
              onChange={this.props.onChange}
            />
          </label>
          <br />
          <label>
            Position Title:
            <input
              type="text"
              name="experience.positionTitle"
              value={this.props.experience.positionTitle}
              onChange={this.props.onChange}
            />
          </label>
          <br />
          <label>
            Main Tasks:
            <input
              type="text"
              name="experience.mainTasks"
              value={this.props.experience.mainTasks}
              onChange={this.props.onChange}
            />
          </label>
          <br />
          <label>
            Date worked from:
            <input
              type="date"
              name="experience.dateFrom"
              value={this.props.experience.dateFrom}
              onChange={this.props.onChange}
            />
          </label>
          <br />
          <label>
            Date worked till:
            <input
              type="date"
              name="experience.dateTill"
              value={this.props.experience.dateTill}
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

export default Experience;
