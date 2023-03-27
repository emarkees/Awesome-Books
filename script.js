const details =
[
 
  {
    id: 0,
    title: 'Ben',
    author: 'Charles Bobs'
  },
  {
    id: 1,
    title: 'Ben',
    author: 'Charles Bobs'
  },
  {
    id: 2,
    title: 'Ben',
    author: 'Charles Bobs'
  },
  {
    id: 3,
    title: 'Ben',
    author: 'Charles Bobs'
  },
] 


const awesome = document.querySelector('.yemi')

let html = '';

details.forEach((data) => {
  html += 
  ` <div class='books'>
      <h3 class="book-title">${data.title}</h3>
      <h3 class="book-author">${data.author}</h3>
      <button class="add-btn">Remove</button>
    </div>
    <hr class="bar"></hr>
    
  `;

  awesome.innerHTML = html;
}); 


function sub() {
  const input = document.getElementsByName('array[]');

  for (const i = 0; i <input.length; i++) {
    const a = input[i];
    k = k + "array["+ i + "].value=" + a.value + "";
  }

  document.getElementById('yemi').innerHTML = k;
  document.getElementById('por').innerHTML = k;
}


/*const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');

const localObject = { title: '', author: ''};
*/