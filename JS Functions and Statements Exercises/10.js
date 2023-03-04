// function solve(n1,n2) {

//     function factoriel(num){
//     if (num === 0 || num === 1)
//         return 1;
//     for (i = num - 1; i >= 1; i--) {
//         num *= i;
//         }
//     return num;
//     }
//     result = factoriel(n1)/factoriel(n2)
//     console.log(result.toFixed(2));
// }

//alternative solution

function solve(n1,n2) {

    function factoriel(num){
    if (num === 0 || num === 1)
        return 1;
    return num *factoriel(num-1)
    }
result = factoriel(n1)/factoriel(n2)
console.log(result.toFixed(2));
}


solve(5,2)
solve(6,2)
