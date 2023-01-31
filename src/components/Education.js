import React from "react";

function Education({ education, onChange, onSubmit }) {
  return (
    <section className="education">
      <b>Education</b>
      <form onSubmit={(e) => onSubmit(e, "education")}>
        <label>
          School Name:
          <input
            type="text"
            name="education.schoolName"
            value={education.schoolName}
            onChange={onChange}
            required
          />
        </label>
        <br />
        <label>
          Title of Study:
          <input
            type="text"
            name="education.titleOfStudy"
            value={education.titleOfStudy}
            onChange={onChange}
            required
          />
        </label>
        <br />
        <label>
          Date of Study:
          <input
            type="text"
            name="education.dateOfStudy"
            value={education.dateOfStudy}
            onChange={onChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Education;
