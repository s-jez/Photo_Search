import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import InputText from "../Input/InputText";
import inputStyles from "../Input/InputText.module.css";
import { getPhotosByQuery } from "../modules/services";

const Form: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const navigate = useNavigate();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(e.target.value);
    if (inputValue.length < 3) {
      return;
    }
    const matchesPhotos: any = getPhotosByQuery(inputValue);
    setSuggestions(matchesPhotos);
  };
  const onSuggestHandler = (text: string) => {
    navigate(`/photos`, { state: { text: text } });
  };
  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
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
