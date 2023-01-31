import React from "react";

function GeneralInfo({ generalInfo, onChange, onSubmit }) {
  return (
    <section className="general-info">
      <b>General Information</b>
      <form onSubmit={(e) => onSubmit(e, "generalInfo")}>
        <label>
          Name:
          <input
            type="text"
            name="generalInfo.fullName"
            value={generalInfo.fullName}
            onChange={onChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="generalInfo.email"
            value={generalInfo.email}
            onChange={onChange}
            required
          />
        </label>
        <br />
        <label>
          Tel:
          <input
            type="tel"
            name="generalInfo.tel"
            value={generalInfo.tel}
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

export default GeneralInfo;
