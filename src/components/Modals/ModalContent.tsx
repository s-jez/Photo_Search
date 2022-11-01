import React from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";

export type ModalProps = {
  handleClose: React.MouseEventHandler<HTMLElement>;
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
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal">
        <div className="relative">
          <button className="cursor-pointer">
            <AiOutlineClose size={22} className="mx-5" />
          </button>
          <div className="photo__modal--avatar">
            <img src={data.user.profile_image.small} alt="" />
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
            <a href={data.urls.full} target="_blank" rel="noreferrer" download>
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalContent;
