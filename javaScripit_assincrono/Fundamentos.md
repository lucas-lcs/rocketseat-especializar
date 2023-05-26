# Assíncronismo

## Assíncronismo vs Síncronismo

- *Síncronismo* 
    - Um sistema síncrono (synchronous) é uma tarefa que é concluída após a outra.Ou seja, no sistema síncrono a tarefa _**anterior precisa ser concluída, para então iniciar a próxima**_. Por padrão, o JavaScript é um sistema síncrono

- *Assíncronismo*
    - Num sistema assíncrono (asynchronous) as tarefas são executadas de maneira independente uma da outra. **Ou seja não é necessário esperar carregar para iniciar o carregamento da próxima**.O JavaScript poderá usar o assincronismo ao seu favor

- *Callback* 
    - Antes de entender o conceito de Callback no JavaScript, primeiro precisamos entender que funções aceitam qualquer tipo de dado como argumento, então no JavaScript é possível passar qualquer tipo de dado em uma função.
    Callback (chamar de volta) é uma função que é passada como argumento de outra função e depois de algum tempo ela é chamada de volta.

        ```javaScript
        function imprimirDado(dado) {
        	console.log(dado)
        }

        imprimirDado(1) 
        imprimirDado('texto') 
        imprimirDado(true)
        imprimirDado({ nome: 'João' })
        imprimirDado([1, 2, 3])

        //callback
        function imprimirDado(dado) {
        	console.log('outras tarefas')
        	console.log(dado())
        }
        //callback onde o imprimir recebe uma função que irá ser retornada ao ser chamada no dado()
        imprimirDado(function () {
        	return 'Olá Mundo'
        })

        ```

- *setTimeout*
    - setTimeout() é uma função que recebe como argumento uma outra função e um tempo para ser executada.
        ```javaScript
            // setTimeout(function, delay)
            setTimeout(function () {
	            console.log('depois de 1s')
            }, 1000)
        ```
    A função de argumento do setTimeout é uma callback, ela vai executar depois de um certo tempo. No caso do exemplo acima, a função vai ser executada depois de 1000ms que é o mesmo que 1s.

- *Conectando API com HTTPS e CALLBACK*
    - vamos verificar se estamos entendendo como que funciona o callback e o assincronismo no JavaScript.
        ```javaScript

        const https = require('http')
        const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

        https.get(API, res => {
        	console.log(res.statusCode)
        })

        console.log('conectando API')

        //resposta:
        // Conectando API
        // 200

        ```

## O que é uma Promise
- É um objeto JavaScript com a promessa de que algo será realizado
É usado para operações assíncronas
Não bloqueia outras operações
Essa promessa não significa que vai dar certo ou que vai dar errado.
Exemplo:

    - Carregar um arquivo
    Leitura de dados de uma API
    Uma promessa poderá ser:

    - _Pending:_ Estado inicial, assim que o objeto da promessa é iniciado
    - _Fulfilled:_ A promessa foi concluída com sucesso
    - _Rejected:_ A promessa foi rejeitada, houve um erro
    - _Settled:_ Seja com sucesso ou erro, ela foi finalmente concluída

    ```javaScript
        // Promessa retorna com sucesso
    console.log('pedir uber') 
    const promessa = new Promise((resolve, reject) => {
    	return resolve('carro chegou')
    })

    console.log('aguardando')

    promessa.then(result => console.log(result))

    // Promessa é rejeitada e usamos o catch() para capturar o erro
    console.log('pedir uber') 
    const promessa = new Promise((resolve, reject) => {
    	return reject('pedido negado!')
    })

    console.log('aguardando')

    promessa
    	.then(result => console.log(result))
    	.catch(erro => console.log(erro))

    let aceitar = true

    console.log('pedir uber') 
    const promessa = new Promise((resolve, reject) => {
    	if (aceitar) {
    		return resolve('pedido aceito!')
    	}

    	return reject('pedido negado!')
    })

    console.log('aguardando')

    promessa
    	.then(result => console.log(result))
    	.catch(erro => console.log(erro))
    	.finally(() => console.log('finalizada'))
    ```

- *Promises com Fetch*
    - O método global fetch() inicia o processo de busca de um recurso da rede, retornando uma promessa que é cumprida assim que a resposta estiver disponível.
    Aqui pegamos o meu repositório e todos e buscamos com o fetch todos os meus projetos listados em json. 
    ```javaScript
        fetch('https://api.github.com/users/lucas-lcs')
        .then(response => response.json())
        .then(data => fetch(data.repos_url))
        .then(res => res.json())
        .then(d => console.log(d))
    ```

- *Axios* 
    - Axios é um cliente HTTP baseado em promessa simples para o navegador e node.js. Axios fornece uma biblioteca simples de usar em um pacote pequeno com uma interface muito extensível.




    ```javaScript
    import axios from 'axios'


    axios.get('https://api.github.com/users/lucas-lcs')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => console.log(error))
    ```
    - Executando promessas em paralelo com promise all

    ```javascript
    import axios from 'axios'


    Promise.all([
    axios.get('https://api.github.com/users/lucas-lcs'),
    axios.get('https://api.github.com/users/lucas-lcs/repos')
    ])
    .then(responses => {
      console.log(responses[0].data.login)
      console.log(responses[1].data.length)
    }).catch(err => console.log(err.menssage))

    ```

    # Async  Await

- Maneira de se escrever promessas 
- Syntactic sugar 

``` javaScript

const promessa = new Promise(function ( resolve, reject) {
  return reject('true')
})

async function start() {
 try {
   const result = await promessa
   console.log(result)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('Rodar sempre')
  }
}

start()


// subistituindo pelo código acima
// promessa 
//   .then(function (response) {
//     console.log(response)
//   }).catch(function (error) {
//     console.log(error)
//   }).finally(function() {
//     console.log('Sempre irei executar')
//   }) 

```

## Async Await com Fetch

```javaScript 
// Forma antiga 
fetch('https://api.github.com/users/lucas-lcs')
        .then(response => response.json())
        .then(data => fetch(data.repos_url))
        .then(res => res.json())
        .then(d => console.log(d))



//Forma mais simplificada 
async function start(){
  try{
    const response = await fetch('https://api.github.com/users/lucas-lcs')
    const user = await response.json()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
  }catch ( e) {
    console.log(e)
  }
}

// forma mais e mais  simplificada

async function start() {
  const user = await fetch('https://api.github.com/users/lucas-lcs').then(r => r.json)
  const UserRepos = await fetch(user.repos_url).then(r => r.json())
  console.log(UserRepos)
}

startt()
start()
```

## Async Await com Axios 

```javaScript
import axios from 'axios'

async function fetchRepos() {
  try {
    const user = await axios.get('https://api.github.com/users/lucas-lcs')
    const repos = await  axios.get(user.data.repos_url)
    console.log(repos.data)
} catch (e) {
    console.log(e)
  }
}

fetchRepos()
```


