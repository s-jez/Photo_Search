import React, {
  useState,
  FC,
  useMemo,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import InputText from "components/Input/InputText";
import { getPhotosByQuery } from "components/modules/services";
import debounce from "lodash.debounce";

const Form: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<{ query: string }[]>([]);
  const [isSuggestionsLoading, setIsSuggestionsLoading] = useState(false);

  const navigate = useNavigate();

  const getPhotosSuggestions = async (value: string) => {
    const matchesPhotos = await getPhotosByQuery(value);
    setSuggestions(matchesPhotos?.autocomplete || []);
    setIsSuggestionsLoading(false);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(getPhotosSuggestions, 300),
    // eslint-disable-next-line
    []
  );

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setSuggestions([]);

    if (value.length < 3) {
      return;
    }

    setIsSuggestionsLoading(true);
    debouncedChangeHandler(value);
  };

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSuggestHandler = (text: string) => {
    navigate(`/photos`, { state: { text: text } });
  };

  const handleKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      navigate(`/photos`, { state: { text: inputValue } });
    }
  };

  return (
    <form className="text-white rounded-md bg-white overflow-hidden">
      <InputText
        id=""
        classes="input"
        onChange={inputChangeHandler}
        placeholder="Search free high-resolution photos"
        onKeyDown={handleKeyDown}
      />
      <div className="absolute m-auto right-0 w-1/4 bg-white left-0 top-50 w-300 mt-2 rounded-md overflow-hidden">
        {inputValue
          ? suggestions?.map((suggestion, i) => {
              if (suggestion.query === null) {
                return null;
              }
              return (
                <div
                  className="text-black p-3 cursor-pointer hover:bg-gray-100"
                  key={i}
                  onClick={() => onSuggestHandler(suggestion.query)}
                >
                  {suggestion.query}
                </div>
              );
            })
          : null}

        {inputValue && inputValue.length < 3 ? (
          <div className="text-black text-base p-3 cursor-pointer">
            Minimum 3 characters
          </div>
        ) : null}

        {isSuggestionsLoading ? (
          <div className="text-black text-base p-3 cursor-pointer">
            Loading...
          </div>
        ) : null}

        {!suggestions.length &&
        !isSuggestionsLoading &&
        inputValue.length >= 3 ? (
          <div className="text-black text-base p-3 cursor-pointer">
            There is no hint!
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default Form;
