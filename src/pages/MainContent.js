import React from "react";
import Form from "../components/Form/Form";
import styles from "../../src/App.module.css";
import { useEffect, useState } from "react";
import { UNSPLASH_KEY, UNSPLASH_URL } from "../utils/urls";
// page wrzucaj także w folder
// pages/MainContent/MainContent.js
// albo pages/MainContent/index.js
// i wtedy style których tutaj używasz wrzuć do pliku css w tym folderze

//https://medium.com/geekculture/making-life-easier-with-absolute-imports-react-in-javascript-and-typescript-bbdab8a8a3a1

// takie funckje możesz przenieść do src/modules/services.js
const getRandomPhoto = async () => {
	const res = await fetch(UNSPLASH_URL + "/photos/random" + UNSPLASH_KEY);
	return res.json()
}

const MainContent = () => {
  const [randomPhoto, setRandomPhoto] = useState(
    "https://i.imgur.com/O0eAkcG.jpg"
  );

  useEffect(() => {
	// Poczytaj o Self-Invoking Functions
	(async () => {
		const randomPhoto = await getRandomPhoto();
		setRandomPhoto(randomPhoto.urls.full);
	})();
	
  }, []);
  return (
    <>
      <div className={styles.App}>
        <div
          className={styles["App__card"]}
          style={{ backgroundImage: `url(${randomPhoto})` }}
        >
          <div className={styles["Card"]}>
            <h1>Unsplash</h1>
            <p>
              The internet's source of{" "}
              <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
                freely-usable images
              </a>
            </p>
            <p>Powered by creators everywhere.</p>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
