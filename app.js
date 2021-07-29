const container = document.querySelector(".container");
var title = document.querySelector(".input_title");
var author = document.querySelector(".input_author");
var price = document.querySelector(".input_price");
const add = document.querySelector(".add-btn");

if(window.localStorage.getItem("books") == undefined){
  var books = [];
  window.localStorage.setItem("books", JSON.stringify(books));
}

var booksEX = window.localStorage.getItem("books");
var books = JSON.parse(booksEX);

class item {
  constructor(title, author, price) {
    this.createItem(title, author, price);
  }
  createItem(title, author, price) {
    var itemBox = document.createElement("div");
    itemBox.classList.add("item");

    var inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.disabled = true;
    inputTitle.value = title;
    inputTitle.classList.add("item_input");

    var inputAuthor = document.createElement("input");
    inputAuthor.type = "text";
    inputAuthor.disabled = true;
    inputAuthor.value = author;
    inputAuthor.classList.add("item_input");

    var inputPrice = document.createElement("input");
    inputPrice.type = "text";
    inputPrice.disabled = true;
    inputPrice.value = price;
    inputPrice.classList.add("item_input");

    var edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = `<i class="fas fa-edit"></i>`;
    edit.addEventListener("click", (e) =>
      this.editBook(
        inputTitle,
        
        inputAuthor,
        inputPrice,
        
        title,
        
        author,
        price,
        
        edit
      )
    );

    var remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = `<i class="fas fa-trash"></i>`;
    remove.addEventListener("click", (e) => this.removeBook(itemBox,title));

    container.appendChild(itemBox);

    itemBox.appendChild(inputTitle);
    itemBox.appendChild(inputAuthor);
    itemBox.appendChild(inputPrice);
    itemBox.appendChild(edit);
    itemBox.appendChild(remove);
  }

  editBook(inputTitle, inputAuthor, inputPrice,title, author, price, edit) {
    if (inputTitle.disabled == true) {
      inputTitle.disabled = !inputTitle.disabled;
      inputAuthor.disabled = !inputAuthor.disabled;
      inputPrice.disabled = !inputPrice.disabled;

      edit.innerHTML = `<i class="fas fa-save"></i>`;
    } else {
      inputTitle.disabled = !inputTitle.disabled;
      inputAuthor.disabled = !inputAuthor.disabled;
      inputPrice.disabled = !inputPrice.disabled;

      let indexof = books.indexOf(title);
      books[indexof] = inputTitle.value;
      books[indexof+1] = inputAuthor.value;
      books[indexof+2] = inputPrice.value;
      window.localStorage.setItem("books", JSON.stringify(books));

      edit.innerHTML = `<i class="fas fa-edit"></i>`;
    }
  }

  removeBook(itemBox,title) {
    itemBox.parentNode.removeChild(itemBox);
    let index = books.indexOf(title);
    books.splice(index, 3);
    window.localStorage.setItem("books", JSON.stringify(books));
  }
}

add.addEventListener("click", addBook);

function addBook() {
  if (title.value !== "" || author.value !== "" || price.value !== "") {
    new item(title.value, author.value, price.value);

    books.push(title.value,author.value,price.value);
    window.localStorage.setItem("books", JSON.stringify(books));

    title.value = "";
    author.value = "";
    price.value = "";
  }
}

for (var v = 0 ; v < books.length ; v+=3){
  new item(books[v],books[v+1],books[v+2]);
}

//new item("sport","is","good");
