import Photo from "./Photo";
import styles from "./PhotoGallery.module.css";
import MyModal from "../Modals/MyModal";
import { useState } from "react";

const PhotoGallery = (props) => {
  const [modalShow, setModalShow] = useState(false);
  // eslint-disable-next-line
  const [photoIndex, setPhotoIndex] = useState(0);

  const showModal = () => {
    setModalShow(() => !modalShow);
  };

  const handleClickHandler = (i) => {
    setPhotoIndex(i)
  }
  
  return (
    <>
      {!modalShow ? (
        <ul className={styles.gallery}>
          {props.data?.map((item, i) => (
            <li key={i} onClick={() => handleClickHandler(i)}>
              <Photo data={item} photoIndex={i} showModal={showModal} />
            </li>
          ))}
        </ul>
      ) : (
        <MyModal handleClose={showModal} data={props.data[photoIndex]}/>
      )}
    </>
  );
};
export default PhotoGallery;
