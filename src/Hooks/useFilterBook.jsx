import { useEffect, useState } from "react";
import useLoadBookData from "../Hooks/useLoadBookData";
import getData from "../utils/GetDataFromLS";

const useFilterBook = (category) => {
  const [loading, setLoading] = useState(false);
  const [readingBook, setReadingBook] = useState([]);
  const { bookData } = useLoadBookData();

  useEffect(() => {
    setLoading(true);
    const listBooksId = getData(category);
    if (listBooksId.length > 0) {
      const readBooks = bookData.filter((book) =>
        listBooksId.includes(book.bookId)
      );
      setReadingBook(readBooks);
    }

    setLoading(false);
  }, [bookData, category]);
  return { readingBook, loading };
};

export default useFilterBook;
