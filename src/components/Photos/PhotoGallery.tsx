import React from "react";
import Photo from "./Photo";
import Modal from "components/Modals/Modal";
import { useState } from "react";

export type PhotoDataProps = {
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

const PhotoGallery = ({ data }: PhotoDataProps) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  // eslint-disable-next-line
  const [photoIndex, setPhotoIndex] = useState(0);

  const toggleModal = () => setShouldShowModal((prevState) => !prevState);

  const handleClickHandler = (i: number) => setPhotoIndex(i);

  if (shouldShowModal) {
    return <Modal handleClose={toggleModal} data={data[photoIndex]} />;
  }
  return (
    <ul className="max-w-screen-xl gap-y-2.5 list-none columns-3">
      {data?.map((item, i) => (
        <li key={i} onClick={() => handleClickHandler(i)}>
          <Photo data={item} photoIndex={i} showModal={toggleModal} />
        </li>
      ))}
    </ul>
  );
};
export default PhotoGallery;
