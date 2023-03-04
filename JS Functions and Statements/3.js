function repeatStr(text, count) {
    let result =''
    for (index = 0; index < count; index++) {
        result += text
    }
    return result
}

repeatStr('abc', 3)
repeatStr('String', 2)