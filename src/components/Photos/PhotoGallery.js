import Photo from "./Photo";
import styles from "./PhotoGallery.module.css";
import MyModal from "../Modals/MyModal";
import { useState } from "react";

// tutaj mozemy uzyc destruktyrazcji
const PhotoGallery = ({ data }) => {
	const [modalShow, setModalShow] = useState(false);
	// eslint-disable-next-line
	const [photoIndex, setPhotoIndex] = useState(0);

	// w takim przypadku lepiej korzystać z prevState można także zapisać jako: setModalShow(prev => !prev);
	const toggleModal = () => setModalShow(prevState => !prevState);

	// mozna prosciej zapisać tak:
	const handleClickHandler = i => setPhotoIndex(i);

	// spróbuj ostylować to tak jak jest na unsplash czyli 3 kolumny, a zdjęcia mają auto height

	// mozna prosciej zrobić tak:
	if (modalShow) {
		return (
			<MyModal handleClose={toggleModal} data={data?.[photoIndex]} />
		)
	}

	return (
		<ul className={styles.gallery}>
			{data?.map((item, i) => (
				<li key={i} onClick={() => handleClickHandler(i)}>
					<Photo data={item} photoIndex={i} showModal={toggleModal} />
				</li>
			))}
		</ul>
	);
};
export default PhotoGallery;
