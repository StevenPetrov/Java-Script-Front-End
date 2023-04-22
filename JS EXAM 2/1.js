function racing(list) {
    horses = list.splice(0, 1)[0].split('|')

    for (action of list) {
        [act, ...args] = action.split(' ')
        if (act === 'Finish'){
            break
        } else if (act === 'Retake'){
            [first, second] = args
            n1 = horses.indexOf(first)
            n2 = horses.indexOf(second)
            if (n1 < n2){
                horses[n1] = second
                horses[n2] = first
                console.log(`${first} retakes ${second}.`)
            }

        } else if (act === 'Trouble'){
            horse = args[0]
            index = horses.indexOf(horse)
            if (index > 0){
                toPush = horses[index-1]
                toPushIndex = horses.indexOf(toPush)
                horses[toPushIndex] = horse
                horses[index] = toPush
                console.log(`Trouble for ${horse} - drops one position.`)
            }
        } else if (act === 'Rage'){
            horse = args[0]
            index = horses.indexOf(horse)
            newIndex = index +2 
            if (index >= horses.length){ index = horses.length}
            horses.splice(index, 1)
            horses.splice(newIndex,0,horse)
            console.log(`${horse} rages 2 positions ahead.`)
        } else if (act === 'Miracle'){
            horseOfGod = horses.shift()
            horses.push(horseOfGod)
            console.log(`What a miracle - ${horseOfGod} becomes first.`)
        }

    }
    console.log(horses.join('->'))
    winner = horses[horses.length-1]
    console.log(`The winner is: ${winner}`)
}



racing(['Onyx|Domino|Sugar|Fiona',
'Trouble Onyx',
'Retake Onyx Sugar',
'Rage Domino',
'Miracle',
'Finish'])

console.log()

racing(['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])


