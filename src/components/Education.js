import React, { Component } from "react";

export class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
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
      <section className="education">
        <b>Education</b>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="schoolName"
              value={this.state.schoolName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Title of Study:
            <input
              type="text"
              name="titleOfStudy"
              value={this.state.titleOfStudy}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Date of Study:
            <input
              type="text"
              name="dateOfStudy"
              value={this.state.dateOfStudy}
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

export default Education;
