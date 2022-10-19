import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Form.module.css";
import InputText from "../Input/InputText";
import PhotoGallery from "../Photos/PhotoGallery";
import { UNSPLASH_KEY, UNSPLASH_URL } from "../../utils/urls";

const FormPhoto = () => {
  const { state } = useLocation();
  const { text } = state;
  const [inputValue, setInputValue] = useState(text);
  const [data, setData] = useState([]);

  let SEARCH_PHOTOS_URL =
    UNSPLASH_URL + "/search/photos/" + UNSPLASH_KEY + `&query=${inputValue}`;

  const formSubmitHandler = (ev) => {
    ev.preventDefault();
  };
  const formChangeHandler = (ev) => {
    setInputValue(ev.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(SEARCH_PHOTOS_URL);
      const data = await res.json();
      setData(data.results);
      console.log(data.results);
    };
    fetchData();
  }, [SEARCH_PHOTOS_URL]);
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <InputText
          type="text"
          id=""
          value={inputValue}
          onChange={formChangeHandler}
          classes={styles["input-search"]}
          validate=""
          placeholder="Search for images..."
        />
      </form>
      <div className={styles["form-gallery"]}>
        <h1>{inputValue}</h1>
        <span className={styles["form-result"]}>Results for: {inputValue}</span>
        <PhotoGallery data={data} />
      </div>
    </>
  );
};
export default FormPhoto;
