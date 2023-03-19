// function calc() {
//     let num1 = document.getElementById('num1');
//     let num2 = document.getElementById('num2');
//     let sumInput = document.getElementById('sum');

//     num1 = Number(num1.value);
//     num2 = Number(num2.value);
//     sum = num1 + num2;

//     sumInput.value = sum
// }

function calc() {
    // Get the input values of num1 and num2
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    // Sum the values
    var sum = num1 + num2;
  
    // Update the sum input field with the calculated value
    document.getElementById("sum").value = sum;
  }