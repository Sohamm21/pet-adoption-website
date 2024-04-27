import React from "react";
import "./index.css";

const InputText = ({
  labelText,
  id,
  maxlength,
  minlength,
  placeholder,
  required,
  type,
  min,
  max,
  value,
  onChange,
}) => {
  return (
    <div className="input-text-container">
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        maxLength={maxlength}
        minLength={minlength}
        placeholder={placeholder}
        required={required}
        min={type === "number" ? min : undefined}
        max={type === "number" ? max : undefined}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

InputText.defaultProps = {
  min: 0,
  max: 100,
  type: "text",
};

export default InputText;
