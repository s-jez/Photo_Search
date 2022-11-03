import { useEffect, useState } from "react";
// Chyba nigdzie z tego nie korzystasz? Możesz to usunąć
const useFetch = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };
    
    fetchData();
    // console log do wywalania
    console.log(data);
    // eslint-disable-next-line
  }, [url]);

};
export default useFetch;
