import React from "react";
import Photo from "./Photo";
import Modal from "components/Modals/Modal";
import { useState, FC } from "react";

const PhotoGallery: FC<PhotoData> = ({ data }) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
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
