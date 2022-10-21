import React from "react";

const InputText = ({
  id,
  value,
  classes,
  onChange,
  onBlur,
  placeholder,
  onKeyDown,
}) => {
  return (
    <input
      type="text"
      id={id}
      value={value}
      className={classes}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
};

export default InputText;
