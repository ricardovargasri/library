document.addEventListener("DOMContentLoaded", (event) => {
  let formDisplay = document.querySelector('.form');
  let boton = document.querySelector('#add-button');
  let dialog = document.querySelector('#dialog');
  let resetButton = document.querySelector('#reset-button');

  myLIbrary = [];


  class Book {
    constructor(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
    };
  };

  boton.addEventListener('click', ()=>{
    dialog.show();
  });

  formDisplay.addEventListener('submit', (e)=>{
    e.preventDefault();

    NewBook = new Book(
      e.target.title.value,
      e.target.author.value,
      e.target.pages.value,
      e.target.readed.checked
    );
    myLIbrary.push(NewBook);
    displayBook(NewBook);
    reset();
    

    /* console.log(myLIbrary.length);

    console.log(myLIbrary[myLIbrary.length - 1]); */


    dialog.close();
    e.target.reset();
  });
  function displayBook(book){
    const bookContainer = document.querySelector('#books-container');
    
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    //book title
    const bookTitle = document.createElement('h2');
    bookTitle.innerText = book.title;
    bookCard.appendChild(bookTitle);

    //book's author
    const bookAuthor = document.createElement('p');
    bookAuthor.innerText = book.author;
    bookCard.appendChild(bookAuthor);

    //book's pages
    const bookPages = document.createElement('p');
    bookPages.innerText = book.pages;
    bookCard.appendChild(bookPages);


    const bookReaded = document.createElement('p');
    bookReaded.innerText = book.readed? 'libro leido' : 'libro no leido';
    bookCard.appendChild(bookReaded);

    bookContainer.appendChild(bookCard);
    

  
  }
  function reset(){
    resetButton.addEventListener('click', ()=>{
      location.reload();
    })

    myLIbrary.length != 0 ? resetButton.style.display = 'block': resetButton.style.display = 'none';
  };
  
  
  

});




