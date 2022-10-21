import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import InputText from "../Input/InputText";
import inputStyles from "../Input/InputText.module.css";
import { UNSPLASH_KEY, UNSPLASH_URL } from "../../utils/urls";
import { getPhotosByQuery } from "../modules/services";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  let SEARCH_PHOTOS_URL =
    UNSPLASH_URL + "/search/photos/" + UNSPLASH_KEY + `&query=${inputValue}`;

  const inputChangeHandler = (e) => {
    const inputValue = e.target.value;
    setInputValue(e.target.value);
    if (inputValue.length <= 3) {
      return;
    }
    const matchesPhotos = getPhotosByQuery(SEARCH_PHOTOS_URL, inputValue);
    setSuggestions(matchesPhotos);
  };
  const onSuggestHandler = (text) => {
    navigate(`/photos`, { state: { text: text.alt_description } });
  };
  const handleKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      navigate(`/photos`, { state: { text: inputValue } });
    }
  };
  return (
    <form className={styles["form-input"]}>
      <InputText
        type="text"
        id=""
        value={inputValue}
        classes={inputStyles.input}
        onChange={inputChangeHandler}
        validate=""
        placeholder="Search free high-resolution photos"
        onKeyDown={handleKeyDown}
      />
      {suggestions.length &&
        // eslint-disable-next-line
        suggestions.map((suggestion, i) => {
          // eslint-disable-next-line
          if (suggestion.alt_description === null) return;
          return (
            <div
              className={styles["input-suggestion"]}
              key={i}
              onClick={() => onSuggestHandler(suggestion)}
              to={"/photos"}
            >
              {suggestion.alt_description}
            </div>
          );
        })}
      {suggestions.length === 0 && inputValue !== "" && (
        <div className={styles["input-suggestion"]}>There is no hint!</div>
      )}
    </form>
  );
};

export default Form;
