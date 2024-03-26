import { IoIosArrowDown } from "react-icons/io";
import ListedBook from "../components/ListedBook";

import useFilterBook from "../Hooks/useFilterBook";




const ListedBooks = () => {


const readingList = useFilterBook('readingList')
console.log("readinglist",readingList.length)

const wishList = useFilterBook('wishList')
console.log("wishlist", wishList.length)

  return (
    <div>
      <div className="py-5 md:py-8 w-full bg-base-200 rounded-xl">
        <h1 className="text-center font-bold text-2xl lg:text-3xl">Books</h1>
      </div>
      <div className="flex justify-center my-4 md:my-6">
        <details className="dropdown">
          <summary className="m-1 btn bg-c-primary text-white hover:bg-white hover:border-c-primary hover:text-c-primary">
            Sort By <IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-base-200">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read&nbsp;Books"
            checked
            
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300  py-4 md:py-6 border-x-0 border-b-0"
          >
            {
              readingList.map(book=><ListedBook key={book.id} book={book}></ListedBook>)
            }
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist&nbsp;Books"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300  py-4 md:py-6 border-x-0 border-b-0"
          >
                        {
              wishList.map(book=><ListedBook key={book.id} book={book}></ListedBook>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
