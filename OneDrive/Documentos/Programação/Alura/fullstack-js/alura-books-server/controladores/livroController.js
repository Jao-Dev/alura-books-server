
const { getTodosLivros, getLivroId, insereLivro, modificaLivro, deletaLivroId} = require("../servicos/livroService")

function getLivros(req, res){
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivroPorId(req, res){
    try {
        const id = req.params.id
        const livro = getLivroId(id)
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res){
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("Livro inserido com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try {
        const id = req.params.id
        const body = req.body

        modificaLivro(body, id)
        res.send("Item modificado com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try {
        const id = req.params.id
        deletaLivroId(id)
        res.send("Livro excluido com sucesso!")
    } catch (error) {
        res.status(404)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivroPorId,
    postLivro,
    patchLivro,
    deleteLivro
}