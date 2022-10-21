import Photo from "./Photo";
import styles from "./PhotoGallery.module.css";
import MyModal from "../Modals/MyModal";
import { useState } from "react";

const PhotoGallery = (props) => {
  const [modalShow, setModalShow] = useState(false);
  // eslint-disable-next-line
  const [photoIndex, setPhotoIndex] = useState(0);

  const toggleModal = () => setModalShow((prevState) => !prevState);

  const handleClickHandler = (i) => setPhotoIndex(i);

  if (modalShow) {
    return <MyModal handleClose={toggleModal} data={props.data[photoIndex]} />;
  }
  return (
    <ul className={styles.gallery}>
      {props.data?.map((item, i) => (
        <li key={i} onClick={() => handleClickHandler(i)}>
          <Photo data={item} photoIndex={i} showModal={toggleModal} />
        </li>
      ))}
    </ul>
  );
};
export default PhotoGallery;
