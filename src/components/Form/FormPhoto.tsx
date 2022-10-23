import React, { useEffect, useState, useMemo, FC } from "react";
import { useLocation } from "react-router-dom";
import InputText from "components/Input/InputText";
import PhotoGallery from "components/Photos/PhotoGallery";
import { UNSPLASH_KEY, UNSPLASH_URL } from "config/urls";
import "./Form.css";
import debounce from "lodash.debounce";

const FormPhoto: FC = () => {
  const {
    state: { text },
  } = useLocation();
  const [inputValue, setInputValue] = useState(text);
  const [data, setData] = useState([]);

  let SEARCH_PHOTOS_URL =
    UNSPLASH_URL + "/search/photos/" + UNSPLASH_KEY + `&query=${inputValue}`;

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

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(SEARCH_PHOTOS_URL);
      const data = await res.json();
      setData(data.results);
    };
    fetchData();
  }, [SEARCH_PHOTOS_URL]);
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <InputText
          id=""
          onChange={debouncedChangeHandler}
          classes="input-search"
          placeholder="Search for images..."
        />
      </form>
      <div className="form-gallery">
        <h1>{inputValue}</h1>
        <span className="form-result">Results for: {inputValue}</span>
        <PhotoGallery data={data} />
      </div>
    </>
  );
};
export default FormPhoto;
