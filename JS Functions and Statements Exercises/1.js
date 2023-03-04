function smallestNumber(...numbers) {
    let result = Number.MAX_VALUE
    for (num in numbers) {
        if (numbers[num] < result){result = numbers[num]}
    }
    console.log(result)
}   


smallestNumber(2,5,3)
smallestNumber(600,

    342,
    
    123)
smallestNumber(25,

    21,
    
    4)
smallestNumber(2,

    2,
    
    2)