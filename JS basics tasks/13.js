function solve(list) {
    even = 0
    odd =0
    for (num in list) {
        if (list[num] % 2 === 0) {
            even += list[num]
        } else { odd += list[num] }   
    }
    console.log(even-odd)
}

solve([1,2,3,4,5,6])
solve([3,5,7,9])
solve([2,4,6,8,10])