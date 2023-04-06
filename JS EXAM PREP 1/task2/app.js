window.addEventListener("load", solve);

function solve() {
  let preview = document.getElementById('preview-list')
  publishBtn = document.getElementById('form-btn')
  publishBtn.addEventListener("click", previewLoader)

  function previewLoader() {
    storyInfo = document.createElement('li')
    storyInfo.className = 'story-info'
    article = document.createElement('article')
    h4 = document.createElement('h4')
    age = document.createElement('p')
    title = document.createElement('p')
    genre = document.createElement('p')
    text = document.createElement('p')
    save = document.createElement('button')
    save.className='save-btn'
    save.addEventListener("click", saveLoader)
    edit = document.createElement('button')
    edit.className='edit-btn'
    edit.addEventListener('click', editLoader)
    del = document.createElement('button')
    del.addEventListener('click', delLoader)
    del.className='delete-btn'
    
    firstnameInput = document.getElementById('first-name')
    lastnameInput = document.getElementById('last-name')
    ageInput = document.getElementById('age')
    titleInput = document.getElementById('story-title')
    genreInput = document.getElementById('genre')
    textInput =  document.getElementById('story')

    firstname = firstnameInput.value
    lastname = lastnameInput.value
    ageSave = ageInput.value
    titleSave = titleInput.value
    genreSave = genreInput.value
    textSave = textInput.value
    h4.textContent = `Name: ${firstname} ${lastname}`
    
    age.textContent = `Age: ${ageInput.value}`
    title.textContent = `Title: ${titleInput.value}`
    genre.textContent = `Genre: ${genreInput.value}`
    text.textContent = `Genre: ${textInput.value}`
    save.textContent = 'Save Story'
    edit.textContent = 'Edit Story'
    del.textContent = 'Delete Story'
    article.appendChild(h4)
    article.appendChild(age)
    article.appendChild(title)
    article.appendChild(genre)
    article.appendChild(text)
    storyInfo.appendChild(article)
    storyInfo.appendChild(save)
    storyInfo.appendChild(edit)
    storyInfo.appendChild(del)
    if(firstname === '' || lastname === '' || ageSave === '' || titleSave === '' || genreSave === '' || textSave === ''){ publishCheck = false} else {preview.appendChild(storyInfo)} 

    firstnameInput.value = ''
    lastnameInput.value = ''
    ageInput.value = ''
    titleInput.value = ''
    genreInput.value = ''
    textInput.value = ''
    if (publishCheck) {publishBtn.disabled = true}
    publishCheck = true



    function editLoader() {
      storyInfo.remove()
      firstnameInput.value = firstname
      lastnameInput.value = lastname
      ageInput.value = ageSave
      titleInput.value = titleSave
      genreInput.value = genreSave
      textInput.value = textSave
      publishBtn.disabled = false

    }

    function delLoader() {
      storyInfo.remove()
      publishBtn.disabled = false
    }

    function saveLoader() {
      main = document.getElementById('main')
      h1 = document.createElement('h1')
      h1.textContent = 'Your scary story is saved!'
      main2 = document.createElement('div')
      main.parentNode.appendChild(main2)
      main.remove()
      main2.id='main'
      main2.appendChild(h1)
    }
  }
}


function creatElement(type, parentNode, content, classes, id, attributes, useInnerHTML) {
  const htmlElement = document.createElement(type);
  if (content && useInnerHTML) {
    htmlElement.innerHTML = content;
  } else {
    if (content && type !== 'input'){
      htmlElement.textContent = content;
    }

    if (content && type === 'input'){
      htmlElement.value = content;
      }
    }
  if (classes && classes.length > 0){
    htmlElement.classList.add(...classes);
  }  
  if (id) {
    htmlElement.id = id;
  }
  if (attributes){
    for (const key in attributes){
      htmlElement.setAttribute(key, attributes[key])};
  }
  if (parentNode){
    parentNode.appendChild(htmlElement);
  }
  return htmlElement
}