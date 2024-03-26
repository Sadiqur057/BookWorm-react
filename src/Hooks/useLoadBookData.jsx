import { useEffect, useState } from "react";


const useLoadBookData = () => {
  const [bookData, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await fetch ('/bookData.json');
      const bookData = await res.json();
      setData(bookData)
    }
    fetchData();
  },[])

  return {bookData}
};

export default useLoadBookData;