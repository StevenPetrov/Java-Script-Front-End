function subtract() {
    let n1 = document.getElementById('firstNumber')
    let n2 = document.getElementById('secondNumber')

    let result = document.getElementById('result')
    result.innerHTML = n1.value - n2.value
}