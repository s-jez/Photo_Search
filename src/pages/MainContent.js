import React from "react";
import Form from "../components/Form/Form";
import styles from "../../src/App.module.css";
import GetRandomPhoto from "../components/Photos/GetRandomPhoto";

const MainContent = () => {
  return (
    <>
      <GetRandomPhoto/>
      <div className={styles.App}>
        <div className={styles["App__card"]}>
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
    </>
  );
};

export default MainContent;
