import styles from "./PhotoGallery.module.css";

// destrukturyzacja
const Photo = (props) => (
	<div className={styles.photo} onClick={props.showModal}>
		<img
			alt={props.data.alt?.description}
			src={props.data.urls.small}
		/>
	</div>
);

export default Photo;
