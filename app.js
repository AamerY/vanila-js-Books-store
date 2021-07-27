setInterval(myclock, 1000);

function myclock() {
  let d = new Date();
  document.getElementById("clock").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

//Select DOM
const booksInput = document.querySelector(".books-input");
const booksButton = document.querySelector(".books-button");
const booksList = document.querySelector(".books-list");

//Event Listeners
booksButton.addEventListener("click", addBook);
booksList.addEventListener("click", handleClick);
//booksList.baddEventListener("click", editBook);
//booksList.addEventListener("click", function() {
//   addBook(val);
// });

//Functions

function addBook(e) {
  //Prevent natural behaviour
  // e.preventDefault();
  //Create books div
  const booksDiv = document.createElement("div");
  booksDiv.classList.add("books");
  //Create list
  const newBook = document.createElement("li");
  newBook.innerText = booksInput.value;

  //
  newBook.classList.add("books-item");
  booksDiv.appendChild(newBook);
  booksInput.value = "";
  //Create Edited Button
  const editdButton = document.createElement("button");
  editdButton.innerHTML = `<i class="fas fa-edit"></i>`;
  editdButton.classList.add("edit-btn");
  booksDiv.appendChild(editdButton);
  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  booksDiv.appendChild(trashButton);
  //attach final Book
  booksList.appendChild(booksDiv);
}

function handleClick(e) {
  const item = e.target;
  const books = item.parentElement;

  if (item.classList[0] === "trash-btn") {
    const books = item.parentElement;

    books.remove();
  }

  if (item.classList[0] === "edit-btn") {
    
   //var input = books.innerText;

    var input = document.createElement('input');
    input.type = "text";
    input.disabled = true;
    

    input.classList.add('books-input');

    

    console.log(item);
    console.log(books);
  }
}
