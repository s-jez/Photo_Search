import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import styles from "../styles/InputText.module.css";
import formStyles from "../styles/Form.module.css";
import { Link } from "react-router-dom";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState([]);

  let SEARCH_PHOTOS_URL = `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_API_KEY}&query=${inputValue}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(SEARCH_PHOTOS_URL);
      const data = await res.json();
      setData(data.results);
      console.log(data.results);
    };
    fetchData();
  }, [SEARCH_PHOTOS_URL]);
  const inputChangeHandler = (e) => {
    SEARCH_PHOTOS_URL += e.target.value;
    let matches = [];
    if (inputValue.length >= 3) {
      matches = data.filter((searchVal) => {
        const regex = new RegExp(`${inputValue}`, "gi");
        const hintValue = searchVal.tags[0]?.source?.title?.match(regex);
        return hintValue;
      });
    }
    setSuggestions(matches);
    setInputValue(e.target.value);
  };
  const onSuggestHandler = (text) => {
    // setInputValue(text);
    setSuggestions([]);
  };
  return (
    <form className={formStyles["form-input"]}>
      <InputText
        type="text"
        id=""
        value={inputValue}
        classes={styles.input}
        onChange={inputChangeHandler}
        validate=""
        placeholder="Search free high-resolution photos"
      />
      {suggestions.length !== 0 ? (
        suggestions.map((suggestion, i) => {
          if (suggestion.alt_description !== null) {
            return (
              <div
                className={styles["input-suggestion"]}
                key={i}
                onClick={() => onSuggestHandler(suggestion)}
                as={Link}
                to={"/photos"}
              >
                {suggestion.alt_description}
              </div>
            );
          }
        })
      ) : (
        <div className={inputValue !== "" && styles["input-suggestion"]}>
          {inputValue !== "" && "There is no hint!"}
        </div>
      )}
    </form>
  );
};

export default Form;
