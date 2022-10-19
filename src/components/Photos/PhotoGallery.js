import Photo from "./Photo";
import styles from "./PhotoGallery.module.css";
import Modal from "../Modals/Modal";
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
        <Modal handleClose={showModal} data={props.data[photoIndex]}></Modal>
      )}
    </>
  );
};
export default PhotoGallery;
