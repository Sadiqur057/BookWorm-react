import { useEffect, useState } from "react";

const useLoadBookData = () => {
  const [bookData, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch("/bookData.json");
      const bookData = await res.json();
      setData(bookData);
    };
    fetchData();
    setLoading(false);
  }, []);

  return { bookData, loading };
};

export default useLoadBookData;
