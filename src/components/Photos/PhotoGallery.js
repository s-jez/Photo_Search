import Photo from "./Photo";
import styles from "../../styles/PhotoGallery.module.css";

const PhotoGallery = (props) => {
    const data = props.data;
    console.log(data);
    return (
        <ul className={styles.gallery}>
            {data.map((item, i) =>
                <li key={i}><Photo data={item} id={item.id}/></li>
            )}
        </ul>
    )
};
export default PhotoGallery;
