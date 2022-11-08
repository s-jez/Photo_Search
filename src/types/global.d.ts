
export {};
declare global {
  type PhotoData = {
    data: {
      alt: {
        description: string;
      };
      urls: {
        small: string;
        full: string;
      };
      alt_description: string;
      likes: number;
      user: {
        profile_image: {
          small: string;
        };
        username: string;
      };
    }[];
  };
  type PhotoProps = {
    data: PhotoData.data;
    showModal: React.MouseEventHandler<HTMLDivElement>;
    photoIndex: number;
  };
}
