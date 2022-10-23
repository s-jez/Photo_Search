import React from "react";
import Photo from "./Photo";
import Modal from "../Modals/Modal";
import { useState } from "react";

type PhotoProps = {
  data: {
    alt: {
      description: string;
    };
    urls: {
      small: string;
      full: string;
    };
    alt_description: string;
    likes: number;
    user: {
      profile_image: {
        small: string;
      };
      username: string;
    };
  }[];
};

const PhotoGallery = ({ data }: PhotoProps) => {
  const [modalShow, setModalShow] = useState(false);
  // eslint-disable-next-line
  const [photoIndex, setPhotoIndex] = useState(0);

  const toggleModal = () => setModalShow((prevState) => !prevState);

  const handleClickHandler = (i: number) => setPhotoIndex(i);

  if (modalShow) {
    return <Modal handleClose={toggleModal} data={data[photoIndex]} />;
  }
  return (
    <ul className="gallery">
      {data?.map((item, i) => (
        <li key={i} onClick={() => handleClickHandler(i)}>
          <Photo data={item} photoIndex={i} showModal={toggleModal} />
        </li>
      ))}
    </ul>
  );
};
export default PhotoGallery;
