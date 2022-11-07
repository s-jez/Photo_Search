import React, { useState, FC, FormEvent } from "react";
import { useLocation } from "react-router-dom";
import PhotoGallery from "components/Photos/PhotoGallery";
import SearchInput from "components/Input/SearchInput";

const FormPhoto: FC = () => {
  const {
    state: { text },
  } = useLocation();

  const [data, setData] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  return (
    <div className="mx-auto max-w-screen-xl">
      <form
        onSubmit={formSubmitHandler}
        className="text-white rounded-md overflow-hidden flex justify-center p-5"
      >
        <div className="flex flex-col">
          <SearchInput
            size="small"
            value={text}
            dataStateSetter={setData}
            submitStateSetter={setIsSubmit}
          />
        </div>
      </form>
      <PhotoGallery data={data} />
    </div>
  );
};
export default FormPhoto;
