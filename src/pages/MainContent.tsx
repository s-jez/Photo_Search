import React from "react";
import Form from "components/Form/Form";
import { useEffect, useState } from "react";
import { getRandomPhoto } from "components/modules/services";

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
