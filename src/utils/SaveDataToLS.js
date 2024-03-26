import getData from "./GetDataFromLS";

// check whether the data is already exist
const checkExist = (bookData, dataId) => {
  const exists = bookData.find((bookId) => bookId == dataId);
  return exists;
};

// save data based on category [ wishList, readingList]
const saveData = (dataCategory, dataId) => {
  // if category is readingList simply check existing from reading list. for unique data save to localStorage
  if (dataCategory === "readingList") {

     // load data from readingList
    const bookData = getData(dataCategory);

    // check existing in readingList
    const exists = checkExist(bookData, dataId);
    if (!exists) {

      // if unique data found then save to localStorage
      bookData.push(dataId);
      localStorage.setItem(dataCategory, JSON.stringify(bookData));
    } else {
      alert("ReadingList Exists");
    }
    // if category is wishList check whether it is already read, if not read check whether exists in wishList. if unique then save to wishList
  } else if(dataCategory === "wishList") {

    // load data from readingList
    const readingBookData = getData("readingList");

    // check existing in readingList
    const readingListExists = checkExist(readingBookData, dataId);
    if (!readingListExists) {

      // load data from wishList
      const wishListBookData = getData('wishList');

      // check existing in wishList
      const wishListExists = checkExist(wishListBookData, dataId);
      if (!wishListExists) {

        // if unique data found then add to localStorage
        wishListBookData.push(dataId);
        localStorage.setItem(dataCategory, JSON.stringify(wishListBookData));
      } else {
        alert("WishList Exists");
      }
    }else{
      alert("Reading done")
    }
  }
};

export default saveData;
