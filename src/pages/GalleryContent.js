import FormPhoto from "../../src/components/Form/FormPhoto";
import PhotoGallery from "../../src/components/Photos/PhotoGallery";
import GlobalStyle from "../globalStyles";

const GalleryContent = () => {
  return (
    <div>
      <GlobalStyle />
      <FormPhoto />
      <PhotoGallery />
    </div>
  );
};
export default GalleryContent;
