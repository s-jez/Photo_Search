import React from "react";
import "./InputText.css";

type InputProps = {
  value?: number | string | readonly string[] | undefined;
  id?: string;
  placeholder?: string;
  classes?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  ref?: React.RefObject<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};

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
}: InputProps) => {
  return (
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
};

export default InputText;
