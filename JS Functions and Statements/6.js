function positiveCheck(...args) {
    result = args.filter((num) => num < 0).length % 2 === 0 ? 'Positive' : 'Negative'
    console.log(result)
}

positiveCheck(5,12,-15)