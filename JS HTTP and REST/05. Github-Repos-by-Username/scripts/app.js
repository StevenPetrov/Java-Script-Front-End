function loadRepos() {
	let BASE_URL = 'https://api.github.com/users/username/repos'
	username = document.getElementById('username').value
	list = document.getElementById('repos')
	BASE_URL = BASE_URL.split('/')
	index = BASE_URL.indexOf('username')
	BASE_URL[index] = username
	BASE_URL = BASE_URL.join('/')

	fetch(BASE_URL, {method: 'GET'})
	   .then((response) => response.text())
	   .then((data) => {
		  console.log(data)
	   })
	   .catch((err) => {
	      console.error(err)
	   });

}






// function loadRepos() {
// 	const BASE_URL = 'https://api.github.com/users/testnakov/repos'
// 	const resultContainer = document.getElementById('res')
 
	// fetch(BASE_URL, {method: 'GET'})
	//    .then((response) => response.text())
	//    .then((data) => {
	// 	  resultContainer.textContent = data
	//    })
	//    .catch((err) => {
	//       console.error(err)
	//    });
 