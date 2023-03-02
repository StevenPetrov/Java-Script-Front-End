function solve(fruit, weight, moneyperkg) {
    weight = weight / 1000
    money = moneyperkg * (weight)
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)