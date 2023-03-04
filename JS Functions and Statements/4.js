function calcOrders(product, count) {
    let productPrices = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00,
    }
    result = productPrices[product]*count
    console.log(result.toFixed(2))
}

calcOrders('water', 5)
calcOrders("coffee", 2)