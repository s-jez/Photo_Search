import { getPhotos, getPhotosByQuery } from "components/modules/services";
import { UNSPLASH_KEY, UNSPLASH_URL } from "config/urls";
import debounce from "lodash.debounce";
import React, {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import InputText from "./InputText";

type SearchInputProps = {
  size: "small" | "big";
  value?: string;
  dataStateSetter?: Dispatch<SetStateAction<never[]>>;
  submitStateSetter?: any;
};

const SearchInput = ({
  size,
  value,
  dataStateSetter,
  submitStateSetter,
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState<string | any>(value);
  const [suggestions, setSuggestions] = useState<{ query: string }[]>([]);
  const [isSuggestionsLoading, setIsSuggestionsLoading] = useState(false);
  const [autoComplete, setAutoComplete] = useState<string[] | any>([]);
  const [focused, setFocused] = useState(false);

  const [dataState, setDataState] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  let SEARCH_PHOTOS_URL =
    UNSPLASH_URL + "/search/photos/" + UNSPLASH_KEY + `&query=${inputValue}`;

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsSubmit(false);
    setSuggestions([]);

    if (value.length < 3) {
      return;
    }
    setIsSuggestionsLoading(true);
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(inputChangeHandler, 300),
    // eslint-disable-next-line
    []
  );
  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (dataStateSetter) {
      dataStateSetter(dataState);
    }
  }, [dataStateSetter, dataState]);
  useEffect(() => {
    if (isSubmit) {
      submitStateSetter(isSubmit);
    }
  }, [submitStateSetter, isSubmit]);

  useEffect(() => {
    const getPhotosSuggestions = async () => {
      const matchesPhotos = await getPhotosByQuery(inputValue);
      setAutoComplete(matchesPhotos?.autocomplete);
      if (focused) {
        inputValue.length >= 3
          ? setSuggestions(autoComplete)
          : setSuggestions([]);
      }
      setIsSuggestionsLoading(false);
    };
    getPhotosSuggestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const onSuggestHandler = (text: string) => {
    navigate(`/photos`, { state: { text: text } });
    setIsSubmit(true);
  };
  const onSubmitHandler = (text: string) => {
    setSuggestions([]);
    setInputValue(text);
    setIsSubmit(true);
  };
  const handleKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      navigate(`/photos`, { state: { text: inputValue } });
      setIsSubmit(true);
    }
  };
  useEffect(() => {
    if (isSubmit) {
      getPhotos(SEARCH_PHOTOS_URL).then((data) => setDataState(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  return (
    <>
      {size === "big" ? (
        <InputText
          id=""
          classes="input"
          onChange={inputChangeHandler}
          placeholder="Search free high-resolution photos"
          onKeyDown={handleKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      ) : (
        <InputText
          id=""
          value={inputValue}
          onChange={inputChangeHandler}
          classes="w-128 h-30 input rounded-xl bg-gray-200 border-slate-400 mx-auto outline-slate-50 m-2"
          placeholder="Search for images..."
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
      <div
        className={
          size === "small"
            ? "absolute m-auto right-0 w-1/4 left-0 top-20 w-300 rounded-md"
            : "absolute m-auto right-0 w-1/4 bg-white left-0 top-50 w-300 mt-2 rounded-md overflow-hidden"
        }
      >
        {inputValue
          ? suggestions?.map((suggestion, i) => {
              if (suggestion.query === null) {
                return null;
              }
              return (
                <div
                  className={
                    size === "small"
                      ? "text-black p-3 cursor-pointer bg-white hover:bg-gray-100"
                      : "w-128 text-black bg-white p-3 cursor-pointer hover:bg-gray-100 shadow-lg shadow-gray-500/40"
                  }
                  key={i}
                  onClick={() => {
                    if (size === "small") {
                      onSubmitHandler(suggestion.query);
                    } else {
                      onSuggestHandler(suggestion.query);
                    }
                  }}
                >
                  {suggestion.query}
                </div>
              );
            })
          : null}
        {inputValue && inputValue.length < 3 ? (
          <div className="text-black text-base p-3 cursor-pointer bg-white">
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
        focused &&
        inputValue.length >= 3 ? (
          <div className="text-black text-base p-3 cursor-pointer bg-white">
            There is no hint!
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SearchInput;
