const container = document.querySelector(".container");
var inputValue = document.querySelector(".input");
const add = document.querySelector(".add-btn");

class item {
  constructor(name) {
    this.createItem(name);
  }
  createItem(name) {
    var itemBox = document.createElement("div");
    itemBox.classList.add("item");

    var input = document.createElement("input");
    input.type = "text";
    input.disabled = true;
    input.value = name;
    input.classList.add("item_input");

    var edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = `<i class="fas fa-edit"></i>`;
    edit.addEventListener("click", () => this.editBook(input, name, edit));

    var remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = `<i class="fas fa-trash"></i>`;
    remove.addEventListener("click", () => this.removeBook(itemBox, name));

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(edit);
    itemBox.appendChild(remove);
  }

  editBook(input, name, edit) {
    if (input.disabled == true) {
      input.disabled = !input.disabled;
      edit.innerHTML = `<i class="fas fa-save"></i>`;
    } else {
      input.disabled = !input.disabled;

      edit.innerHTML = `<i class="fas fa-edit"></i>`;
    }
  }

  removeBook(itemBox, name) {
    itemBox.parentNode.removeChild(itemBox);
  }
}

add.addEventListener("click", addBook);

function addBook() {
  if (inputValue.value != "") {
    new item(inputValue.value);

    inputValue.value = "";
  }
}

new item("sport");
