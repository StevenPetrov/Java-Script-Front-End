function employees(list) {
    employeesObject ={}
    for (const name of list) {
        employeesObject[name] = name.length
    }
    for (let [key, value] of Object.entries(employeesObject)) {
        console.log(`Name: ${key} -- Personal Number: ${value}`);
    }
}

employees([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);


// let employees = [
//     "Silas Butler",
  
//     "Adnaan Buckley",
  
//     "Juan Peterson",
  
//     "Brendan Villarreal",
//   ].reduce((data, employee) => {data[employee]=employee.length; return data}, {})
