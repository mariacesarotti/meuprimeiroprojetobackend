const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: "maria sampaio",
        imagem: "https://lh3.googleusercontent.com/a/ACg8ocJ6zFYDhqgPdUSu30-j829Wf9o1KNeENjhmN2eRNYgpaQcB=s576-c-no",
        minibio: "colorista e desenvolvedora jr"
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)