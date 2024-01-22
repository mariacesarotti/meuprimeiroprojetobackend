const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "simara s" ,
        imagem: "https://lh3.googleusercontent.com/a/ACg8ocJ6zFYDhqgPdUSu30-j829Wf9o1KNeENjhmN2eRNYgpaQcB=s576-c-no",
        minibio: "a e b"
    },
    {
        nome: "a a" ,
        imagem: "https://lh3.googleusercontent.com/a/ACg8ocJ6zFYDhqgPdUSu30-j829Wf9o1KNeENjhmN2eRNYgpaQcB=s576-c-no",
        minibio: "vv"
    },
    {
        nome: "b b",
        imagem: "https://lh3.googleusercontent.com/a/ACg8ocJ6zFYDhqgPdUSu30-j829Wf9o1KNeENjhmN2eRNYgpaQcB=s576-c-no",
        minibio: "ggg"
    }
]

function mostraMulheres(request, response)   {
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)