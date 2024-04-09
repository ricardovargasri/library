document.addEventListener('DOMContentLoaded', ()=>{
  const myLibrary = [];

  class Book {
    constructor(title, author, large) {
      this.title = title;
      this.author = author;
      this.large = large;

    }
    static renderBook(library){
      let container = document.querySelector('#library-container');

      container.innerHTML = '';
      library.forEach(book =>{
        let bookElement = document.createElement('div');
        bookElement.className = 'books';

        bookElement.innerHTML = `
        <p>title: ${book.title}</p>
        <p>author: ${book.author}</p>
        <p>large: ${book.large}</p> 
        `;
        container.appendChild(bookElement);
      });
    };
  };

  var form = document.querySelector('#book-form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const author = document.querySelector('#author');
    const title = document.querySelector('#title');
    const large = document.querySelector('#pagesNum');

    let newBook = new Book(title.value, author.value, large.value)
    myLibrary.push(newBook);
    console.log(myLibrary);

    author.value = '';
    title.value = '';
    large.value = '';

    Book.renderBook(myLibrary);
  }); 
});