//Book Class: Represents a Book
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI class: handle UI tasks
class UI{
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'Book One'
                author: 'John Doe'
                isbn: '564785'
            },
            {
                title: 'Book Two'
                author: 'Jane Doe'
                isbn: '584786'
            },
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" clss="btn btn-dander btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
}
//Store Class: handles Storage

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //Prevent the actual submit
    e.preventDefault();

    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Instatiate book
    const book = new Book(title,author,isbn);

   //Add book to UI
   UI.addBookToList(book);

   //Method to clear the input fields
   UI.clearFields();
});
//Event: Remove a Book 