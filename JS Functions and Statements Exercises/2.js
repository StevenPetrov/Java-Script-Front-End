function calc(n1,n2,n3) {
    result = 0
    const sum = (n1,n2) => n1 + n2;
    const subtract = (Mysum, n3) => Mysum - n3
    console.log(subtract(sum(n1,n2), n3))
    
}

calc(23,6,10)
calc(1,17,30)
calc(42,58,100)