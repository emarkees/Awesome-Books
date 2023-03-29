const form = document.querySelector('form');
let books = [];

function handleSubmit(event) {
  // Prevent default form submission behavior
  event.preventDefault();
  
  // Get recipe title, author input values
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  
  if (title && author.length > 0) {
    const newBook = { title, author };
    books.push(newBook);
  }

  displayBooks();

  titleInput.value = '';
  authorInput.value = '';
    
}
form.addEventListener('submit', handleSubmit);

const bookList = document.querySelector('#book-list');

function displayBooks() {
  bookList.innerHTML = '';
  
  books.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.innerHTML = `
    
    <strong>Title: <h3>${book.title}</h3></strong>
   
    <strong>Author:</strong><p>${book.author}</p>
    
    <button class="delete-button" data-index="${index}">Delete</button>`;
    bookList.appendChild(bookDiv);
    
  });

}
