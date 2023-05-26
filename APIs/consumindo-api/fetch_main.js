
//usando Fetch

const url = "http://localhost:5500/api"

const newUser = {
    name: 'Novo usuário',
    avatar: 'https://picsum.photos/200/300',
    city: 'Rio de Janeiro'
}



const updateUser = {
    name: 'Alterando o avatar',
    avatar: 'https://picsum.photos/200/300',
    city: 'Bahia'
}


//Fazendo GET na api

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

// Imprimindo em tela as informações da api pelos parametros 

function getUser() {
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name 
        userCity.textContent = data.city
        userAvatar.src = data.avatar 
    })
    .catch(error => console.error(error))
}

// Realizando o PUT para alterar as informações da api 

function update(updateUser) {
    fetch(`${url}/1`, {
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers: {
            "Content-type": "Application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
    
}


// Realizamos um post para inserir novo usuário na api 

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "Application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
    
}

// Deletando as informações
function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
            headers: {
                "Content-type": "Application/json; charset=UTF-8"
            }
        
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))

}



// addUser(newUser)
// update(updateUser)
deleteUser(5)
getUsers()
getUser()
