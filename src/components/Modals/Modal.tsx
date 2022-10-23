import React from "react";
import { createPortal } from "react-dom";
import ModalContent, { ModalProps } from "./ModalContent";

const Modal = ({ handleClose, data }: ModalProps) =>
  createPortal(
    <ModalContent handleClose={handleClose} data={data} />,
    document.getElementById("modal")!
  );
export default Modal;
