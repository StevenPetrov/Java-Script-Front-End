function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/'

    let phonebook = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', phoneBookLoader)
    

    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate')
    createBtn.addEventListener('click', createContact);

    

    function phoneBookLoader(){
        fetch (BASE_URL)
        .then(response => response.json())
        .then((phones) => {
            values = Object.values(phones);
            phonebook.innerHTML = ''
            for (const contact of values) {
                li = document.createElement('li');
                deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete'
                deleteBtn.id = contact._id
                deleteBtn.addEventListener('click', deleteContact)
                li.textContent = `${contact.person}: ${contact.phone}`
                li.appendChild(deleteBtn);
                phonebook.appendChild(li);
            }
        })

    }

    function createContact(){
        person = personInput.value
        phone = phoneInput.value
        httpHeaders = {
            method: 'POST',
            body: JSON.stringify({person: person, phone: phone})
        }

        fetch (BASE_URL, httpHeaders)
            .then(res => res.json())
            .then(() => {
                phoneBookLoader();
                personInput.value = ''
                phoneInput.value = ''
            })
    }

    async function deleteContact(e){
        // const id = this.id
        const id = e.currentTarget.id
        const httpHeaders = {
            method: 'DELETE',
        }
        fetch (`${BASE_URL}${id}`, httpHeaders)
            .then(res => res.json())
            .then(() => {
                phoneBookLoader()
            })
    }
}

attachEvents();

