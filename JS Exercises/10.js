function solve(number) {
    word = number.toString();
    isTrue = true;
    checker = word[0]
    sum = 0
    for (x of word){
        if (x !== checker){
            isTrue = false;
        }
        sum += Number(x)
    }
    if ( isTrue === true ) {
        console.log(isTrue)
    } else {
        console.log(isTrue)
    }
    console.log(sum)
}

solve(2222222)
solve(1234)