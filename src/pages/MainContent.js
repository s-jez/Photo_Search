import React from "react";
import Form from "../components/Form/Form";
import styles from "../../src/App.module.css";
import getRandomPhoto from "../components/Photos/getRandomPhoto";
import { useEffect, useState } from "react";

const MainContent = () => {
  const [randomPhoto, setRandomPhoto] = useState("");
  useEffect(() => {
    setRandomPhoto(getRandomPhoto);
  }, [randomPhoto]);
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
