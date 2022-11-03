import React, {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  RefObject,
} from "react";
import "./InputText.css";

type InputProps = {
  value?: number | string | readonly string[] | undefined;
  id?: string;
  placeholder?: string;
  classes?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  ref?: RefObject<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
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
