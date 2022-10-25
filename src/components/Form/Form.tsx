import React, { useState, FC, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "components/Input/InputText";
import { getPhotosByQuery } from "components/modules/services";
import debounce from "lodash.debounce";

const Form: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const navigate = useNavigate();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (inputValue.length < 3) {
      return;
    }
    const matchesPhotos: any = getPhotosByQuery(inputValue);
    setSuggestions(matchesPhotos);
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(inputChangeHandler, 300),
    // eslint-disable-next-line
    []
  );
  // (async () => {
  //   const getPhotosSuggestions = async () => {
  //     const matchesPhotos = await getPhotosByQuery(inputValue);
  //     console.log(matchesPhotos);
  //   };
  //   getPhotosSuggestions();
  // })();
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
      {suggestions.length !== 0 &&
        // eslint-disable-next-line
        suggestions.map((suggestion, i) => {
          if (suggestion.alt_description !== null) {
            return (
              <div
                className="input-suggestion"
                key={i}
                onClick={() => onSuggestHandler(suggestion)}
              >
                <a href="/photos">{suggestion.alt_description}</a>
              </div>
            );
          }
        })}
      {suggestions.length === 0 && inputValue !== "" && (
        <div className="text-black text-base p-3 cursor-pointer">
          There is no hint!
        </div>
      )}
    </form>
  );
};

export default Form;
