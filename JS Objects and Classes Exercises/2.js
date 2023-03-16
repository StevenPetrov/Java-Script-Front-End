function cityPars(list) {
    let cityObj = [];
    console.log()
    for (const cityInfo of list) {
        cityInfoSplit = cityInfo.split(' | ');
        city = {
            'town': cityInfoSplit[0], 
            'latitude': Number(cityInfoSplit[1]).toFixed(2), 
            'longitude': Number(cityInfoSplit[2]).toFixed(2)}
        cityObj.push(city);
    }
    for (const iterator of cityObj) {
        console.log(iterator)
    }
}

cityPars(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])