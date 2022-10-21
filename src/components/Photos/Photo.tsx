import React from "react";
import styles from "./PhotoGallery.module.css";

const Photo = ({ showModal, data, photoIndex }) => {
  return (
    <>
      <div className={styles.photo} onClick={showModal}>
        <img alt={data.alt?.description} src={data.urls.small}></img>
      </div>
    </>
  );
};
export default Photo;
