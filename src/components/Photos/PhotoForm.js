import { useState} from "react";
import InputText from "../InputText";
import styles from "../../styles/InputText.module.css";
import PhotoGallery from "./PhotoGallery";
import formStyles from "../../styles/Form.module.css";

const PhotoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const formSubmitHandler = (ev) => {
    ev.preventDefault();
  }
  const formChangeHandler = (ev) => {
    setInputValue(ev.target.value);
  }
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
      <div className={formStyles["form-gallery"]}>
        <h1>{inputValue}</h1>
        <span className={formStyles["form-result"]}>
          Results for: {inputValue}
        </span>
        <PhotoGallery data={data} />
      </div>
    </>
  );
};
export default PhotoForm;
