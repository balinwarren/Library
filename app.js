let myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

const addBookToLibrary = (e) => {
  e.preventDefault();
  let title = document.getElementById('title');
  let author = document.getElementById('author');
  let pages = document.getElementById('pages');
  let isRead = document.getElementById('is-read');

  let book = new Book(title.value, author.value, pages.value, isRead.checked);
  myLibrary.push(book);
  
  closeBookForm();
}

//UI

const addBookBtn = document.getElementById('add-book');
const addBookForm = document.getElementById('add-book-form');
const addBookModal = document.getElementById('addBookModal');
const overlay = document.getElementById('overlay');
const bookSubmit = document.getElementById('bookSubmit');

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
bookSubmit.onclick = addBookToLibrary;