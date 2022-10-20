import { createPortal } from "react-dom";
import Modal from "./Modal";
// lepiej zimportować samo createPortal
// tutaj też można użyć destrukturyzacji
const MyModal = (props) =>

  createPortal(
    <Modal handleClose={props.handleClose} data={props.data} />,
    document.getElementById('modal')
  );
export default MyModal;
