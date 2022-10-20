import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import InputText from "../Input/InputText";
import inputStyles from "../Input/InputText.module.css";
import { UNSPLASH_KEY, UNSPLASH_URL } from "../../utils/urls";
//takie linki najlepiej zapisywać jako stałe i potem doklejać to co potrzebujemy 
const SEARCH_PHOTOS_URL = UNSPLASH_URL + "/search/photos/" + UNSPLASH_KEY + `&query=`;
// jeszcze lepiej zapisać to tak
// const SEARCH_PHOTOS_URL = `${UNSPLASH_URL}/search/photos/${UNSPLASH_KEY}/&query=`;

// jak najwięcej małych funckji :D 
const getPhotosByQuery = async (query) => {
	const res = await fetch(`${SEARCH_PHOTOS_URL}${query}`);
	const data = await res.json();
	return data.results;
};
// Ustaw formatowanie sobie na 1 tab
const Form = () => {
	const [inputValue, setInputValue] = useState("");
	const [suggestions, setSuggestions] = useState([]);

	const navigate = useNavigate();


	// https://medium.com/nerd-for-tech/debounce-your-search-react-input-optimization-fd270a8042b
	// Najlepiej robić tak że dopiero przy zmianie inputa pobierają się nowe sugestie - przeczytaj artykuł u góry i spróbuj zaimplementować debounca
	const inputChangeHandler = async (e) => {
		const inputValue = e.target.value;
		setInputValue(e.target.value);
		// early return
		if (inputValue.length <= 3) {
			return;
		}

		const matchesPhotos = await getPhotosByQuery(inputValue);

		setSuggestions(matchesPhotos);

	};

	const onSuggestHandler = (text) => {
		navigate(`/photos`, { state: { text: text.alt_description } });
	};

	const handleKeyDown = (ev) => {
		if (ev.keyCode === 13) {
			navigate(`/photos`, { state: { text: inputValue } });
		}
	};
	return (
		<form className={styles["form-input"]}>
			<InputText
				type="text"
				id=""
				value={inputValue}
				classes={inputStyles.input}
				onChange={inputChangeHandler}
				validate=""
				placeholder="Search free high-resolution photos"
				onKeyDown={handleKeyDown}
			/>
			{/* zamiast suggestions.length !== 0  mozna po prostu suggestions.length */}
			{suggestions.length !== 0 &&
				// eslint-disable-next-line
				suggestions.map((suggestion, i) => {
					// tutaj early return https://gomakethings.com/the-early-return-pattern-in-javascript/
					if (suggestion.alt_description !== null) {
						return (
							<div
								className={styles["input-suggestion"]}
								key={i}
								onClick={() => onSuggestHandler(suggestion)}
								to={"/photos"}
							>
								{suggestion.alt_description}
							</div>
						);
					}
				})}
			{suggestions.length === 0 && inputValue !== "" && (
				// czemu masz href w div?
				<div className={styles["input-suggestion"]} href="/">
					There is no hint!
				</div>
			)}
		</form>
	);
};

export default Form;
