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
  return (
    <>
      {!modalShow ? (
        <ul className={styles.gallery}>
          {props.data?.map((item, i) => (
            <li key={i}>
              <Photo data={item} photoIndex={i} showModal={showModal} />
            </li>
          ))}
        </ul>
      ) : (
        <Modal handleClose={showModal}>
          <div
            style={{ position: "relative", height: "auto" }}
            className={styles["photo-modal"]}
          >
            <div className={styles["photo-avatar"]}>
              <img
                src={props.data[photoIndex].user.profile_image.small}
                alt=""
              />
              <span>{props.data[photoIndex].user.username}</span>
            </div>
            <div className={styles.photo}>
              <img
                src={props.data[photoIndex].urls.full}
                alt={props.data[photoIndex].alt_description}
                width={600}
                height={600}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <span>Likes</span>
              <p>{props.data[photoIndex].likes}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
export default PhotoGallery;
