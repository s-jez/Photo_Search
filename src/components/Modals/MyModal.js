import { createPortal } from "react-dom";
import Modal from "./Modal";

const MyModal = ({ handleClose, data }) =>
  createPortal(
    <Modal handleClose={handleClose} data={data} />,
    document.getElementById("modal")
  );
export default MyModal;
