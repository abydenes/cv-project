import React, { Component } from "react";

export class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      dateFrom: "",
      dateTill: "",
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
      <section className="experience">
        <b>Experience</b>
        <form onSubmit={this.handleSubmit}>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={this.state.companyName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Position Title:
            <input
              type="text"
              name="positionTitle"
              value={this.state.positionTitle}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Main Tasks:
            <input
              type="text"
              name="mainTasks"
              value={this.state.mainTasks}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Date worked from:
            <input
              type="date"
              name="dateFrom"
              value={this.state.dateFrom}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Date worked till:
            <input
              type="date"
              name="dateTill"
              value={this.state.dateTill}
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

export default Experience;
