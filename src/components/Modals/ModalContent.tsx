import React from "react";
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
    <div
      className="fixed	w-full h-full bg-black/[.8] cursor-zoom-out"
      onClick={handleClose}
    >
      <div className="absolute w-4/5 h-3/4 py-6 m-18 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white max-w-screen-2xl max-h-[60rem]">
        <div className="relative">
          <button className="cursor-pointer">
            <AiOutlineClose size={22} className="mx-5" />
          </button>
          <div className="flex m-15 cursor-default	">
            <img
              src={data.user.profile_image.small}
              className="cursor-default mr-5 ml-5 rounded-full"
              alt=""
            />
            <span className="cursor-default mt-1">{data.user.username}</span>
          </div>
          <div className="flex justify-center mt-5 flex-wrap m-auto cursor-default">
            <img
              src={data.urls.full}
              alt={data.alt_description}
              width={600}
              height={600}
              className="cursor-default max-h-[32rem] object-cover"
            />
          </div>
          <div className="m-5">
            <span className="cursor-default">Likes</span>
            <p className="cursor-default">{data.likes}</p>
            <a
              href={data.urls.full}
              className="cursor-default"
              target="_blank"
              rel="noreferrer"
              download
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalContent;
