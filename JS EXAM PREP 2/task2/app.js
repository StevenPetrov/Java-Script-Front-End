window.addEventListener('load', solve);

function solve() {
    hitsContainer = document.getElementsByClassName('all-hits-container')[0];
    savedContainer = document.getElementsByClassName('saved-container')[0];

    addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', songSaver );

    genreInput = document.getElementById('genre');
    nameInput = document.getElementById('name');
    authorInput = document.getElementById('author');
    dateInput = document.getElementById('date');

    getLikes = document.getElementsByClassName('likes')[0]
    totalLikes = document.getElementById('total-likes')
    likesCount = 0



    function songSaver(e) {
        if (genreInput.value && nameInput.value && authorInput.value && dateInput.value) {
            e.preventDefault();
            container = createElement('div',hitsContainer);
            container.className = 'hits-info'
            img = createElement('img',container)
            img.setAttribute('src','./static/img/img.png')
            genre = createElement('h2',container,'Genre: '+ genreInput.value)
            songName = createElement('h2',container,'Name: '+ nameInput.value)
            author = createElement('h2',container,'Author: '+ authorInput.value)
            date = createElement('h3',container,'Date: '+ dateInput.value)
            saveBtn = createElement('button',container,'Save song')
            saveBtn.className = 'save-btn'
            saveBtn.addEventListener('click',saveSong)
            likeBtn = createElement('button',container,'Like song')
            likeBtn.className = 'like-btn'
            likeBtn.addEventListener('click',likeHandler)
            deleteBtn = createElement('button',container,'Delete')
            deleteBtn.className = 'delete-btn'
            deleteBtn.addEventListener('click',deleteHandler)

            genreInput.value = '';
            nameInput.value = '';
            authorInput.value = '';
            dateInput.value = '';
        }

    }

    function likeHandler(){
        getLikes.remove()
        pLikes = likesCount
        imgLike = createElement('img')
        imgLike.setAttribute('src', './static/img/like-btn.jpg')
        imgLike.setAttribute('alt', 'image-like')
        likeNum = Number(likesCount)+1
        likesCount = likeNum
        
        getLikes = createElement('div',totalLikes)
        NewPlike = createElement('p',getLikes,'Total Likes: '+likeNum)
        getLikes.appendChild(imgLike)
        
        getLikes.className = 'likes'
        likeBtn.disabled = true
        
    }

    function saveSong(e){
      songContainer = this.parentNode
      saveBtnDel = this.parentNode.children[5]
      likeBtnDel = this.parentNode.children[6]
      saveBtnDel.remove()
      likeBtnDel.remove()
      savedContainer.appendChild(songContainer)
    }

    function deleteHandler(e){
      songContainer = this.parentNode
      songContainer.remove()
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