// Flatten object keys into an array so that we search the entire object by the input value
const flattenObjectValuesIntoArray = (arrOfObjs) => {
  let flattenedObj;
  const flattenedObjsArr = [];
  for (let obj = 0; obj < arrOfObjs.length; obj++) {
    const objValues = Object.values(arrOfObjs[obj]);
    flattenedObj = [...objValues.flat()]
    flattenedObjsArr.push(flattenedObj)
  }
  return flattenedObjsArr;
};

// Structure filtered books as HTML and return
const structureBookAsHtml = (book) => {
  const bookDiv = document.createElement("div");
  bookDiv.setAttribute('class', 'bookDiv');
  
  const bookTitle = document.createElement("h2");
  bookTitle.innerHTML = book.title;
  bookTitle.setAttribute('class', 'bookTitle');

  const bookAuthor = document.createElement("h3");
  bookAuthor.innerHTML = book.author;

  const bookTags = document.createElement("p");
  bookTags.innerHTML = book.tags.join(", ");

  bookDiv.append(bookTitle, bookAuthor, bookTags);
  
  return bookDiv;
};

const renderBooksToDom = (elements) => {
  const bookListContainer = document.querySelector("#bookList");
  bookListContainer.innerHTML = "";

  bookListContainer.append(...elements);
};

// Click handler for search button
const captureSearchValue = () => {
  const searchValue = document.getElementById('search-bar').value;
  return searchValue;
};

// Filter books based on search input
const filterBooks = (searchString, books) => {
  const flattenedBooks = flattenObjectValuesIntoArray(books);
  let filteredBooks = [];
  for (let i=0; i < flattenedBooks.length; i++) {
    if (flattenedBooks[i].includes(searchString)) {
      filteredBooks.push(books[i]);
    }
  }
  return filteredBooks;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (books) => {
  let structuredBooks = [];
  for (let book of books) {
    structuredBooks.push(structureBookAsHtml(book));
  }
  return structuredBooks;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  const searchValue = captureSearchValue();
  const filteredBooks = filterBooks(searchValue, books);
  const structuredBooks = structureBooksAsHtml(filteredBooks);
  renderBooksToDom(structuredBooks);
}

// Grab search button from the DOM
const searchBtn = document.getElementById('search-btn')

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });