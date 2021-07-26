setInterval(myclock, 1000);

function myclock() {
  let d = new Date();
  document.getElementById("clock").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

//Select DOM
const booksInput = document.querySelector(".books-input");
const booksButton = document.querySelector(".books-button");
const booksList = document.querySelector(".books-list");


//Event Listeners
booksButton.addEventListener("click", addBook);
booksList.addEventListener("click", deleteBook);
booksList.addEventListener("click", editBook);


//Functions

function addBook(e) {
    //Prevent natural behaviour
    e.preventDefault();
    //Create books div
    const booksDiv = document.createElement("div")
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
  
  function deleteBook(e) {
   
   
  }
  
  function editBook(e) {
   
  }
  
  
  
  