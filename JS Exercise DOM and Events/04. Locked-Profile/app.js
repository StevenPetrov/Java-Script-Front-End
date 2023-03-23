function lockedProfile() {
    buttons = Array.from(document.getElementsByTagName('button'));
    for (button of buttons){
        button.addEventListener('click', showMore)
    }

    function showMore(e) {
        let radioStatus = e.currentTarget.parentNode.getElementsByTagName('input')[1]
        if (radioStatus.checked){
            let name = e.currentTarget.parentNode.getElementsByTagName('div')[0]
            if (e.currentTarget.innerHTML === 'Show more'){
                name.style.display = 'block';
                e.currentTarget.innerHTML = 'Hide it';
            } else {
                name.style.display = 'none';
                e.currentTarget.innerHTML = 'Show more';
            }
        }
    }
}