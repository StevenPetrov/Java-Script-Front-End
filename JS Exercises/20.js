function solve(text) {
    temp = 0
    wordsList = []
    for (let index = 0; index < text.length; index++) {
        if (text[index] == text[index].toUpperCase()) {
            start = temp
            end = index
            word = text.slice(start, end)
            if (word.length > 0){
                wordsList.push(word)
            }
            temp = index
        }
    }
    start = temp
    end = text.length
    word = text.slice(start, end)
    wordsList.push(word)

    console.log(wordsList.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')