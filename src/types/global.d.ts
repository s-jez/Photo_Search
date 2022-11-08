
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

  type InputProps = {
    value?: number | string | readonly string[] | undefined;
    id?: string;
    placeholder?: string;
    classes?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    ref?: RefObject<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
  };

  type ModalProps = {
    handleClose: MouseEventHandler<HTMLElement>;
    data: PhotoData.data;
  };
}

