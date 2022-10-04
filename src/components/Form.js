import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import styles from "../styles/InputText.module.css";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState([]);

  const SEARCH_PHOTOS_URL = `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_API_KEY}&query=${inputValue}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(SEARCH_PHOTOS_URL);
      const data = await res.json();
      setData(data.results);
    };
    fetchData();
  }, [SEARCH_PHOTOS_URL]);
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    let matches = [];
    if (inputValue.length >= 3) {
      matches = data.filter((searchVal) => {
        const regex = new RegExp(`${inputValue}`, "gi");
        return searchVal.match(regex);
      });
      setSuggestions(matches);
    }
  };
  return (
    <form className={styles["form-input"]}>
      <InputText
        type="text"
        id=""
        value={inputValue}
        classes={styles.input}
        onChange={inputChangeHandler}
        onBlur={() => setSuggestions([])}
        validate=""
        placeholder="Search free high-resolution photos"
      />
      {suggestions &&
        suggestions.map((suggestion, i) => <div>{suggestion}</div>)}
    </form>
  );
};

export default Form;
