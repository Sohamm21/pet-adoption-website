import React, { useState } from "react";
import "./index.css";

const SelectableDiv = ({ id, labelText, options, onChange  }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    onChange(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <div className="selectable-div-container">
      <p id={id}>{labelText}</p>
      {options.map((option) => (
        <span key={option.id} className="selectable-div-without-image">
          <input
            type="radio"
            value={option.value}
            name={id}
            id={option.id}
            className="radio"
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
            required
          />
          <label
            htmlFor={option.id}
            className={
              selectedOption === option.value
                ? "selected-option"
                : undefined
            }
          >
            {option.optionText}
          </label>
        </span>
      ))}
    </div>
  );
};

SelectableDiv.defaultProps = {
  containsImage: false,
};

export default SelectableDiv;
