import Photo from "./Photo";
import styles from "./PhotoGallery.module.css";

const PhotoGallery = (props) => {
  return (
    <ul className={styles.gallery}>
      {props.data?.map((item, i) => (
        <li key={i}>
          <Photo data={item} id={item.id} />
        </li>
      ))}
    </ul>
  );
};
export default PhotoGallery;
