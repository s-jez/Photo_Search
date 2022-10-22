import { useEffect, useState } from "react";

type fetchProps = {
  url: string;
};

const useFetch = ({ url }: fetchProps) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };
    fetchData();
    console.log(data);
    // eslint-disable-next-line
  }, [url]);
};
export default useFetch;
