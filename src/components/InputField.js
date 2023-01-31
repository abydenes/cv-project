import React from "react";

function InputField({ name, value, onChange }) {
  return (
    <>
      <label>
        {name}:
        <input
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
        />
      </label>
      <br />
    </>
  );
}

export default InputField;
