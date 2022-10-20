import styles from "./PhotoGallery.module.css";

const Photo = ({ showModal, data }) => {
  return (
    <>
      <div className={styles.photo} onClick={showModal}>
        <img alt={data.alt?.description} src={data.urls.small}></img>
      </div>
    </>
  );
};
export default Photo;
