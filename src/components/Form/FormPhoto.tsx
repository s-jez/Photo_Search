import React, { useEffect, useState, useMemo, FC } from "react";
import { useLocation } from "react-router-dom";
import InputText from "components/Input/InputText";
import PhotoGallery from "components/Photos/PhotoGallery";
import { UNSPLASH_KEY, UNSPLASH_URL } from "config/urls";
import debounce from "lodash.debounce";
import { getPhotos, getPhotosByQuery } from "components/modules/services";

const FormPhoto: FC = () => {
  const {
    state: { text },
  } = useLocation();

  const [inputValue, setInputValue] = useState(text);
  const [data, setData] = useState([]);
  const [isSubmit, setIsSubmit] = useState(true);

  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [autoComplete, setAutoComplete] = useState<any[]>([]);

  const [focused, setFocused] = useState(false);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
  };
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsSubmit(false);
  };
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  (async () => {
    const getPhotosSuggestions = async () => {
      const matchesPhotos = await getPhotosByQuery(inputValue);
      setAutoComplete(matchesPhotos?.autocomplete);
      if (focused) {
        inputValue.length >= 3
          ? setSuggestions(autoComplete)
          : setSuggestions([]);
      }
    };
    getPhotosSuggestions();
  })();
  const onSuggestHandler = (text: string) => {
    setSuggestions([]);
    setInputValue(text);
    setIsSubmit(true);
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
    // eslint-disable-next-line
  }, []);

  let SEARCH_PHOTOS_URL =
    UNSPLASH_URL + "/search/photos/" + UNSPLASH_KEY + `&query=${inputValue}`;

  useEffect(() => {
    if (!isSubmit) {
      return;
    }
    getPhotos(SEARCH_PHOTOS_URL).then((data) => setData(data));
  });
  return (
    <div className="mx-auto max-w-screen-xl">
      <form
        onSubmit={formSubmitHandler}
        className="text-white rounded-md overflow-hidden flex justify-center p-5"
      >
        <div className="flex flex-col">
          <InputText
            id=""
            value={inputValue}
            onChange={inputChangeHandler}
            classes="w-128 h-30 input rounded-xl bg-gray-200 border-slate-400 mx-auto outline-slate-50 m-2"
            placeholder="Search for images..."
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {suggestions.length > 0 &&
            // eslint-disable-next-line
            suggestions?.map((suggestion, i) => {
              if (suggestion.query === null) {
                return null;
              }
              return (
                <div
                  className="w-128 text-black bg-white p-3 cursor-pointer hover:bg-gray-100 shadow-lg shadow-gray-500/40"
                  key={i}
                  onClick={() => onSuggestHandler(suggestion.query)}
                >
                  {suggestion.query}
                </div>
              );
            })}
          {suggestions.length === 0 && focused && inputValue.length > 0 && (
            <div className="text-black text-base p-3 cursor-pointer shadow-lg shadow-gray-500/40">
              There is no hint!
            </div>
          )}
        </div>
      </form>
      <PhotoGallery data={data} />
    </div>
  );
};
export default FormPhoto;
