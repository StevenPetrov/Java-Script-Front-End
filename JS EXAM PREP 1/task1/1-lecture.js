function solve(list) {
    let n = Number(list.shift())








    // numberOfPieces = list[0]
    // pieces = list.slice(1, Number(numberOfPieces)+1)
    // actions = list.slice(Number(numberOfPieces)+1,)
    // piecesFull = []

    // for (x of pieces) {
    //     [ piece, composer, key] = x.split('|')
    //     pieceObj = { piece, composer, key }
    //     piecesFull.push(pieceObj)
    // }

    // for (const action of actions) {
    //     if (action === 'Stop'){;
    //         for (y of piecesFull) {
    //             console.log(`${y.piece} -> Composer: ${y.composer}, Key: ${y.key}`)
    //         }
    //         break
    //     }
    //     [act, piece, composer, key] = action.split('|')
    //     if (act === 'Add'){
    //         let contain  = false
    //         full = piece+'|'+composer+'|'+key
    //         for (obj of piecesFull) {
    //             if (obj.piece === piece){console.log(`${piece} is already in the collection!`)
    //             contain = true
    //             break}
    //             }
    //         if (!contain){
    //             console.log(`${piece} by ${composer} in ${key} added to the collection!`)
    //             pieceObj = { piece, composer, key }
    //             piecesFull.push(pieceObj)
    //             }   
                
    //     }else if (act === 'Remove'){
    //         full = piece+'|'+composer+'|'+key
    //         let contain  = false
    //         for (obj of piecesFull) {
    //             if (obj.piece === piece){
    //             console.log(`Successfully removed ${piece}!`)
    //             dell = piecesFull.indexOf(obj)
    //             piecesFull = piecesFull.slice(0, dell).concat(piecesFull.slice(-dell));
    //             contain = true
    //             break}
    //             }
    //         if (!contain){
    //             console.log(`Invalid operation! ${piece} does not exist in the collection.`)
    //             }   
    //     } else if (act === 'ChangeKey'){
    //         let newKey = composer
    //         let contain  = false
    //         for (obj of piecesFull) {
    //             if (obj.piece === piece){
    //             console.log(`Changed the key of ${piece} to ${newKey}!`)
    //             obj.key = newKey
    //             contain = true
    //             break}
    //             }
    //         if (!contain){
    //             console.log(`Invalid operation! ${piece} does not exist in the collection.`)
    //             }   
    // }

    // }
}

solve(
    [ '3', 'Fur Elise|Beethoven|A Minor', 'Moonlight Sonata|Beethoven|C# Minor', 'Clair de Lune|Debussy|C# Minor', 'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven|C# Minor', 'Remove|Clair de Lune', 'ChangeKey|Moonlight Sonata|C# Major', 'Stop' ]
)