import styles from "./PhotoGallery.module.css";

const Photo = (props) => {
  return (
    <>
      <div className={styles.photo} onClick={props.showModal}>
        <img
          alt={props.data.alt?.description}
          src={props.data.urls.small}
        ></img>
      </div>
    </>
  );
};
export default Photo;
