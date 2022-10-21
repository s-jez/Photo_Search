import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Form.module.css";
import InputText from "../Input/InputText";
import PhotoGallery from "../Photos/PhotoGallery";
import { getPhotosByQuery } from "../modules/services";
import { UNSPLASH_KEY, UNSPLASH_URL } from "../../utils/urls";

const FormPhoto = () => {
  const {
    state: { text },
  } = useLocation();
  const [inputValue, setInputValue] = useState(text);
  const [data, setData] = useState([]);

  let SEARCH_PHOTOS_URL =
    UNSPLASH_URL + "/search/photos/" + UNSPLASH_KEY + `&query=${inputValue}`;

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  const formChangeHandler = (e) => {
    setInputValue(e.target.value);
    const matchesPhotos = getPhotosByQuery(SEARCH_PHOTOS_URL);
    setData(matchesPhotos);
  };
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
