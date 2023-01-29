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
      submitted: {
        generalInfo: [],
        education: [],
        experience: [],
      },
      current: {
        generalInfo: { fullName: "", email: "", tel: "" },
        education: { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
        experience: {
          companyName: "",
          positionTitle: "",
          mainTasks: "",
          dateFrom: "",
          dateTill: "",
        },
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const [objName, keyName] = name.split(".");
    this.setState((prevState) => ({
      ...prevState,
      current: {
        ...prevState.current,
        [objName]: {
          ...prevState.current[objName],
          [keyName]: value,
        },
      },
    }));
  };

  handleSubmit = (event, currentKey) => {
    event.preventDefault();
    this.setState((prevState) => ({
      submitted: {
        ...prevState.submitted,
        [currentKey]: prevState.submitted[currentKey].concat(
          prevState.current[currentKey]
        ),
      },
      current: {
        ...prevState.current,
        education: { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
        experience: {
          companyName: "",
          positionTitle: "",
          mainTasks: "",
          dateFrom: "",
          dateTill: "",
        },
      },
    }));
  };

  handleEdit = () => {};

  render() {
    return (
      <>
        <Header />
        <div className="main-container">
          <div className="forms-container">
            <GeneralInfo
              generalInfo={this.state.current.generalInfo}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
            <Education
              education={this.state.current.education}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
            <Experience
              experience={this.state.current.experience}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </div>
          <div className="preview-container">
            <Preview
              submitted={this.state.submitted}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </>
    );
  }
}
