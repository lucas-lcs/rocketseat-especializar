const express = require('express')

const app = express()

app.listen('3000')

// # GET

// app.route('/').get( (req, res) => res.send("Hello Word") ) // método Get para apresentar o conteo no no navegador


// // # POST

// //middleware é a ponte entre a chamada de api e o server criado
// // dizemos com use que o express vai usar alguma coisa que no caso é o json quando passamos dentro do parenteses 

app.use(express.json())// use() serve para pegar os meddleware. pgamos o express para pegar o que está dentro dele e tranformamos em Json! 

app.route('/').post( (req, res) => res.send(req.body))// pegamos a res e enviamos a req.body para a api! 

// // # PUT

// //observando o que tinhamos antes da alterar 

// app.route('/').get( (req, res) => res.send(author))

// let author = 'Lucas'
// app.route('/').put( (req, res) => {
//     author = req.body.author
//     res.send(author)
// })

// // # DELETE 

// let authorr = 'Lucas'

// app.route('/:identificador').delete( (req, res)  => {
//     res.send(req.params.identificador)
// })


// Formas de envio de paramentros por requisição!

// app.route('/').get( (req, res) => res.send(req.query.name))

// app.route('/').post( (req, res) => res.send(req.body))

// app.route('/').get( (req, res) => res.send(req.params.parametro))


// - Body Params

// app.use(express.json())

// app.route('/').put( (req, res) => {
//     // pegando mais de um do body
//     const {nome, Atividades} = req.body
//     res.send(`Meu nome é ${nome}, as atividades que gosto é ${Atividades} `)
// })


// - Route Params
// app.route('/').get( (req, res) => res.send('OI'))

// app.route('/:nome').get( (req, res) => res.send(req.params.nome))
// app.route('/pagina/:nome').get( (req, res) => res.send(req.params.nome))


// - Query params


//app.route('/').get( (req, res) => res.send(req.query.nome))


//app.route('/about/user').get( (req, res) => res.send(req.query.id))

