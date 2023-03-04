function sums(number) {
    let even = []
    let odd = []
    number = String(number);
        for (x of number) {
        Number(x) % 2 === 0 ? even.push(x) : odd.push(x)
        }
    evenSum = 0 
    oddSum = 0
    even.forEach(item => {evenSum += Number(item)})
    odd.forEach(item => {oddSum += Number(item)})
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

sums(1000435)
sums(3495892137259234)