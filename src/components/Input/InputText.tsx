import React, { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, RefObject } from "react";
import "./InputText.css";

type InputProps = {
  value?: number | string | readonly string[] | undefined;
  id?: string;
  placeholder?: string;
  classes?: string;
  // lepiej importować typy bezpośrednio
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  ref?: RefObject<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
};
// do przekazywania ref najlepiej używać 
// https://pl.reactjs.org/docs/forwarding-refs.html 
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/e

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
