import styles from "../../styles/PhotoGallery.module.css";
import { useState, useEffect } from "react";
import Modal from "../Modals/Modal";
const Photo = (props) => {
    const [modalShow, setModalShow] = useState();
    const handlePhotoClick = () => {
        setModalShow(true);
    }
    const handleCloseModal = () => {
        setModalShow(false)
    }   
    useEffect(() => {
        if(modalShow) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }, [modalShow])
    return (
        <>
        {!modalShow ?
            <div className={styles.photo} onClick={handlePhotoClick}>
                <img alt={props.data.alt?.description} src={props.data.urls.small}></img>
            </div>
            : <Modal handleClose={handleCloseModal}>
                <h1>{props.data?.alt_description}</h1>
                <p>{props.data?.description}</p>
                <p>Likes: {props.data?.likes}</p>
            </Modal>
        }
        </>
    )
};
export default Photo;
