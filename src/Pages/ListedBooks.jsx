import { IoIosArrowDown } from "react-icons/io";
import ListedBook from "../components/ListedBook";

import useFilterBook from "../Hooks/useFilterBook";
import { useState } from "react";

const ListedBooks = () => {

  const wishList = useFilterBook("wishList");
  const readingList = useFilterBook("readingList");
  

  const [wishListDisplayData, setWishListDisplayData] = useState([]);
  const [readingListDisplayData, setReadingListDisplayData] = useState([]);
  const [selectedTab, setSelectedTab] = useState('read');


  const sortData = (sortCategory,bookDatas) => {
    // let sortedData;
    console.log(sortCategory)
    if(sortCategory && bookDatas){
      const sortedData = [...bookDatas].sort((prev,curr)=> curr[sortCategory] - prev[sortCategory] )
      return sortedData
    }
  };


  const sort = (rating) => {
    const newWishListData = sortData(rating, wishList);
    setWishListDisplayData([...newWishListData])
    const newReadListData = sortData(rating, readingList);
    setReadingListDisplayData([...newReadListData])
  };

  const handleTab=(tabName)=>{
    setSelectedTab(tabName);
  }


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
          <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-40 bg-base-200">
            <li>
              <a onClick={() => sort("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => sort("totalPages")}>Number of pages</a>
            </li>
            <li>
              <a onClick={() => sort("yearOfPublishing")}>Published year</a>
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
            onChange={() => handleTab('read')}
            checked={selectedTab === 'read'}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300  py-4 md:py-6 border-x-0 border-b-0"
          >
            {readingListDisplayData.length>0?readingListDisplayData.map((book) => (
              <ListedBook key={book.bookId} book={book}></ListedBook>
            )):readingList.map((book) => (
              <ListedBook key={book.bookId} book={book}></ListedBook>
            ))}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist&nbsp;Books"
            onChange={() => handleTab('wish')}
            checked={selectedTab === 'wish'}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300  py-4 md:py-6 border-x-0 border-b-0"
          >
            {wishListDisplayData.length>0?wishListDisplayData.map((book) => (
              <ListedBook key={book.bookId} book={book}></ListedBook>
            )):wishList.map((book) => (
              <ListedBook key={book.bookId} book={book}></ListedBook>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
