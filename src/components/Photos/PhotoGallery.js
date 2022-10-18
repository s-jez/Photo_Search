import Photo from "./Photo";
import styles from "./PhotoGallery.module.css";
import Modal from "../Modals/Modal";
import { useState } from "react";

const PhotoGallery = (props) => {
  const [modalShow, setModalShow] = useState(false);
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
            {/* <span>{props.data?.user.username}</span> */}
            {/* <img src={props.data?.user.profile_image.small} alt="" />
            <div>
              <img
                src={props.data?.urls.full}
                alt={props.data?.alt_description}
                width={600}
                height={600}
              />
            </div>
            <div>
              <span>Likes</span>
              <p>{props.data?.likes}</p>
            </div> */}
          </div>
        </Modal>
      )}
    </>
  );
};
export default PhotoGallery;
