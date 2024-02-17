document.addEventListener("DOMContentLoaded", (event) => {
  let formDisplay = document.querySelector('.form');
  let boton = document.querySelector('#add-button');
  let dialog = document.querySelector('#dialog');

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
    console.log(myLIbrary[myLIbrary.length - 1]);


    dialog.close();
    e.target.reset();
  }) 

});




