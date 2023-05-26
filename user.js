const express = require('express')
const axios = require('axios')


const app = express()

app.listen(3000, () => console.log('Rodando na porta 3000'))

app.use(express.json())

//app.listen('3000')


 app.route('/').get( (req, res) => {
     axios.get('https://api.github.com/users/lucas-lcs')
     .then(result => res.send(result.data).json())
     .catch(error => console.log(error))
 })


/// Pegamdo a foto e imprimindo no tela
//app.route('/').get( (req, res) => {
  //  axios.get('https://api.github.com/users/lucas-lcs')
    //.then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    //.catch(error => console.log(error))
//})

//"imag src='" + result.data.avatar_url + "'/>"  esse forma imprime o mesmo resultado de cima! 
