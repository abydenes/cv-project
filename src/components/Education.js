import React, { Component } from "react";

export class Education extends Component {
  render() {
    return (
      <section className="education">
        <b>Education</b>
        <form onSubmit={this.props.onSubmit}>
          <label>
            School Name:
            <input
              type="text"
              name="education.schoolName"
              value={this.props.education.schoolName}
              onChange={this.props.onChange}
            />
          </label>
          <br />
          <label>
            Title of Study:
            <input
              type="text"
              name="education.titleOfStudy"
              value={this.props.education.titleOfStudy}
              onChange={this.props.onChange}
            />
          </label>
          <br />
          <label>
            Date of Study:
            <input
              type="text"
              name="education.dateOfStudy"
              value={this.props.education.dateOfStudy}
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

export default Education;
