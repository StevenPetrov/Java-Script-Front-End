function string(value) {
    let person  = JSON.parse(value);
    for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);
    }
}

string('{"name": "George", "age": 40, "town": "Sofia"}')
string('{"name": "Peter", "age": 35, "town": "Plovdiv"}')