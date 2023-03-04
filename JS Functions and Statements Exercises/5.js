// function palindromeChecker(list) {
//     for (value in list) {
//         numPalCheck(list[value])
//     }

//     function numPalCheck(value){
//         value = value.toString();
//         if (value.length % 2 === 0){
//             part1 = value.substring(0, value.length/2)
//             part2 = reverseStr(value.substring(value.length/2, value.length))
//             part1 === part2 ? console.log("true") : console.log("false")
//         } else {
//             part1 = value.substring(0, value.length/2 - 0.5)
//             part2 = reverseStr(value.substring(value.length/2 + 0.5, value.length))
//             part1 === part2 ? console.log("true") : console.log("false")
//         }
        
//     }

//     function reverseStr(val) {
//         return val.split("").reverse().join("");
//     }
// }

// alternative solution

function palindromeChecker(list) {
    for (value in list) {
        numPalCheck(list[value])
    }

    function numPalCheck(value){
        reversedValue = Number([...String(value)].reverse().join(""))
        // value === reversedValue ? console.log("true") : console.log("false")
        console.log(value === reversedValue)
    }

}

// palindromeChecker([123,323,421,121])
palindromeChecker([32,2,232,1010])