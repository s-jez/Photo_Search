import styles from "./Modal.module.css";

const Modal = (props) => {
  // eslint-disable-next-line
  const { handleClose, show, children } = props;
  return (
    <div className={styles.modal}>
      <div>{children}</div>
      <div>
        <button onClick={handleClose}>Go back</button>
      </div>
    </div>
  );
};
export default Modal;
