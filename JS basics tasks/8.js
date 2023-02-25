function solve(params) {
    if (typeof params === 'number') {
        result = (Math.pow(params, 2) * Math.PI).toFixed(2)
        console.log(result);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof params}.`)
    }
}
solve(5)
solve('asd')