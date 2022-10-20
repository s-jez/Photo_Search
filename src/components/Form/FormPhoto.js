import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Form.module.css";
import InputText from "../Input/InputText";
import PhotoGallery from "../Photos/PhotoGallery";
import { UNSPLASH_KEY, UNSPLASH_URL } from "../../utils/urls";

const FormPhoto = () => {
	// poczytaj o destrukturyzacji
	const { state: { text } } = useLocation();

	const [inputValue, setInputValue] = useState(text);
	const [data, setData] = useState([]);
	// jako osobna stała tak jak w Form.js ( jak używasz tego samego URL w dwóch komponentach możesz go zrobić w np /src/config/urls i importować stamtąd )
	let SEARCH_PHOTOS_URL =
		UNSPLASH_URL + "/search/photos/" + UNSPLASH_KEY + `&query=${inputValue}`;

	// lepiej już napisać albo samo e albo całe event 
	const formSubmitHandler = (ev) => {
		ev.preventDefault();
	};
	const formChangeHandler = (ev) => {
		setInputValue(ev.target.value);
	};
	// do osobnej funkcji tak jak w innych componentach
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(SEARCH_PHOTOS_URL);
			const data = await res.json();
			setData(data.results);
		};
		fetchData();
	}, [SEARCH_PHOTOS_URL]);
	return (
		<>
			<form onSubmit={formSubmitHandler}>
				<InputText
					type="text"
					id=""
					value={inputValue}
					onChange={formChangeHandler}
					classes={styles["input-search"]}
					validate=""
					placeholder="Search for images..."
				/>
			</form>
			<div className={styles["form-gallery"]}>
				<h1>{inputValue}</h1>
				<span className={styles["form-result"]}>Results for: {inputValue}</span>
				<PhotoGallery data={data} />
			</div>
		</>
	);
};
export default FormPhoto;
