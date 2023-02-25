function solve(text, word) {
    newText = text.split(' ');
    let count = 0;
    for (i of newText) {
        if (i === word){
            count++;
        }
    }
    console.log(count);
}

solve('This is a word and it also is a sentence','is')