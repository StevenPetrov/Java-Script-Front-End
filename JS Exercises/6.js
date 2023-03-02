function solve(number) {
    sum = 0
    number = number.toString()
    for (x of number){
        sum += Number(x)
    }
    console.log(sum)
}

solve(245678)
solve(97561)
solve(543)