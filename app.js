// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.title}</td>
    <td>${book.title}</td>
    <td>${book.title}</td>
    `;

    console.log(row);
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit',
    function(e) {
        // Get form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value

        // Instantiate Book
        const book = new Book(title, author, isbn);

        // Instantiate Book
        const UI = new UI();

        // Add book to list
        ui.addBookToList(book);


        console.log(book);


        e.preventDefault();
    });