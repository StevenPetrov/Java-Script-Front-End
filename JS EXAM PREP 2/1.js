function shopping(list) {
    items = list.splice(0, 1);
    items = items[0].split('!');

    for (let action of list) {
        if (action === "Go Shopping!"){
            break;
        }
        action = action.split(' ')
        act = action[0];
        if (act === "Urgent" && !items.includes(action[1])){items.unshift(action[1]);}
        else if (act === "Unnecessary" && items.includes(action[1])){
            items = items.filter(function(item) {
                return item !== action[1]
            })
        }
        else if (act === "Correct" && items.includes(action[1])){
            index = items.indexOf(action[1]);
            items[index] = action[2];
        }
        else if (act === "Rearrange" && items.includes(action[1])){
            items = items.filter(function(item) {
                return item !== action[1]
            })
            items.push(action[1])
        }
    }
    console.log(items.join(', '))
}



// shopping(["Tomatoes!Potatoes!Bread",

// "Unnecessary Milk",

// "Urgent Tomatoes",

// "Go Shopping!"])


shopping(["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",

"Unnecessary Grapes",

"Correct Pepper Onion",

"Rearrange Grapes",

"Correct Tomatoes Potatoes",

"Go Shopping!"])