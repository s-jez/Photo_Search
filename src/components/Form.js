import React, { useState } from "react";
import InputText from "./InputText";
import useFetch from "../hooks/useFetch";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  useFetch(
    `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`
  );
  return (
    <form>
      <InputText
        type="text"
        id=""
        value={inputValue}
        classes=""
        onChange={handleInputChange}
        validate=""
        placeholder="Search free high-resolution photos"
      />
    </form>
  );
};

export default Form;
