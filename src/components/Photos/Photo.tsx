import React from "react";
import styles from "./PhotoGallery.module.css";

type PhotoProps = {
  showModal: React.MouseEventHandler<HTMLDivElement>;
  photoIndex: number;
  data: {
    alt: {
      description: string;
    };
    urls: {
      small: string;
    };
  };
};

const Photo = ({ showModal, data, photoIndex }: PhotoProps) => {
  return (
    <>
      <div className={styles.photo} onClick={showModal}>
        <img alt={data.alt?.description} src={data.urls.small}></img>
      </div>
    </>
  );
};
export default Photo;
