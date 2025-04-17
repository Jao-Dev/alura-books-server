
const port = 8000;

const express = require("express");
const app = express();

const rotaLivro = require("./rotas/livro");


app.use("/livros", rotaLivro)

app.listen(port, ()=> {
    console.log(`Escutando a porta ${port}`)
})

