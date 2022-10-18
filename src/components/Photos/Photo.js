import styles from "../../styles/PhotoGallery.module.css";
const Photo = (props) => {
    const handlePhotoClick = () => {
        // show modal window
        console.log('clicked!');
    }
    return (
        <a className={styles.photo} onClick={handlePhotoClick} href="/">
            <img alt={props.data.alt?.description} src={props.data.urls.small}></img>
        </a>
    )
};
export default Photo;
