window.addEventListener("load", solve);

function solve() {
    title = document.getElementById('task-title')
    category = document.getElementById('task-category')
    content = document.getElementById('task-content')
    publishBtn = document.getElementById('publish-btn')
    publishBtn.addEventListener("click", pusblishHandler);

    reviewContainer = document.getElementById('review-list')

    publishContainer = document.getElementById('published-list')

    function pusblishHandler(){
        if (title.value && category.value && content.value){
            mainLi = createElement('li',reviewContainer,null,['rpost']);
            article = createElement('article',mainLi);
            h4 = createElement('h4',article, title.value)
            categoryPar = createElement('p',article,'Category: '+category.value);
            contentPar = createElement('p',article,'Content: '+content.value);
            editBtn = createElement('button',mainLi,'Edit',['action-btn', 'edit'])
            editBtn.addEventListener("click",editHandler);
            postBtn = createElement('button',mainLi,'Post',['action-btn', 'post'])
            postBtn.addEventListener("click",postHandler);
            clearFields();
        }
        
    }

    function clearFields(){
        title.value = ''
        category.value = ''
        content.value = ''
    }

    function editHandler(e){
        title.value = h4.textContent
        category.value = categoryPar.textContent.split('Category: ')[1]
        content.value = contentPar.textContent.split('Content: ')[1]
        main = this.parentNode
        main.remove()
        
    }

    function postHandler(e){
        main = this.parentNode
        main.children[1].remove()
        main.children[1].remove()

        publishContainer.appendChild(main)
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