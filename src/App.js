import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Header from "./components/Header";
import "./styles/App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="forms-container">
          <GeneralInfo />
          <Education />
          <Experience />
        </div>
        <div className="preview-container">
          
        </div>
      </div>
    );
  }
}
