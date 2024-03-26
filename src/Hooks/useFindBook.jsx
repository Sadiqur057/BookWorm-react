import { useEffect, useState } from 'react';
import useLoadBookData from './useLoadBookData';

const useFindBook = ({id}) => {
  const [book, setBook] = useState([])

  const {bookData} = useLoadBookData();

  useEffect(()=>{
    const targetBook = bookData.find((book)=> book.id===id)
    setBook(targetBook);
  },[bookData,id])

  return {book}
};

export default useFindBook;