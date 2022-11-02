import React from "react";

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
    <img
      alt={data.alt?.description}
      src={data.urls.small}
      className="photo flex justify-center my-5 cursor-pointer object-cover hover:cursor-zoom-in"
      onClick={showModal}
    ></img>
  );
};
export default Photo;
