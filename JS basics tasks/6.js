function solve(n1,n2,n3) {
    let largestNum = n1
    if (n1 < n2) {
        largestNum = n2
    } else if (n1 < n3 || (n2 < n3 && n1 < n3)) {
        largestNum = n3
    }
    console.log(`The largest number is ${largestNum}.`)
}

solve(5,-3,16)
solve(-3,-5,-22.5)