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
// Możesz tutaj dodać FC i photoIndex do usunięcia bo nie jest wykorzystywany
const Photo = ({ showModal, data, photoIndex }: PhotoProps) => (
    <img
      alt={data.alt?.description}
      src={data.urls.small}
      className="photo flex justify-center my-5 cursor-pointer object-cover hover:cursor-zoom-in"
      onClick={showModal}
    ></img>
);

export default Photo;
