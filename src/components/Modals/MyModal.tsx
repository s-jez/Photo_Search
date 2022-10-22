import React from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

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

const MyModal = ({ handleClose, data }: ModalProps) =>
  createPortal(
    <Modal handleClose={handleClose} data={data} />,
    document.getElementById("modal")!
  );
export default MyModal;
