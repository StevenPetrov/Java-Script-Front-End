function getInfo() {
    const busNumber = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const busesLi = document.getElementById('buses');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';

    busesLi.innerHTML = ''
    fetch(`${BASE_URL}${busNumber}`)
        .then(response => response.json())
        .then((busInfo) => {
            const { name,buses } = busInfo
            stopName.textContent = name
            for (const bus in buses) {
                const li = document.createElement('li')
                li.textContent = `"Bus ${bus} arrives in ${buses[bus]} minutes"`
                busesLi.appendChild(li)
            }
        })
        .catch((error) => {
            stopName.textContent = 'Error'

        })
}