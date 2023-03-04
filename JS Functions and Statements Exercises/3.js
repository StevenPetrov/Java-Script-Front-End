function ascii(start,end) {
    start = start.charCodeAt(0)
    end = end.charCodeAt(0)
    if (start > end) {
        [start, end] = [end, start]
    }
    result = []
    for (let index = start+1; index < end; index++) {
        result.push(String.fromCharCode(index))
    }
    console.log(result.join(' '))
}

ascii('a',

'd')
ascii('#',

':')
ascii('C',
'#')