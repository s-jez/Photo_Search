import { getPhotos, getPhotosByQuery } from "components/modules/services";
import { SEARCH_PHOTOS_URL } from "config/urls";
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
};

const SearchInput = ({ size, value, dataStateSetter }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState<string | undefined>(value);
  const [suggestions, setSuggestions] = useState<{ query: string }[]>([]);
  const [isSuggestionsLoading, setIsSuggestionsLoading] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);
  const [focused, setFocused] = useState(false);
  const [, setDataState] = useState([]);

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
    setIsSubmit(false);
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

  const setData = (data: never[]) => {
    setDataState(data);
    dataStateSetter?.(data);
  };

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
    getPhotos(SEARCH_PHOTOS_URL + inputValue).then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isSubmit) {
      return;
    }
    getPhotos(SEARCH_PHOTOS_URL + inputValue).then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  let noHintValue =
    !suggestions.length &&
    !isSuggestionsLoading &&
    focused &&
    inputValue!.length >= 3;

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
                    size === "small"
                      ? onSubmitHandler(suggestion.query)
                      : onSuggestHandler(suggestion.query);
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
          <div className="text-black text-base p-3 cursor-pointer bg-white">
            Loading...
          </div>
        ) : null}

        {noHintValue ? (
          <div className="text-black text-base p-3 cursor-pointer bg-white">
            There is no hint!
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SearchInput;
