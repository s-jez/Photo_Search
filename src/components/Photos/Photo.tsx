import React from "react";
import "./PhotoGallery.css";

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
      <div className="photo flex justify-center" onClick={showModal}>
        <img
          alt={data.alt?.description}
          src={data.urls.small}
          className="w-450 h-450 object-cover"
        ></img>
      </div>
    </>
  );
};
export default Photo;
