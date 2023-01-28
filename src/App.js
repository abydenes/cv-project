import React from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Preview from "./components/Preview";
import "./styles/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: { fullName: "", email: "", tel: "" },
      education: { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
      experience: {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        dateFrom: "",
        dateTill: "",
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const [objName, keyName] = name.split(".");
    this.setState((prevState) => ({
      [objName]: {
        ...prevState[objName],
        [keyName]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <Header />
        <div className="main-container">
          <div className="forms-container">
            <GeneralInfo
              generalInfo={this.state.generalInfo}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
            <Education
              education={this.state.education}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
            <Experience
              experience={this.state.experience}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </div>
          <div className="preview-container">
            <Preview parentState={this.state} />
          </div>
        </div>
      </>
    );
  }
}
