import React from "react";

const InputText = ({
  id,
  value,
  classes,
  onChange,
  onBlur,
  validate,
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
      validate={validate}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
};

export default InputText;
