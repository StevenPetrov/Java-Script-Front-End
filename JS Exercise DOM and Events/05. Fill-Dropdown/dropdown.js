function addItem() {
    let text = document.getElementById('newItemText').value
    let value = document.getElementById('newItemValue').value
    option = document.createElement('option')
    option.value = value
    option.innerHTML = text
    let select = document.getElementById('menu')
    select.appendChild(option)

    text = document.getElementById('newItemText').value = ''
    value = document.getElementById('newItemValue').value = ''
}