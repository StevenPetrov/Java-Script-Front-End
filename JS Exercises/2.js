function solve(ppl, type, date) {
    let price = 0
    if (type === 'Students'){
        if (date === 'Friday'){
            price = 8.45 * ppl
        } else if (date === 'Saturday'){
            price = 9.80 * ppl
        } else if (date === 'Sunday'){
            price = 10.46 * ppl
        }
        
        if (ppl === 30){
            price -= price * 0.15
        }
    } else if (type === 'Business'){
        if (ppl === 100){
            ppl -= 10
        }

        if (date === 'Friday'){
            price = 10.90 * ppl
        } else if (date === 'Saturday'){
            price = 15.60 * ppl
        } else if (date === 'Sunday'){
            price = 16 * ppl
        }
    } else if (type === 'Regular'){
        if (date === 'Friday'){
            price = 15 * ppl
        } else if (date === 'Saturday'){
            price = 20 * ppl
        } else if (date === 'Sunday'){
            price = 22.50 * ppl
        }
        
        if (ppl >= 10 && ppl <= 20){
            price -= price * 0.05
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}


solve(
  30,
  "Students",
  "Sunday"
);

solve(40,

    "Regular",
    
    "Saturday")