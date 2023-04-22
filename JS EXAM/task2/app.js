window.addEventListener('load', solve);

function solve() {
    pointsContainer = document.getElementById('total-sprint-points')

    titleInput = document.getElementById('title');
    descInput = document.getElementById('description');
    labelInput = document.getElementById('label');
    pointsInput = document.getElementById('points');
    assigneeInput = document.getElementById('assignee');
    taskContainer = document.getElementById('tasks-section')
    createBtn = document.getElementById('create-task-btn');
    createBtn.addEventListener('click', createTaskHandler);

    taskid = document.getElementById('task-id')

    deleteBtn = document.getElementById('delete-task-btn');
    deleteBtn.addEventListener('click', deleteTaskHandler);
    totalpoints = 0
    uniqueTaskFounder = 0

    counter = 1


    function createTaskHandler(){
        if (titleInput.value && descInput.value && labelInput.value && pointsInput.value && assigneeInput.value){
            uniqueTaskFounder += 1
            article = createElement('article',taskContainer,null,['task-card'],`task-${counter}`);
            if (labelInput.value == 'Feature'){
                label = createElement('div',article,labelInput.value+' ⊡',['task-card-label','feature']);
            } else if (labelInput.value == 'Low Priority Bug'){
                label = createElement('div',article,labelInput.value+' ☉',['task-card-label','low-priority']);
            } else if (labelInput.value == 'High Priority Bug'){
                label = createElement('div',article,labelInput.value+' ⚠',['task-card-label','high-priority']);
            }
            h3 = createElement('h3', article,titleInput.value,['task-card-title']);
            desc = createElement('p',article,descInput.value,['task-card-description']);
            points = createElement('div', article,`Estimated at ${pointsInput.value} pts`,['task-card-points']);
            assignee = createElement('div', article, `Assigned to: ${assigneeInput.value}`,['task-card-assignee']);
            buttonContainer = createElement('div',article,null,['task-card-actions']);
            buttonDel = createElement('button', buttonContainer,'Delete',null,uniqueTaskFounder)
            buttonDel.addEventListener('click', loadDelete)

            pointsUpdate(pointsInput.value)
            clearInputFields()
            counter ++
        }
    }

    function clearInputFields() {
    titleInput.value = ''
    descInput.value = ''
    labelInput.value = ''
    pointsInput.value = ''
    assigneeInput.value = ''
    taskContainer.value = ''
    }

    function pointsUpdate(points) {
        totalpoints += Number(points)
        pointsContainer.textContent = `Total Points: ${totalpoints}pts`
    }

    function loadDelete(e){
    mainMain = this.parentNode.parentNode.children
    titleInput.value = (mainMain[1]).textContent
    descInput.value = (mainMain[2]).textContent
    labelInput.value = ((this.parentNode.parentNode.children[0]).textContent).split(' ')[0]
    pointsInput.value = Number((this.parentNode.parentNode.children[3]).textContent.split(' ')[2])
    assigneeInput.value = (this.parentNode.parentNode.children[4]).textContent.split(' ')[2]
    createBtn.disabled = true
    deleteBtn.disabled = false
    taskid.value = this.id

    }

    function deleteTaskHandler(){
        toBeDeleted = document.getElementById(taskid.value)
        masterDOM = toBeDeleted.parentNode.parentNode

        pointsdel = Number((toBeDeleted.parentNode.parentNode.children[3]).textContent.split(' ')[2])
        pointsUpdate(-pointsdel)

        masterDOM.remove()

        createBtn.disabled = false
        deleteBtn.disabled = true
        clearInputFields()

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