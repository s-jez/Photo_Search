import React, { useState, FC, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "components/Input/InputText";
import { getPhotosByQuery } from "components/modules/services";
import debounce from "lodash.debounce";

const Form: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [autoComplete, setAutoComplete] = useState<any[]>([]);

  const navigate = useNavigate();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (inputValue.length < 3) {
      return;
    }
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(inputChangeHandler, 300),
    // eslint-disable-next-line
    []
  );
  (async () => {
    const getPhotosSuggestions = async () => {
      const matchesPhotos = await getPhotosByQuery(inputValue);
      setAutoComplete(matchesPhotos?.autocomplete);
      inputValue.length >= 3
        ? setSuggestions(autoComplete)
        : setSuggestions([]);
    };
    getPhotosSuggestions();
  })();
  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
    // eslint-disable-next-line
  }, []);
  const onSuggestHandler = (text: string) => {
    navigate(`/photos`, { state: { text: text } });
  };
  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.keyCode === 13) {
      navigate(`/photos`, { state: { text: inputValue } });
    }
  };
  return (
    <form className="text-white rounded-md bg-white">
      <InputText
        id=""
        classes="input"
        onChange={debouncedChangeHandler}
        placeholder="Search free high-resolution photos"
        onKeyDown={handleKeyDown}
      />
      {suggestions.length > 0 &&
        // eslint-disable-next-line
        suggestions?.map((suggestion, i) => {
          if (suggestion.query === null) {
            return null;
          }
          return (
            <div
              className="input-suggestion text-black p-3 cursor-pointer"
              key={i}
              onClick={() => onSuggestHandler(suggestion.query)}
            >
              {suggestion.query}
            </div>
          );
        })}
      {suggestions.length === 0 && inputValue.length > 0 && (
        <div className="text-black text-base p-3 cursor-pointer">
          There is no hint!
        </div>
      )}
    </form>
  );
};

export default Form;
