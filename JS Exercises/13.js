function solve(list, count) {
    for (count; count > 0; count--) {
        let num = list.shift()
        list.push(num)
    }
    console.log(list.join(' '));
}

solve([51,47,32,61,21], 2)