import { useEffect, useState } from "react";
require("dotenv").config();

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, [url]);
};
export default useFetch;
