function addFunction() {
    document.getElementById("edit").innerHTML = "add presed.";
  }

  function showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.body');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    // Vanish in 3 seconds
    //setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  // Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {

  // Prevent actual submit
  e.preventDefault();

  UI.showAlert('Book Added', 'success');
});