document.addEventListener("DOMContentLoaded", (event) => {
  let formDisplay = document.querySelector('.form');
  let boton = document.querySelector('#add-button');


  const myLibrary = [];

  class Book {
    constructor(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
    };
  };
  
  function addBookToLibrary(book, array) {
  // do stuff here
    array.push(book)
  };


  function displayBook(book){
 // do stuff here
    
  };

  function showForm(){
    boton.addEventListener('click', ()=>{
      formDisplay.style.display = 'block';
    })
  };
  showForm();
});




