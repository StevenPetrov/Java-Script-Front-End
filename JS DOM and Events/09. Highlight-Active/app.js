function focused() {
    const inputs = Array.from(document.querySelectorAll('input'));
    for (let input of inputs) {
        input.addEventListener('focus', (event) => {
            const div = event.target.parentNode;
            div.classList.add('focused');
        });
        input.addEventListener('blur', (event) => {
            const div = event.target.parentNode;
            div.classList.remove('focused');
        });
    }
}