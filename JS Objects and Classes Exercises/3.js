function storeLoad(params) {
    load = {}
    asdf = 0
    console.log()
    for (let product of params) {
        for (let index = 0; index < product.length; index++) {
            if (index % 2 === 0){
                item = product
                load.hasOwnProperty(item) ? load[item] += Number(product[index + 1]) : load[item] = Number(product[index + 1])
            }
        }
    }
    for (let [key, value] of Object.entries(load)) {
        console.log(`${key} -> ${value}`);
    }
    
}


storeLoad(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
)
