BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
loadBtn = document.getElementById('load-course')
loadBtn.addEventListener('click',loadHandler)

courseContainer = document.getElementById('list')
titleForm = document.getElementById('course-name')
typeForm = document.getElementById('course-type')
descriptionForm = document.getElementById('description')
teacherForm = document.getElementById('teacher-name')
addBtnFrom = document.getElementById('add-course')
addBtnFrom.addEventListener('click',addHandler)

editBtnFrom = document.getElementById('edit-course')
editBtnFrom.addEventListener('click', editHandler)


function loadHandler(){
    fetch(BASE_URL)
        .then(res => res.json())
        .then((courses)=> {
            courseContainer.innerHTML = ''
            courseInfo = Object.values(courses)
            for (const {title,type,description,teacher,_id} of courseInfo){
                mainDiv = createElement('div',courseContainer,null,['container'],_id);
                h2 = createElement('h2',mainDiv,title)
                h3Teacher = createElement('h3',mainDiv,teacher)
                h3Type = createElement('h3',mainDiv,type)
                h4 = createElement('h4',mainDiv,description)
                editBtn = createElement('button',h4,'Edit Course',['edit-btn'])
                editBtn.addEventListener('click',editLoader)

                finishBtn = createElement('button',h4,'Finish Course',['finish-btn'])
                finishBtn.addEventListener('click', deleteHandler)
            }
        })
}

function addHandler(e){
    e.preventDefault()
    title = titleForm.value
    type = typeForm.value
    description = descriptionForm.value
    teacher = teacherForm.value

    if (title,type,description,teacher){
        if (type === 'Long' || type === 'Medium' || type === 'Short'){
            httpHeaders = {
                method: 'POST',
                body: JSON.stringify({
                    title, type, description, teacher})
            }
        
            fetch(BASE_URL,httpHeaders)
                .then(res=>res.json())
                .then(()=>{
                    clearFields()
                    loadHandler()})
        }
        
    }
    loadHandler()
    clearFields()
    
    

}

function clearFields(){
            titleForm.value = ''
            typeForm.value = ''
            descriptionForm.value = ''
            teacherForm.value = ''
}

function editLoader(){
    courseEditID = this.parentNode.parentNode.id
    titleForm.value = this.parentNode.parentNode.children[0].textContent
    teacherForm.value = this.parentNode.parentNode.children[1].textContent
    typeForm.value = this.parentNode.parentNode.children[2].textContent
    descriptionForm.value = (this.parentNode.parentNode.children[3].textContent).split('Edit Course')[0]

    addBtnFrom.setAttribute('disabled',true)
    editBtnFrom.removeAttribute('disabled')
}

function editHandler(e){
    e.preventDefault()
    title = titleForm.value
    type = typeForm.value
    description = descriptionForm.value
    teacher = teacherForm.value
    
    httpHeaders = {
        method: 'PATCH',
        body: JSON.stringify({
            title,type,description,teacher})
        }
    fetch(BASE_URL+courseEditID,httpHeaders)
        .then(res=>res.json())
        .then(()=>{
            loadHandler()
            editBtnFrom.setAttribute('disabled',true)
            addBtnFrom.removeAttribute('disabled')
            clearFields()
        })

}

function deleteHandler(e){
    courseDeleteID = this.parentNode.parentNode.id
    httpHeaders = {
        method: 'DELETE',
      }
      fetch(BASE_URL+courseDeleteID, httpHeaders)
        .then(res => res.json())
        .then(() => {loadHandler()})
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