async function loadCommits() {
    let BASE_URL = 'https://api.github.com/repos/<username>/<repository>/commits'
	username = document.getElementById('username').value
	repo = document.getElementById('repo').value
	BASE_URL = BASE_URL.split('/')
	userIndex = BASE_URL.indexOf('<username>')
	userRepo = BASE_URL.indexOf('<repository>')
	BASE_URL[userIndex] = username
	BASE_URL[userRepo] = repo
	BASE_URL = BASE_URL.join('/')

    const commits = document.getElementById('commits')

    try {
        let allCommitsRes = await fetch(BASE_URL, {method: 'GET'})
    let data = await allCommitsRes.json()
    data
        .forEach(({commit}) => {
            let li = document.createElement('li')
            li.textContent = `${commit.author.name}: ${commit.message}`
            commits.appendChild(li)
        })
    } catch (error) {
        console.error(error)
    }
}





// 	fetch(BASE_URL, {method: 'GET'})
// 	   .then((response) => response.json())
// 	   .then((data) => {
// 		  data
//             .forEach(({commit}) => {
//                 let li = document.createElement('li')
//                 li.textContent = `${commit.author.name}: ${commit.message}`
//                 commits.appendChild(li)
//             })
// 	   })
// 	   .catch((err) => {
// 	      console.error(err)
// 	   });

// }
