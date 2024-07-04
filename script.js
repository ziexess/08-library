const myLibrary = [];
let counter = 0;
// function constructor for books
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = counter;
};

// Prevent actually submitting anything
const submit = document.querySelector(".submit");
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
    counter ++;
    let book = new Book(title, author, pages, status.value);
    myLibrary.push(book);
    createBookCard();
  }
  else
  if ((title !== "") && (author !== "") && (pages !== "") && !(status.checked)) {
    counter ++;
    let book = new Book(title, author, pages, "not read");
    myLibrary.push(book);
    createBookCard();
  }
//   reset inputs after each new book addition
  const form = document.querySelector("form");
  form.reset();
}

function createBookCard () {
    let i = myLibrary[(myLibrary.length)-1];
        const cards = document.querySelector(".cards");
        const card = document.createElement("div");
        card.className = "card";
        card.id = `a${counter}`;
        card.innerHTML = `<div class="info">
                        <p class="title">${i.title}</p>
                        <p class="author">${i.author}</p>
                        <p class="pages">${i.pages}</p>
                        <p class="status">${i.status}</p>
                    </div>
                    <div class="buttons">
                        <button class="${counter}" id="read">Read</button>
                        <button class="${counter}" id="remove">Remove</button>
                    </div>`
        cards.appendChild(card);
}

// Remove Cards on click
document.addEventListener("click", (event) => {
    if (event.target.id === "remove") {
        document.getElementById(`a${event.target.className}`).remove();
    }
})
// Toggle Read on click
document.addEventListener("click", (event) => {
    if (event.target.id === "read") {
       let toggle = document.querySelector(`#a${event.target.className} .status`);
       if (toggle.textContent === "read") {
        toggle.textContent = "not read"
       }
       else { toggle.textContent = "read"} 
    }
    return
})