import React from "react";
import "./Modal.css";

export type ModalProps = {
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
  data: {
    urls: {
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
  };
};

const ModalContent = ({ handleClose, data }: ModalProps) => {
  // eslint-disable-next-line
  return (
    <div className="modal">
      <div
        style={{ position: "relative", height: "auto" }}
      >
        <div className="photo__modal--avatar">
            <img src={data.user.profile_image.small} alt=""/>
            <span>{data.user.username}</span>
        </div>
        <div className="photo__modal">
          <img
            src={data.urls.full}
            alt={data.alt_description}
            width={600}
            height={600}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="photo__modal--likes">
          <span>Likes</span>
          <p>{data.likes}</p>
        </div>
      </div>
      <div>
        <button onClick={handleClose}>Go back</button>
      </div>
    </div>
  );
};
export default ModalContent;
