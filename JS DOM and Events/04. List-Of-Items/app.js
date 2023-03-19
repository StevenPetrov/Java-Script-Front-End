function addItem() {
    listItems = document.getElementById('items');
    inputAdd = document.getElementById("newItemText" )
    toAppend = document.createElement('li');
    toAppend.textContent = inputAdd.value;
    listItems.appendChild(toAppend);
    inputAdd.value = ''
}