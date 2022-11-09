import React from "react";
import "./InputText.css";

const InputText = ({
  id,
  value,
  classes,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  onKeyDown,
  ref,
}: InputProps) => (
  <input
    type="text"
    id={id}
    value={value}
    className={classes}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    placeholder={placeholder}
    onKeyDown={onKeyDown}
    ref={ref}
  />
);

export default InputText;
