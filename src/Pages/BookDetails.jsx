import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useLoadBookData from "../Hooks/useLoadBookData";
import saveData from "../utils/SaveDataToLS";

const BookDetails = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  // load all the data
  const { bookData } = useLoadBookData();


  // find the target data
  useEffect(() => {
    if (bookData) {
      const targetBook = bookData.find((book) => book.bookId == id);
      setBook(targetBook);
    }
  }, [bookData, id]);

  // data will take some time to load, to avoid undefined error
  // set initial empty obj, it will update when data arrives
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
  const handleAddToRead =()=>{
    saveData('readingList',bookId)
  }

  // handle wishlist
  const handleAddToWishList =()=>{
    saveData('wishList',bookId)
  }

  return (
    <div className="grid lg:grid-cols-2 mt-4  lg:mt-6 gap-6 md:gap-8 lg:gap-10">
      <figure className="bg-base-200 p-5 md:p-10 lg:p-16 h-full w-full flex justify-center items-center flex-1">
        <img className="h-full lg:w-fit self-center  w-1/3" src={image} alt="Movie" />
      </figure>
      <div className="font-work h-fit flex-1 ">
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
          <button onClick={handleAddToRead} className="btn btn-ghost btn-outline border-base-300 font-semibold md:text-lg mr-2">
            Read
          </button>
          <button onClick={handleAddToWishList} className="btn bg-[#59c6d2] text-white hover:bg-white hover:text-[#59c6d2] hover:border-[#59c6d2] border-[1px] font-semibold md:text-lg">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
