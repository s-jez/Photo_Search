import React from "react";
import Form from "components/Form/Form";
import { useEffect, useState } from "react";
import { getRandomPhoto } from "components/modules/services";
import "App.css";

const MainContent = () => {
  const [randomPhoto, setRandomPhoto] = useState(
    "https://i.imgur.com/O0eAkcG.jpg"
  );
  useEffect(() => {
    (async () => {
      const randomPhoto = await getRandomPhoto();
      setRandomPhoto(randomPhoto.urls.full);
    })();
  }, []);
  return (
    <>
      <div className="App">
        <div
          className="App__card"
          style={{ backgroundImage: `url(${randomPhoto})` }}
        >
          <div className="Card">
            <h1 className="text-3xl font-bold">Unsplash</h1>
            <p className="m-5 mx-auto">
              The internet's source of{" "}
              <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
                freely-usable images
              </a>
            </p>
            <p className="m-2 mx-auto">Powered by creators everywhere.</p>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
