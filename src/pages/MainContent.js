import React from "react";
import Form from "../components/Form/Form";
import styles from "../../src/App.module.css";
import { useEffect, useState } from "react";
import { UNSPLASH_KEY, UNSPLASH_URL } from "../utils/urls";

const MainContent = () => {
  const [randomPhoto, setRandomPhoto] = useState(
    "https://i.imgur.com/O0eAkcG.jpg"
  );
  useEffect(() => {
    fetch(UNSPLASH_URL + "/photos/random" + UNSPLASH_KEY)
      .then((response) => response.json())
      .then((data) => {
        setRandomPhoto(data.urls.full);
      });
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
