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
      <div className="h-48 min-h-screen text-white">
        <div
          className="flex flex-col items-center justify-center h-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${randomPhoto})` }}
        >
          <div className="flex flex-col w-full md:w-auto items-center w-2/4 p-24 bg-black/[.6] rounded-lg shadow-lg ">
            <h1 className="text-5xl font-bold">Unsplash</h1>
            <p className="mx-auto m-3">
              The internet's source of{" "}
              <a
                href="https://unsplash.com/"
                className="font-bold"
                target="_blank"
                rel="noreferrer"
              >
                freely-usable images
              </a>
            </p>
            <p className="mx-auto m-3">Powered by creators everywhere.</p>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
