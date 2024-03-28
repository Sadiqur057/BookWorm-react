import { useEffect, useState } from "react";
import useLoadBookData from "../Hooks/useLoadBookData";
import getData from "../utils/GetDataFromLS";

const useFilterBook = (category) => {
  const [loading, setLoading] = useState(false);
  const [readingBook, setReadingBook] = useState([]);
  const { bookData,loading:isLoading } = useLoadBookData();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const listBooksId = getData(category);
        if (listBooksId.length > 0) {
          const readBooks = bookData.filter((book) =>
            listBooksId.includes(book.bookId)
          );
          setReadingBook(readBooks);
        }
      } finally {
        if(!isLoading){
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [bookData, category,isLoading]);
  return { readingBook, loading };
};

export default useFilterBook;
