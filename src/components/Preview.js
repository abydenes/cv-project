import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faEdit } from "@fortawesome/free-solid-svg-icons";


function Preview({submitted,handleEdit}) {
    const { generalInfo, education, experience } = submitted;
    if (generalInfo[0]) {
      const currentGeneralInfo = generalInfo[generalInfo.length - 1];
      return (
        <div className="preview">
          <div className="p-header">
            <div className="full-name">{currentGeneralInfo.fullName}</div>
            <div className="p-header-right">
              <div className="email">
                <FontAwesomeIcon icon={faEnvelope} /> {currentGeneralInfo.email}
              </div>
              <div className="tel">
                <FontAwesomeIcon icon={faPhone} /> {}
                {currentGeneralInfo.tel}
              </div>
            </div>
          </div>
          <div className="p-education">
            <b>Education </b>
            {education.map((ele, index) => {
              return (
                <div className="p-education-ele">
                  <div className="date-of-study">{ele.dateOfStudy}</div>
                  <div>
                    <div className="school-name">{ele.schoolName}</div>
                    <div className="title-of-study">{ele.titleOfStudy}</div>
                  </div>
                  <div className="edit-and-delete">
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => handleEdit(index, "education")}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-experience">
            <b>Experience </b>
            {experience.map((ele, index) => {
              return (
                <div className="p-experience-ele">
                  <div>
                    <div className="date-from">{ele.dateFrom}</div>
                    <div className="date-till">{ele.dateTill}</div>
                  </div>
                  <div>
                    <div className="company-name">{ele.companyName}</div>
                    <div className="position-title">{ele.positionTitle}</div>
                    <div className="main-tasks">{ele.mainTasks}</div>
                  </div>
                  <div className="edit-and-delete">
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => this.props.handleEdit(index, "experience")}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else return <div className="preview"></div>;
  }


export default Preview;
