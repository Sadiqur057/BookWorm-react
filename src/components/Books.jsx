import Book from "./Book";
import useLoadBookData from "../Hooks/useLoadBookData";

const Books = () => {
  const { bookData } = useLoadBookData();
  return (
    <div className="mt-10 md:mt-16 lg:mt-20">
      <h1 className="text-center font-bold text-2xl md:text-4xl mb-6 md:mb-10">
        Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
