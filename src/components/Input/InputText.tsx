import React from "react";

type InputProps = {
  value: number | string | readonly string[] | undefined;
  id?: string;
  placeholder?: string;
  classes?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
};

const InputText = ({
  id,
  value,
  classes,
  onChange,
  onBlur,
  placeholder,
  onKeyDown,
}: InputProps) => {
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
