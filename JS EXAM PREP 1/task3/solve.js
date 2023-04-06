// TODO
function attachEvents() {
    BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    titleInput = document.getElementById('title')
    todoList = document.getElementById('todo-list')

    load = document.getElementById('load-button')
    load.addEventListener('click', loadHandler)

    add = document.getElementById('add-button')
    add.addEventListener('click', addHandler)


  function loadHandler(e){
    e.preventDefault();
    todoList.innerHTML = ''
    fetch(BASE_URL)
        .then(res => res.json())
        .then((tasksRes)=> {
          tasks = Object.values(tasksRes)
          for (const { _id, name} of tasks) {
            li = creatElement('li', todoList, null, null, _id);
            span = creatElement('span', li, name);
            remove = creatElement('button', li, 'Remove');
            edit = creatElement('button', li, 'Edit');

            remove.addEventListener('click', removeHandler)
            edit.addEventListener('click', editHandler)

          }
        })
        
  }

  function addHandler(e){
    e.preventDefault()
    taskName = titleInput.value
    httpHeaders = {
      method: 'POST',
      body: JSON.stringify({name: taskName})
    }
    fetch(BASE_URL, httpHeaders)
    titleInput.value = ''
    loadHandler(e)

  }

  function removeHandler(e){
    e.preventDefault()
    id = this.parentNode.id
    httpHeaders = {
      method: 'DELETE',
    }
    fetch(BASE_URL+id, httpHeaders)
      .then(res => res.json())
      .then(() => {loadHandler(e)})
    
  }

  function editHandler(e){
    const [ span, remove, edit] = Array.from(this.parentNode.children)
    input  = document.createElement('input')
    input.value = span.textContent
    submit = document.createElement('button')
    submit.textContent = 'Submit'
    this.parentNode.prepend(input)
    this.parentNode.append(submit)
    span.remove()
    edit.remove()

    submit.addEventListener('click', submitHandler)

  }

  function submitHandler(e){
    const [ input ] = Array.from(this.parentNode.children)
    id = this.parentNode.id

    httpHeaders = {
      method: 'PATCH',
      body: JSON.stringify({name: input.value})
    }
    fetch(BASE_URL+id, httpHeaders)
      .then(res => res.json())
      .then(() => {
        titleInput.value = ''
        loadHandler(e)
      })
    
  }
  // null safe operation e?.preventDefault() #TODO: remove
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
}



attachEvents();
