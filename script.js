const myLibrary = [];
// function constructor for books
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return `${title} by ${author} is ${pages} pages, status: ${status}`
  };
}

const submit = document.querySelector(".submit");
// Prevent actually submitting anything
submit.addEventListener("click", (event) => {event.preventDefault();
    addBookToLibrary();
})
function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let status = document.querySelector("#status");
//   Prevent empty enteries
  if ( (title !== "") && (author !== "") && (pages !== "") && (status.checked)){
    let book = new Book(title, author, pages, status.value);
    myLibrary.push(book);
    createBookCard();
  }
  else
  if ((title !== "") && (author !== "") && (pages !== "") && !(status.checked)) {
    let book = new Book(title, author, pages, "not read");
    myLibrary.push(book);
    createBookCard();
  }
}

function createBookCard () {
    let i = myLibrary[(myLibrary.length)-1];
        const cards = document.querySelector(".cards");
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<div class="info">
                        <p class="title">${i.title}</p>
                        <p class="author">${i.author}</p>
                        <p class="pages">${i.pages}</p>
                        <p class="status">${i.status}</p>
                    </div>
                    <div class="buttons">
                        <button>Read</button>
                        <button>Remove</button>
                    </div>`
        cards.appendChild(card);
     
}