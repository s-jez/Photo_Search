import { useEffect, useState } from "react";
import InputText from "../InputText";
import styles from "../../styles/InputText.module.css";
import PhotoGallery from "./PhotoGallery";
import formStyles from "../../styles/Form.module.css";

const PhotoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  let SEARCH_PHOTOS_URL = `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_API_KEY}&query=${inputValue}`;
  const inputChangeHandler = (ev) => {
    setInputValue(ev.target.value);
  };
  const formSubmitHandler = () => {};

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(SEARCH_PHOTOS_URL);
      const data = await res.json();
      setData(data.results);
      console.log(data);
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
          classes={styles["input-search"]}
          onChange={inputChangeHandler}
          validate=""
          placeholder="Search for images..."
        />
      </form>
      <div className={formStyles["form-gallery"]}>
        <h1>{inputValue}</h1>
        <span className={formStyles["form-result"]}>
          Results for: {inputValue}
        </span>
        <PhotoGallery />
      </div>
    </>
  );
};
export default PhotoForm;
