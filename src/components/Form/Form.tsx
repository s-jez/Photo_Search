import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import InputText from "../Input/InputText";
import inputStyles from "../Input/InputText.module.css";

const Form: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const navigate = useNavigate();
  let SEARCH_PHOTOS_URL = "https://unsplash.com/nautocomplete";

  const getPhotosByQuery = async (query) => {
    try {
      const res = await fetch(`${SEARCH_PHOTOS_URL}/${query}`);
      return res.json();
    } catch (error) {
      return null;
    }
  };
  const inputChangeHandler = (e) => {
    const inputValue = e.target.value;
    setInputValue(e.target.value);
    if (inputValue.length < 3) {
      return;
    }
    const matchesPhotos: any = getPhotosByQuery(inputValue);
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
        id=""
        value={inputValue}
        classes={inputStyles.input}
        onChange={inputChangeHandler}
        placeholder="Search free high-resolution photos"
        onKeyDown={handleKeyDown}
        onBlur={null}
      />
      {suggestions.length &&
        // eslint-disable-next-line
        suggestions.map((suggestion, i) => {
          if (suggestion.alt_description !== null) {
            return (
              <div
                className={styles["input-suggestion"]}
                key={i}
                onClick={() => onSuggestHandler(suggestion)}
              >
                <a href="/photos">{suggestion.alt_description}</a>
              </div>
            );
          }
        })}
      {suggestions.length === 0 && inputValue !== "" && (
        <div className={styles["input-suggestion"]}>There is no hint!</div>
      )}
    </form>
  );
};

export default Form;
