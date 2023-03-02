function solve(text) {
    let checker = false;
    let result = []
    listOfTags = text.split(' ');
    for (word of listOfTags) {
        if (word[0] === '#' && word.length > 1){
            for (letter of word){
                function isCharNumber(letter) {
                    return letter >= '0' && letter <= '9';
                  }
                if (isCharNumber(letter) === true){
                    checker = true
                }

            }
            if (checker === false){
                word = word.slice(1)
                result.push(word)
            }
            let checker = false
        }
    }
    console.log(result.join('\n'));
}

solve('#Now2adays everyone uses # to tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')