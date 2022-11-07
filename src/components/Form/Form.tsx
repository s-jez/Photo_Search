import React, { FC } from "react";
import SearchInput from "components/Input/SearchInput";

const Form: FC = () => {
  return (
    <form className="text-white rounded-md bg-white overflow-hidden">
      <SearchInput size="big" value="" />
    </form>
  );
};

export default Form;
