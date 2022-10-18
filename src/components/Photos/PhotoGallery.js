import Photo from "./Photo";
import styles from "./PhotoGallery.module.css";
import Modal from "../Modals/Modal";
import { useState } from "react";

const PhotoGallery = (props) => {
  const [modalShow, setModalShow] = useState(false);
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
              <Photo data={item} id={item.id} showModal={showModal} />
            </li>
          ))}
        </ul>
      ) : (
        <Modal handleClose={showModal}>
          <div style={{ position: "relative", height: "auto" }}>
            <span>{props.data[photoIndex].user.username}</span>
            <img src={props.data[photoIndex].user.profile_image.small} alt="" />
            <div>
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
              <p>{props.data[0].likes}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
export default PhotoGallery;
