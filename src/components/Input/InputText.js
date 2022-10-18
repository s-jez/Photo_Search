import React from "react";

const InputText = (props) => {
  const { id, value, classes, onChange, onBlur, validate, placeholder } = props;
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
    />
  );
};

export default InputText;
