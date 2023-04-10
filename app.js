let myLibrary = [];
const cardContainer = document.getElementById('cardContainer');

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
  let haveRead = document.getElementById('is-read');

  let book = new Book(title.value, author.value, pages.value, haveRead.checked);
  myLibrary.push(book);
  
  closeBookForm();
  createCards();
}

const createCards = () => {
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.lastChild);
    }

    for(let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.dataset.index = i;
        
        let title = document.createElement('h3');
        title.innerHTML = '"' + myLibrary[i].title + '"';

        let author = document.createElement('h3');
        author.innerHTML = myLibrary[i].author;

        let pages = document.createElement('h3');
        pages.innerHTML = myLibrary[i].pages;

        let read = document.createElement('h3');
        if (myLibrary[i].haveRead == true) {
            read.innerHTML = 'Have Read';
        } else if (myLibrary[i].haveRead == false) {
            read.innerHTML = 'Not Read';
        }

        let remove = document.createElement('button');
        remove.innerHTML = "Remove";
        remove.classList.add('btn');
        remove.classList.add('remove-button');
        remove.onclick = () => removeCards(i);


        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        bookCard.appendChild(remove);

        cardContainer.appendChild(bookCard);
    }
}

const removeCards = (i) => {
    myLibrary.splice(i, 1);
    createCards();
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