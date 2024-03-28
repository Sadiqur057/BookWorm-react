import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";

const ListedBook = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book || {};

  return (
    <div className="p-3 md:p-5 lg:p-6 border-[1px] rounded-2xl my-4">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-3 md:col-span-5  justify-center bg-base-200 mx-auto rounded-xl md:h-full flex items-center w-full max-h-fit">
          <img
            className="px-10 md:px-12 py-4 md:p-6 w-[70%] md:w-full h-fit mx-auto flex "
            src={image}
            alt=""
          />
        </div>
        <div className="col-span-12 md:col-span-7 lg:col-span-8">
          <h2 className="text-[24px] md:text-2xl font-bold">{bookName}</h2>
          <p className="text-c-light font-medium md:text-lg font-work my-[10px] md:my-4">
            By : {author}
          </p>
          <div className="flex gap-3 lg:items-center flex-col lg:flex-row">
            <div className="flex items-center gap-3">
              <h3 className="font-bold">Tag</h3>
              {tags.map((tag) => (
                <p
                  key={tag}
                  className="text-c-primary bg-[#23be0a0d] py-2 px-4 rounded-2xl"
                >
                  #{tag}
                </p>
              ))}
            </div>
            <p className="flex items-center gap-2"><IoTimeOutline></IoTimeOutline> Year of Publishing: {yearOfPublishing}</p>
          </div>
          <div className="py-3  border-b-[1px] flex gap-4">
            <p className="flex items-center gap-2"><HiOutlineUsers></HiOutlineUsers> Publisher: {publisher}</p>
            <p className="flex items-center gap-2"><MdOutlineContactPage></MdOutlineContactPage>Page: {totalPages}</p>
          </div>
          <div className="flex mt-3 md:mt-4 gap-3 flex-col lg:flex-row">
            <div className="flex gap-3">
              <p className="px-4 py-2 bg-blue-100 text-blue-600 rounded-3xl">
                Category: {category}
              </p>
              <p className="px-4 py-2 bg-orange-100 text-yellow-600 rounded-3xl">
                Rating: {rating}
              </p>
            </div>
            <Link className="flex justify-start" to={`/book/${bookId}`}>
              <p className="px-4 py-2 bg-c-primary  text-white rounded-3xl">
                View Details
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ListedBook.propTypes = {
  book: PropTypes.object.isRequired,
};

export default ListedBook;
