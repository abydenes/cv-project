import React, { useState } from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Preview from "./components/Preview";
import "./styles/App.css";

function App() {
  const [submitted, setSubmitted] = useState({
    generalInfo: [],
    education: [],
    experience: [],
  });
  const [current, setCurrent] = useState({
    generalInfo: { fullName: "", email: "", tel: "" },
    education: { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
    experience: {
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      dateFrom: "",
      dateTill: "",
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const [objName, keyName] = name.split(".");
    setCurrent((prevState) => ({
      ...prevState,
      [objName]: {
        ...prevState[objName],
        [keyName]: value,
      },
    }));
  };

  const handleSubmit = (event, currentKey) => {
    event.preventDefault();
    setSubmitted((prevState) => ({
      ...prevState,
      [currentKey]: prevState[currentKey].concat(current[currentKey]),
    }));
    setCurrent((prevState) => ({
      ...prevState,
      education: { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
      experience: {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        dateFrom: "",
        dateTill: "",
      },
    }));
  };
  const handleEdit = (index, currentKey) => {
    console.log(index);
    setSubmitted((prevState) => ({
      ...prevState,
      [currentKey]: prevState[currentKey].filter(
        (x) => x !== prevState[currentKey][index]
      ),
    }));
    setCurrent((prevState) => ({
      ...prevState,
      [currentKey]: submitted[currentKey][index],
    }));
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="forms-container">
          <GeneralInfo
            generalInfo={current.generalInfo}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <Education
            education={current.education}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <Experience
            experience={current.experience}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
        <div className="preview-container">
          <Preview submitted={submitted} handleEdit={handleEdit} />
        </div>
      </div>
    </>
  );
}

export default App;
