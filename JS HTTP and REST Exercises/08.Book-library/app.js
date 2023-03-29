function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/'
  let loadBtn = document.getElementById('loadBooks')
  booksContainer = document.getElementsByTagName('tbody')[0]
  loadBtn.addEventListener('click', bookLoader);
  formHeader = document.querySelector('#form > h3');
  let editBookId = null;
  const [titleInput, authorInput] = Array.from(document.querySelectorAll('#form > input'))
  const submitButton = document.querySelector('#form > button')
  submitButton.addEventListener('click', bookCreate);

  

  function bookLoader(){
      booksContainer.innerHTML = ''
      fetch (BASE_URL)
        .then(res => res.json())
        .then((data) => {
          for (const bookId in data) {
            bookAuthor = data[bookId].author
            bookTitle = data[bookId].title
            tr = document.createElement('tr')
            title = document.createElement('td')
            author = document.createElement('td')
            btnContainer = document.createElement('td')
            edit = document.createElement('button')
            del = document.createElement('button')

            title.textContent= bookTitle
            author.textContent = bookAuthor
            edit.textContent = 'Edit'
            del.textContent = 'Delete'

            edit.addEventListener('click',() => {
              editBookId = bookId
              formHeader.textContent = 'Edit FORM';
              submitButton.textContent = 'Save';
              titleInput.value = data[bookId].title
              authorInput.value = data[bookId].author
            })

            del.addEventListener('click',() => {
              httpHeaders = {
                method: 'DELETE',
              }
              fetch(BASE_URL+bookId, httpHeaders)
              bookLoader()
            })

            btnContainer.appendChild(edit)
            btnContainer.appendChild(del)
            tr.appendChild(title)
            tr.appendChild(author)
            tr.appendChild(btnContainer)
            booksContainer.appendChild(tr)
          }
        })
    }
  
  async function bookCreate() {
    // event.preventDefault()
    const title = titleInput.value
    const author = authorInput.value
    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({title,author})
    }

    let url = BASE_URL

    if (formHeader.textContent === 'Edit FORM') {
      httpHeaders.method = 'PUT'
      url += editBookId
    }

    const resData = await fetch(url, httpHeaders);
    console.log(resData)
    bookLoader();
    if (formHeader.textContent  === 'Edit FORM'){
      formHeader.textContent = 'FORM'
      submitButton.textContent = 'Submit'
    }
    titleInput.value = '';
    authorInput.value = '';
  }

}

attachEvents();