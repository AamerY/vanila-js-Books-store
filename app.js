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
document.addEventListener("DOMContentLoaded", getBooks);
booksButton.addEventListener("click", addBook);
booksList.addEventListener("click", deleteBook);
booksList.addEventListener("click", editBook);
