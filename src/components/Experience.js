import React from "react";

function Experience({ experience, onChange, onSubmit }) {
  return (
    <section className="experience">
      <b>Experience</b>
      <form onSubmit={(e) => onSubmit(e, "experience")}>
        <label>
          Company Name:
          <input
            type="text"
            name="experience.companyName"
            value={experience.companyName}
            onChange={onChange}
            required
          />
        </label>
        <br />
        <label>
          Position Title:
          <input
            type="text"
            name="experience.positionTitle"
            value={experience.positionTitle}
            onChange={onChange}
            required
          />
        </label>
        <br />
        <label>
          Main Tasks:
          <input
            type="text"
            name="experience.mainTasks"
            value={experience.mainTasks}
            onChange={onChange}
            required
          />
        </label>
        <br />
        <label>
          Date worked from:
          <input
            type="date"
            name="experience.dateFrom"
            value={experience.dateFrom}
            onChange={onChange}
            required
          />
        </label>
        <br />
        <label>
          Date worked till:
          <input
            type="date"
            name="experience.dateTill"
            value={experience.dateTill}
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

export default Experience;
