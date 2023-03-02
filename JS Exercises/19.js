function solve(word,text) {
    text = text.split(' ');
    checker = false;
    for (x of text) {
        if (x.toLowerCase() === word.toLowerCase()){
            checker = true;
        }
        if (checker){
            console.log(word)
            break;
        }
    }
    if (!checker){console.log(`${word} not found!`)}
}

solve('javascript',

'JavaScript is the best programming language')

solve('python',

'JavaScript is the best programming language')