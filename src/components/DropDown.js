import React from "react";

const DropDown = props => {
  const handleChange = (event, data) => {
    if (event.target.options.selectedIndex > 0)
      props.dropDownHandler(data, event.target.value);
  };

  return (
    <div className={props.clazzName}>
      <select
        onChange={event => handleChange(event, props.data)}
        value={props.default}
      >
        {Object.entries(props.dropdownVals).map(([key, value], index) => {
          return (
            <option key={index} value={key}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
