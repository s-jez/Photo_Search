import SearchInput from "components/Input/SearchInput";
import React, { FC } from "react";

const Form: FC = () => {
  return (
    <form className="text-white rounded-md bg-white overflow-hidden">
      <SearchInput size="big" value="" />
    </form>
  );
};

export default Form;
