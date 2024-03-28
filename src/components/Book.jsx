import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { CiStar } from "react-icons/ci";

const Book = ({book}) => {
  const {bookId, bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="bg-base-100 p-4 md:p-6 border-[1px] rounded-2xl h-fit">
        <figure className="bg-base-200 rounded-2xl h-[220px]">
          <img className="h-full mx-auto p-7" src={image} alt="book" />
        </figure>
        <div className="mt-4 md:mt-6">
          <div className="flex gap-3 ">
            {tags.map(tag=>(<p key={tag} className="text-c-primary bg-c-secondary py-2 px-4 rounded-2xl">
              {tag}
            </p>))}

          </div>
          <h2 className="text-xl md:text-2xl font-bold my-4">
            {bookName}
          </h2>
          <p className="text-c-light font-medium text-lg font-work mb-4 md:mb-5">
            By : {author}
          </p>
          <div className="text-c-light font-medium text-lg font-work flex justify-between pt-4 md:pt-5 border-dashed border-t-2">
            <p>{category}</p>
            <p className="flex items-center gap-2">{rating}<CiStar></CiStar></p>
          </div>
        </div>
      </div>
    </Link>
  );
};


Book.propTypes = {
  book: PropTypes.object.isRequired,
}

export default Book;
