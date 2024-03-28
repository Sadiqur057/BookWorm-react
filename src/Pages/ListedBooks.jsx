import ListedBook from "../components/ListedBook";

import useFilterBook from "../Hooks/useFilterBook";
import { useState } from "react";

const ListedBooks = () => {
  const { readingBook: wishList, loading: loadingWishList } = useFilterBook("wishList");
  const { readingBook: readingList,loading: loadingReadingList } = useFilterBook("readingList");

  const [wishListDisplayData, setWishListDisplayData] = useState([]);
  const [readingListDisplayData, setReadingListDisplayData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("read");

  const sortData = (sortCategory, bookDatas) => {
    // let sortedData;
    console.log(sortCategory);
    if (sortCategory && bookDatas) {
      const sortedData = [...bookDatas].sort(
        (prev, curr) => curr[sortCategory] - prev[sortCategory]
      );
      return sortedData;
    }
  };

  const sort = (rating) => {
    const newWishListData = sortData(rating, wishList);
    setWishListDisplayData([...newWishListData]);
    const newReadListData = sortData(rating, readingList);
    setReadingListDisplayData([...newReadListData]);
  };

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    sort(selectedValue);
  };
  const handleTab = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div>
      <div className="py-5 md:py-8 w-full bg-base-200 rounded-xl">
        <h1 className="text-center font-bold text-2xl lg:text-3xl">Books</h1>
      </div>

      <div className="flex justify-center my-4 md:my-6">
        <select
          onChange={handleSortChange}
          className="select bg-c-primary text-white hover:bg-white hover:border-c-primary hover:text-c-primary font-bold focus:outline-none"
        >
          <option disabled selected className="hidden py-10">
            Sort By
          </option>
          <option
            value="rating"
            className="text-lg  py-10 text-black bg-base-200 px-10"
          >
            Rating
          </option>
          <option
            value="totalPages"
            className="text-lg  py-10 text-black bg-base-200 px-10"
          >
            Number of Pages
          </option>
          <option
            value="yearOfPublishing"
            className="text-lg  py-10 text-black bg-base-200 px-10"
          >
            Published year
          </option>
        </select>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read&nbsp;Books"
            onChange={() => handleTab("read")}
            checked={selectedTab === "read"}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300  py-4 md:py-6 border-x-0 border-b-0"
          >
            {loadingReadingList && (
              <div className="flex justify-center h-40 items-center">
                <span className="loading lg:scale-150 loading-dots loading-lg "></span>
              </div>
            )}
            {readingListDisplayData.length > 0
              ? readingListDisplayData.map((book) => (
                  <ListedBook key={book.bookId} book={book}></ListedBook>
                ))
              : readingList.map((book) => (
                  <ListedBook key={book.bookId} book={book}></ListedBook>
                ))}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist&nbsp;Books"
            onChange={() => handleTab("wish")}
            checked={selectedTab === "wish"}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300  py-4 md:py-6 border-x-0 border-b-0"
          >
            {loadingWishList && (
              <div className="flex justify-center h-40 items-center">
                <span className="loading lg:scale-150 loading-dots loading-lg "></span>
              </div>
            )}
            {wishListDisplayData.length > 0
              ? wishListDisplayData.map((book) => (
                  <ListedBook key={book.bookId} book={book}></ListedBook>
                ))
              : wishList.map((book) => (
                  <ListedBook key={book.bookId} book={book}></ListedBook>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
