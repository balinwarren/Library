let myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary() {
  
}

//UI

const addBookBtn = document.getElementById('add-book');
const addBookForm = document.getElementById('add-book-form');
const addBookModal = document.getElementById('addBookModal');
const overlay = document.getElementById('overlay');

const openBookForm = () => {
    addBookForm.reset();
    addBookModal.classList.add('active');
    overlay.classList.add('active');
}

const closeBookForm = () => {
    addBookModal.classList.remove('active');
    overlay.classList.remove('active');
}

addBookBtn.onclick = openBookForm;
overlay.onclick = closeBookForm;