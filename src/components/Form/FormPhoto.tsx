import React, { useEffect, useState, useMemo, FC } from "react";
import { useLocation } from "react-router-dom";
import InputText from "components/Input/InputText";
import PhotoGallery from "components/Photos/PhotoGallery";
import { UNSPLASH_KEY, UNSPLASH_URL } from "config/urls";
import debounce from "lodash.debounce";
import { getPhotos } from "components/modules/services";

const FormPhoto: FC = () => {
  const {
    state: { text },
  } = useLocation();
  const [inputValue, setInputValue] = useState(text);
  const [data, setData] = useState([]);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(formChangeHandler, 300),
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
    getPhotos(SEARCH_PHOTOS_URL).then((data) => setData(data));
  });
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <InputText
          id=""
          onChange={debouncedChangeHandler}
          classes="w-96 h-6 rounded-xl bg-gray-100 border-slate-400"
          placeholder="Search for images..."
        />
      </form>
      <div className="mx-auto max-w-screen-xl">
        <div className="font-bold text-xl m-5">Results for: {inputValue}</div>
        <PhotoGallery data={data} />
      </div>
    </>
  );
};
export default FormPhoto;
