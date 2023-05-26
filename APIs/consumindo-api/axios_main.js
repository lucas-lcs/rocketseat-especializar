// Utilizei esse projeto para realizar as chamadas https://github.com/jakeliny/node-api-discover
// E alterei os dados do usuário para o meu user.
const url = 'http://localhost:5500/api'

// Usamos o get para pegar todos os usuários cadatrados

function getUsers() {
    axios.get(url)
    .then(response =>  apiResponse.textContent = JSON.stringify(response.data))
    .catch(error => console.error(error))
}

const newUser = {
    name: 'Lucas FOI',
    avatar: 'https://picsum.photos/200/300',
    city: 'São Paulo'
}

// Usamos o put para criar novos usuários no sistema

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(reponse => console.log(reponse))
    .catch(error => console.error(error))
}

// Utilizando o get para pegar um usuário especifico e apresentar os dados na tela

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        userId.textContent = response.data.id
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}


// Usamos o put para alterar os dados do usuário cadastrado no sistema

const userUpdatad = {
    name: 'Lucas Alterando',
    avatar: 'https://picsum.photos/200/300',
    city: 'São Alterado'
}


function updataUser(id, user) {
    axios.put(`${url}/${id}`, user)
    .then(response => console.log(response))
    .catch(error => console.error(error))

}

// Usamos o delete para deletar o usuário pelo Id

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response) )
    .catch(error => console.error(error))
}




getUsers()
getUser(1)
addNewUser(newUser)
updataUser(4, userUpdatad)
deleteUser(4)