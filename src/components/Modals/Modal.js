import styles from "./Modal.module.css";

const Modal = (props) => {
  // eslint-disable-next-line
  const { handleClose, data } = props;
  return (
    <div className={styles.modal}>
      <div
        style={{ position: "relative", height: "auto" }}
        className={styles["photo-modal"]}
      >
        <div className={styles["photo-avatar"]}>
          <img src={data.user.profile_image.small} alt="" />
          <span>{data.user.username}</span>
        </div>
        <div className={styles.photo}>
          <img
            src={data.urls.full}
            alt={data.alt_description}
            width={600}
            height={600}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
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
export default Modal;
