document.addEventListener("DOMContentLoaded", (event) => {

const myLibrary = [];

class Book {
  constructor(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
  }
}
let book1 = new Book('Satanas', 'MarioMendoza', 200, 'yes');
let book2 = new Book('Coronel', 'gabo', 300, 'yes');
let book3 = new Book('pythonist', 'indian man', 380, 'yes')


function addBookToLibrary(book, array) {
  // do stuff here
  array.push(book)
};
addBookToLibrary(book1, myLibrary);
addBookToLibrary(book2, myLibrary);
addBookToLibrary(book3, myLibrary);
console.log(myLibrary[2]);

function displayBook(book){
  const bookDetail = document.querySelector('.bookDetails');
  bookDetail.innerHTML = `
  <h1>${book.title} </h1>
  <p>Author: ${book.author}</p>
  <p>Pages: ${book.pages}</p>
  <p>Read: ${book.readed}</p>
  `
};

displayBook(book3);

});




