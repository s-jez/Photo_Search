import React from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

type ModalProps = {
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

const Modal = ({ handleClose, data }: ModalProps) =>
  createPortal(
    <ModalContent handleClose={handleClose} data={data} />,
    document.getElementById("modal")!
  );
export default Modal;
