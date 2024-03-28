import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useLoadBookData from "../Hooks/useLoadBookData";
import saveData from "../utils/SaveDataToLS";

const BookDetails = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  // load all the data
  const { bookData,loading:bookLoading } = useLoadBookData();

  // find the target data
  useEffect(() => {
    setLoading(true);
    try {
      if (bookData) {
        const targetBook = bookData.find((book) => book.bookId == id);
        setBook(targetBook);
      }
    } finally {
      setLoading(false);
    }
  }, [bookData, id]);

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book || {};
  console.log(bookName);

  // handle read
  const handleAddToRead = () => {
    saveData("readingList", bookId);
  };

  // handle wishlist
  const handleAddToWishList = () => {
    saveData("wishList", bookId);
  };

  if (loading || bookLoading) {
    return (
      <div className="flex justify-center h-40 items-center">
        <span className="loading lg:scale-150 loading-dots loading-lg "></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row my-4  lg:my-6 gap-6 md:gap-8 lg:gap-10">
      <figure className="bg-base-200 p-5 md:p-10 lg:p-16  flex justify-center items-center lg:w-1/2 rounded-lg">
        <img
          className="lg:max-h-[500px] lg:w-fit self-center  w-[45%] "
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="font-work h-fit  lg:w-1/2">
        <h2 className="text-xl md:text-4xl font-bold mb-3 md:mb-5">
          {bookName}
        </h2>
        <p className="text-c-light font-medium text-lg ">By : {author}</p>
        <p className="text-c-light font-medium text-lg py-2 border-y-[1px] my-3 md:my-4">
          {category}
        </p>
        <p>
          <span className="font-bold">Review : </span>
          {review}
        </p>
        <div className="flex gap-3 items-center mt-4 md:mt-6 lg:mt-10 pb-2 md:pb-4 border-b-[1px]">
          <h3 className="font-bold">Tag</h3>
          {tags &&
            tags.map((tag) => (
              <p
                key={tag}
                className="text-c-primary bg-c-secondary py-2 px-4 rounded-2xl"
              >
                {tag}
              </p>
            ))}
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {/* row 1 */}
              <tr className="border-b-0">
                <td className="pl-0">Number of Pages</td>
                <th>{totalPages}</th>
              </tr>
              <tr className="border-b-0">
                <td className="pl-0">Publisher</td>
                <th className="col-span-3">{publisher}</th>
              </tr>
              <tr className="border-b-0">
                <td className="pl-0">Year of Publishing</td>
                <th>{yearOfPublishing}</th>
              </tr>
              <tr className="border-b-0">
                <td className="pl-0">Rating</td>
                <th>{rating}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 md:mt-6">
          <button
            onClick={handleAddToRead}
            className="btn btn-ghost btn-outline border-base-300 font-semibold md:text-lg mr-2"
          >
            Read
          </button>
          <button
            onClick={handleAddToWishList}
            className="btn bg-[#59c6d2] text-white hover:bg-white hover:text-[#59c6d2] hover:border-[#59c6d2] border-[1px] font-semibold md:text-lg"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
