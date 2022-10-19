import ReactDOM from "react-dom";
import Modal from "./Modal";

const MyModal = (props) =>
  ReactDOM.createPortal(
    <Modal handleClose={props.handleClose} data={props.data} />,
    document.getElementById('modal')
  );
export default MyModal;
