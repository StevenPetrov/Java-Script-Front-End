function addItem() {
    listItems = document.getElementById('items');
    inputAdd = document.getElementById("newItemText" )
    toAppend = document.createElement('li');
    newAnchor = document.createElement('a');
    toAppend.textContent = inputAdd.value;
    newAnchor.textContent = '[Delete]';
    newAnchor.setAttribute('href', '#'); // може да се обави getAttribute
    // newAnchor.href = '#';
    toAppend.appendChild(newAnchor)
    
    listItems.appendChild(toAppend);
    newAnchor.addEventListener("click", removeItem);
    function removeItem(e) {
        // element = e.currentTarget;
        this.parentNode.remove();
    }
    inputAdd.value = ''
}

