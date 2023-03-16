function phoneBook(list) {
    let newPhoneBook = {}
    for (let contact of list) {
        contact = contact.split(' ')
        newPhoneBook[contact[0]] = contact[1]
    }
    for (let [key, value] of Object.entries(newPhoneBook)) {
        console.log(`${key} -> ${value}`);
    }
}

phoneBook([
  "Tim 0834212554",

  "Peter 0877547887",

  "Bill 0896543112",

  "Tim 0876566344",
]);
