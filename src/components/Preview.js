import React, { Component } from "react";

export class Preview extends Component {
  render() {
    const { generalInfo, education, experience } = this.props.submitted;
    console.log(this.props.submitted);
    if (!this.props.submitted) {
      return (
        <div className="preview">
          <div className="p-header">
            <div className="full-name">{generalInfo.fullName}</div>
            <div className="p-header-right">
              <div className="email">{generalInfo.email}</div>
              <div className="tel">{generalInfo.tel}</div>
            </div>
          </div>
          <div className="p-education">
            <div className="school-name">{education.schoolName}</div>
            <div className="title-of-study">{education.titleOfStudy}</div>
            <div className="date-of-study">{education.dateOfStudy}</div>
          </div>
          <div className="p-experience"></div>
        </div>
      );
    } else return <div className="preview"></div>;
  }
}

export default Preview;
