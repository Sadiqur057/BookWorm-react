import { useEffect, useState } from "react";
import useLoadBookData from "../Hooks/useLoadBookData";
import getData from "../utils/GetDataFromLS";


const useFilterBook = (category) => {
  const [readingBook, setReadingBook] = useState([]);

  const { bookData } = useLoadBookData();

  useEffect(()=>{
    const listBooksId = getData(category);
    if(listBooksId.length>0){
      const readBooks = bookData.filter(book=> listBooksId.includes(book.bookId))
      setReadingBook(readBooks)
    }
  },[bookData,category])
  return readingBook
};

export default useFilterBook;