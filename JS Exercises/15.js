function solve(params) {
    params.sort()
    counter = 1
    for (let index = 0; index < params.length; index++) {
        console.log(`${counter}.${params[index]}`)
        counter++;
    }
}

solve(["John",

"Bob",

"Christina",

"Ema"])