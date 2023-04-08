
function attachEvents() {
    BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

    loadBtn = document.getElementById('load-board-btn');
    loadBtn.addEventListener('click',loadBoard)

    addBtn = document.getElementById('create-task-btn');
    addBtn.addEventListener('click',addTaskHandler)

    toDoBoard = document.getElementsByClassName('task-list')[0]
    inProgressBoard = document.getElementsByClassName('task-list')[1]
    codereviewBoard = document.getElementsByClassName('task-list')[2]
    doneBoard = document.getElementsByClassName('task-list')[3]

    titleInput = document.getElementById('title')
    descInput = document.getElementById('description')

    function loadBoard() {
        fetch(BASE_URL)
            .then(res => res.json())
            .then((loadedProducts)=> {

                toDoBoard.innerHTML = ''
                inProgressBoard.innerHTML = ''
                codereviewBoard.innerHTML = ''
                doneBoard.innerHTML = ''


                tasks = Object.values(loadedProducts)
                for (const { title, description, status, _id} of tasks){
                    li = createElement('li',null,null,['task'],_id)
                    h3 = createElement('h3',li,title,)
                    p = createElement('p',li,description)
                    if (status === 'ToDo'){
                        button = createElement('button',li,'Move to In Progress')
                        button.addEventListener('click',moveHandler) 
                        toDoBoard.appendChild(li)
                    } else if (status === 'In Progress'){
                        button = createElement('button',li,'Move to Code Review')
                        button.addEventListener('click',moveHandler) 
                        inProgressBoard.appendChild(li)
                    } else if (status === 'Code Review'){
                        button = createElement('button',li,'Move to Done')
                        button.addEventListener('click',moveHandler) 
                        codereviewBoard.appendChild(li)
                    } else if (status === 'Done'){
                        button = createElement('button',li,'Close')
                        button.addEventListener('click',moveHandler) 
                        doneBoard.appendChild(li)
                    }

                }
            })
    }

    function addTaskHandler(){
        titleInputPush = titleInput.value
        descInputPush = descInput.value

        httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                title: titleInputPush,
                description: descInputPush,
                status: 'ToDo'})
          }
        fetch(BASE_URL,httpHeaders)
          .then(res=>res.json())
          loadBoard()

          titleInput.value = ''
          descInput.value = ''
    }

    function moveHandler(e){
        id = this.parentNode.id
        let statusToPush
        currentStatus = (this.parentNode.children[2]).textContent
        if (currentStatus === 'Move to In Progress'){
            statusToPush = 'In Progress'
        } else if (currentStatus === 'Move to Code Review'){
            statusToPush = 'Code Review'
        } else if (currentStatus === 'Move to Done'){
            statusToPush = 'Done'
        } else if (currentStatus === 'Close'){
            deleteHandler(id)
        }
            


        httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({
                status: statusToPush,
                })
            }
        
            fetch(BASE_URL+id,httpHeaders)
            .then(res=>res.json())
                .then(()=>{
                    loadBoard()})
    }

    function deleteHandler(id){
        httpHeaders = {
            method: 'DELETE',
          }
          fetch(BASE_URL+id, httpHeaders)
            .then(res => res.json())
            .then(() => {loadBoard()})
    }
    function createElement(type, parentNode, content, classes, id, attributes, useInnerHTML) {
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