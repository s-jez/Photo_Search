import React from "react";
// można użyć desktruyzacji u góry
// https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0
const InputText = ({
	id,
	value,
	classes,
	onChange,
	onBlur,
	validate,
	placeholder,
	onKeyDown,
}) => (
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


export default InputText;
